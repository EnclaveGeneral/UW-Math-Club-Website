import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import * as React from 'react';
import { useState, useEffect } from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'rank',
    label: 'Rank',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  { id: 'name',
    label: 'Name',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'score',
    label: 'Score',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'date',
    label: 'Date',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(rank, name, score, date) {
  return { rank, name, score, date };
}



// Fetch current scoreboard data from AWS API Gateway Endpoint that connects to our DynamoDB through our Lambda Function
// Popualte it into the rows variable to dynamically update the leaderboard table with current data
// Sorted by highest score at top with the highest rank, lowest bottom at the back with the lowest rank
export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchScoreboard = async () => {
      try {
        const response = await fetch("https://fp2ro24shl.execute-api.us-west-2.amazonaws.com/scores");
        const data = await response.json();
        const sorted = data
          .sort((a, b) => b.Score - a.Score)
          .map((item, index) => {
            const date = new Date(item.Date);
            const formattedDate = date.toLocaleString('en-US', {
              timeZone: 'America/Los_Angeles',
              month: '2-digit',
              day: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            });
            return createData(index + 1, item.Name, item.Score, formattedDate);
          });
        setRows(sorted);
      } catch (error) {
        console.error("Error fetching current scoreboard data: ", error);
      }
    };

    fetchScoreboard();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box sx={{ backgroundColor: '#4b2e83', alignItems: 'center', textAlign: "center", paddingX: {xs: 4, sm: 6, md: 8}, paddingY: {xs: 6, sm: 8, md: 10} }}>

      <Typography variant="h3" sx={{ fontSize: "clamp(1.25rem, 3.75vw, 3.25rem)", color: "#ffffff", marginBottom: {xs: 2, sm: 4, md: 6} }}>
        Husky 2048 Leaderboard
      </Typography>

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead
              sx={{
                "& .MuiTableCell-root": {
                  backgroundColor: "#8a0ac0",
                  color: "#ffffff",
                  fontWeight: 900,
                },
              }}
            >
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.rank}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}