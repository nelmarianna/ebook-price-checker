import * as React from 'react';
import { Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
Button } from '@mui/material';
  import Paper from '@mui/material/Paper';

  const createData = (author, title, isbn, price) =>{ return {author, title, isbn, price}};

  const rows = [
    createData('Placeholder', 'A Placeholder book', '1234567', 45.34),
    createData('Placeholder2', 'A Placeholder book2', '1234568', 45.34),
    createData('Placeholder3', 'A Placeholder book3', '1234569', 45.34),
    createData('Placeholder4', 'A Placeholder book4', '12345610', 45.34)
]

const BookTable = () => (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                   <TableCell>Author</TableCell> 
                   <TableCell>Title</TableCell> 
                   <TableCell>ISBN</TableCell> 
                   <TableCell>Lowest Price</TableCell> 
                   <TableCell>Compare Prices</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row)=>(
                    <TableRow key={row.isbn}>
                        <TableCell>{row.author}</TableCell>
                        <TableCell>{row.title}</TableCell>
                        <TableCell>{row.isbn}</TableCell>
                        <TableCell>{row.price}</TableCell>
                        <TableCell><Button variant="outlined">Check Price</Button></TableCell>
                    </TableRow>
                    
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default BookTable;