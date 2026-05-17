import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import * as React from 'react';
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

const rows = [
  createData('1', 'Richard', 10570, '05/17/2026'),
  createData('2', 'Emily', 10240, '05/17/2026'),
  createData('3', 'Michael', 9800, '05/17/2026'),
  createData('4', 'Sarah', 9500, '05/17/2026'),
  createData('5', 'David', 9200, '05/17/2026'),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
          rowsPerPageOptions={[10, 25, 100]}
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