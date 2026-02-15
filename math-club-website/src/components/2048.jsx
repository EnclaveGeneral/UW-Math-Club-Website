import { useState, useEffect, useCallback } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// Tile colors based on value
const TILE_COLORS = {
  0: "#cdc1b4",
  2: "#eee4da",
  4: "#ede0c8",
  8: "#f2b179",
  16: "#f59563",
  32: "#f67c5f",
  64: "#f65e3b",
  128: "#edcf72",
  256: "#edcc61",
  512: "#edc850",
  1024: "#edc53f",
  2048: "#edc22e",
};

// Text color: dark for small tiles, white for larger
const TEXT_COLORS = {
  0: "transparent",
  2: "#776e65",
  4: "#776e65",
  8: "#ffffff",
  16: "#ffffff",
  32: "#ffffff",
  64: "#ffffff",
  128: "#ffffff",
  256: "#ffffff",
  512: "#ffffff",
  1024: "#ffffff",
  2048: "#ffffff",
};

// Creates a blank 4x4 board
function createEmptyBoard() {
  return Array.from({ length: 4 }, () => Array(4).fill(0));
}

// Places a random tile (2 or 4) on an empty cell
function addRandomTile(board) {
  const newBoard = board.map((row) => [...row]);
  const emptyCells = [];

  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      if (newBoard[r][c] === 0) {
        emptyCells.push({ r, c });
      }
    }
  }

  if (emptyCells.length === 0) return newBoard;

  const { r, c } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  newBoard[r][c] = Math.random() < 0.9 ? 2 : 4;
  return newBoard;
}

// Slides a single row to the left and merges matching tiles
function slideRow(row) {
  // Remove zeros
  let filtered = row.filter((val) => val !== 0);
  let score = 0;

  // Merge adjacent equal tiles
  for (let i = 0; i < filtered.length - 1; i++) {
    if (filtered[i] === filtered[i + 1]) {
      filtered[i] *= 2;
      score += filtered[i];
      filtered[i + 1] = 0;
    }
  }

  // Remove zeros again after merging
  filtered = filtered.filter((val) => val !== 0);

  // Pad with zeros to length 4
  while (filtered.length < 4) {
    filtered.push(0);
  }

  return { newRow: filtered, score };
}

// Moves the entire board in a direction
function moveBoard(board, direction) {
  let newBoard = board.map((row) => [...row]);
  let totalScore = 0;

  if (direction === "left") {
    for (let r = 0; r < 4; r++) {
      const { newRow, score } = slideRow(newBoard[r]);
      newBoard[r] = newRow;
      totalScore += score;
    }
  } else if (direction === "right") {
    for (let r = 0; r < 4; r++) {
      const { newRow, score } = slideRow([...newBoard[r]].reverse());
      newBoard[r] = newRow.reverse();
      totalScore += score;
    }
  } else if (direction === "up") {
    for (let c = 0; c < 4; c++) {
      const column = [newBoard[0][c], newBoard[1][c], newBoard[2][c], newBoard[3][c]];
      const { newRow, score } = slideRow(column);
      for (let r = 0; r < 4; r++) {
        newBoard[r][c] = newRow[r];
      }
      totalScore += score;
    }
  } else if (direction === "down") {
    for (let c = 0; c < 4; c++) {
      const column = [newBoard[3][c], newBoard[2][c], newBoard[1][c], newBoard[0][c]];
      const { newRow, score } = slideRow(column);
      const reversed = newRow.reverse();
      for (let r = 0; r < 4; r++) {
        newBoard[r][c] = reversed[r];
      }
      totalScore += score;
    }
  }

  return { newBoard, totalScore };
}

// Checks if the board changed after a move
function boardsEqual(a, b) {
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      if (a[r][c] !== b[r][c]) return false;
    }
  }
  return true;
}

// Checks if any moves are possible
function canMove(board) {
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      if (board[r][c] === 0) return true;
      if (c < 3 && board[r][c] === board[r][c + 1]) return true;
      if (r < 3 && board[r][c] === board[r + 1][c]) return true;
    }
  }
  return false;
}

// Initialize a board with two random tiles
function initBoard() {
  let board = createEmptyBoard();
  board = addRandomTile(board);
  board = addRandomTile(board);
  return board;
}

export default function Game2048() {
  const [board, setBoard] = useState(() => initBoard());
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleMove = useCallback(
    (direction) => {
      if (gameOver) return;

      const { newBoard, totalScore } = moveBoard(board, direction);

      // Only update if the board actually changed
      if (!boardsEqual(board, newBoard)) {
        const boardWithNewTile = addRandomTile(newBoard);
        const newScore = score + totalScore;

        setBoard(boardWithNewTile);
        setScore(newScore);

        if (newScore > highestScore) {
          setHighestScore(newScore);
        }

        if (!canMove(boardWithNewTile)) {
          setGameOver(true);
        }
      }
    },
    [board, score, highestScore, gameOver]
  );

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      const keyMap = {
        ArrowLeft: "left",
        ArrowRight: "right",
        ArrowUp: "up",
        ArrowDown: "down",
      };

      if (keyMap[e.key]) {
        e.preventDefault();
        handleMove(keyMap[e.key]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleMove]);

  // Touch controls for mobile
  useEffect(() => {
    let startX, startY;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (!startX || !startY) return;

      const diffX = e.changedTouches[0].clientX - startX;
      const diffY = e.changedTouches[0].clientY - startY;

      const minSwipe = 30;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        if (Math.abs(diffX) > minSwipe) {
          handleMove(diffX > 0 ? "right" : "left");
        }
      } else {
        if (Math.abs(diffY) > minSwipe) {
          handleMove(diffY > 0 ? "down" : "up");
        }
      }

      startX = null;
      startY = null;
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleMove]);

  const handleNewGame = () => {
    setBoard(initBoard());
    setScore(0);
    setGameOver(false);
    // highestScore persists
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
        maxWidth: 400,
        margin: "0 auto",
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", color: "#776e65", mb: 1 }}
      >
        Husky 2048
      </Typography>

      {/* Score display */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          mb: 2,
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            bgcolor: "#bbada0",
            borderRadius: 1,
            padding: "8px 16px",
            textAlign: "center",
            minWidth: 80,
          }}
        >
          <Typography sx={{ color: "#eee4da", fontSize: 12, fontWeight: "bold" }}>
            SCORE
          </Typography>
          <Typography sx={{ color: "#ffffff", fontWeight: "bold", fontSize: 18 }}>
            {score}
          </Typography>
        </Box>

        <Box
          sx={{
            bgcolor: "#bbada0",
            borderRadius: 1,
            padding: "8px 16px",
            textAlign: "center",
            minWidth: 80,
          }}
        >
          <Typography sx={{ color: "#eee4da", fontSize: 12, fontWeight: "bold" }}>
            BEST
          </Typography>
          <Typography sx={{ color: "#ffffff", fontWeight: "bold", fontSize: 18 }}>
            {highestScore}
          </Typography>
        </Box>
      </Box>

      {/* Game board */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "8px",
          bgcolor: "#bbada0",
          borderRadius: 2,
          padding: "8px",
          width: "100%",
          aspectRatio: "1 / 1",
        }}
      >
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <Box
              key={`${rowIndex}-${colIndex}`}
              sx={{
                bgcolor: TILE_COLORS[cell] || "#3c3a32",
                borderRadius: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                aspectRatio: "1 / 1",
                transition: "background-color 0.15s ease",
              }}
            >
              <Typography
                sx={{
                  color: TEXT_COLORS[cell] || "#ffffff",
                  fontWeight: "bold",
                  fontSize: {
                    xs: cell >= 1024 ? 16 : cell >= 128 ? 20 : 24,
                    sm: cell >= 1024 ? 20 : cell >= 128 ? 24 : 28,
                  },
                  userSelect: "none",
                }}
              >
                {cell !== 0 ? cell : ""}
              </Typography>
            </Box>
          ))
        )}
      </Box>

      {/* Game over overlay */}
      {gameOver && (
        <Typography
          sx={{
            mt: 2,
            color: "#776e65",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Game Over!
        </Typography>
      )}

      {/* New Game button */}
      <Button
        variant="contained"
        onClick={handleNewGame}
        sx={{
          mt: 2,
          bgcolor: "#8f7a66",
          color: "#ffffff",
          fontWeight: "bold",
          "&:hover": { bgcolor: "#9f8b77" },
        }}
      >
        New Game
      </Button>
    </Box>
  );
}