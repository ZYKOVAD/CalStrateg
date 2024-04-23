import { TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';

function createData(
  name: string,
  gramm: number,
  kkal: number,
  proteins: number,
  fat: number,
  carbs: number,
) {
  return { name, gramm, kkal, proteins, fat, carbs };
}

const rows = [
  createData('Name', 0, 0, 0, 0, 0),
  createData('Name', 0, 0, 0, 0, 0),
  createData('Name', 0, 0, 0, 0, 0),
  createData('Name', 0, 0, 0, 0, 0),
  createData('Name', 0, 0, 0, 0, 0),
  createData('Name', 0, 0, 0, 0, 0),
  createData('Name', 0, 0, 0, 0, 0),
  createData('Name', 0, 0, 0, 0, 0),
  createData('Name', 0, 0, 0, 0, 0),
  createData('Name', 0, 0, 0, 0, 0),
  createData('Name', 0, 0, 0, 0, 0),
  createData('Name', 0, 0, 0, 0, 0),
  createData('Name', 0, 0, 0, 0, 0),
  createData('Name', 0, 0, 0, 0, 0),
  createData('Name', 0, 0, 0, 0, 0),
];


export default function HMTable() {
  const [rowIndex, setRowIndex] = React.useState(-1);
  const [columnIndex, setColumnIndex] = React.useState(-1);

  const handleTextFieldChange = (rowInd: number, colName: "name" | "gramm" | "kkal" | "proteins" | "fat" | "carbs", value: string) => {
    rows[rowInd][colName] = value;
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: 5, marginBottom: 2}}>
      <TableContainer sx={{ 
        maxHeight: 300, 
        borderRadius: 5,
        backgroundColor: '#e8e8e8'
        }}>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead >
            <TableRow >
                <TableCell sx={{fontFamily: 'Russo One', fontSize: 16, backgroundColor: '#e8e8e8'}}>Название</TableCell>
                <TableCell align="right" sx={{fontFamily: 'Russo One', fontSize: 16, backgroundColor: '#e8e8e8'}}>Грамм</TableCell>
                <TableCell align="right" sx={{fontFamily: 'Russo One', fontSize: 16, backgroundColor: '#e8e8e8'}}>Ккал</TableCell>
                <TableCell align="right" sx={{fontFamily: 'Russo One', fontSize: 16, backgroundColor: '#e8e8e8'}}>Белки</TableCell>
                <TableCell align="right" sx={{fontFamily: 'Russo One', fontSize: 16, backgroundColor: '#e8e8e8'}}>Жиры</TableCell>
                <TableCell align="right" sx={{fontFamily: 'Russo One', fontSize: 16, backgroundColor: '#e8e8e8'}}>Углеводы</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                  <TableCell onClick={() => { setRowIndex(index); setColumnIndex(0); }} >
                  {
                    rowIndex === index && columnIndex === 0 ?
                      <TextField
                        placeholder={row.name}
                        defaultValue={rows[index]["name"]}
                        onChange={(event) => handleTextFieldChange(index, "name", event.target.value)}
                      /> : row.name
                  }
                  </TableCell>
                  <TableCell onClick={() => { setRowIndex(index); setColumnIndex(0); }} align="right">
                  {
                    rowIndex === index && columnIndex === 0 ?
                      <TextField
                        placeholder={row.name}
                        defaultValue={rows[index]["name"]}
                        onChange={(event) => handleTextFieldChange(index, "gramm", event.target.value)}
                      /> : row.name
                  }</TableCell>
                  <TableCell onClick={() => { setRowIndex(index); setColumnIndex(0); }} align="right">
                  {
                    rowIndex === index && columnIndex === 0 ?
                      <TextField
                        placeholder={row.name}
                        defaultValue={rows[index]["name"]}
                        onChange={(event) => handleTextFieldChange(index, "kkal", event.target.value)}
                      /> : row.name
                  }
                  </TableCell>
                  <TableCell onClick={() => { setRowIndex(index); setColumnIndex(0); }} align="right">
                  {
                    rowIndex === index && columnIndex === 0 ?
                      <TextField
                        placeholder={row.name}
                        defaultValue={rows[index]["name"]}
                        onChange={(event) => handleTextFieldChange(index, "proteins", event.target.value)}
                      /> : row.name
                  }
                  </TableCell>
                  <TableCell onClick={() => { setRowIndex(index); setColumnIndex(0); }} align="right">
                  {
                    rowIndex === index && columnIndex === 0 ?
                      <TextField
                        placeholder={row.name}
                        defaultValue={rows[index]["name"]}
                        onChange={(event) => handleTextFieldChange(index, "fat", event.target.value)}
                      /> : row.name
                  }
                  </TableCell>
                  <TableCell onClick={() => { setRowIndex(index); setColumnIndex(0); }} align="right">
                  {
                    rowIndex === index && columnIndex === 0 ?
                      <TextField
                        placeholder={row.name}
                        defaultValue={rows[index]["name"]}
                        onChange={(event) => handleTextFieldChange(index, "carbs", event.target.value)}
                      /> : row.name
                  }
                  </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      
    </Paper>
  );
}