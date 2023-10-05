import { useMemo } from 'react';
import PropTypes from "prop-types";
import { Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
Button } from '@mui/material';
  import Paper from '@mui/material/Paper';

  const createData = (author, title, isbn, price) =>{ return {author, title, isbn, price}};

const BookTable = ({bookData}) => {

    const rows = useMemo(()=>{
        if(!Object.keys(bookData).length) return [];
        return bookData.results.map(bd => createData(bd.volumeInfo.authors[0], bd.volumeInfo.title, bd.volumeInfo.industryIdentifiers[0].identifier,(Math.round(bd.saleInfo.listPrice.amount * 100) / 100).toFixed(2) + " "+ bd.saleInfo.listPrice.currencyCode));

    }, [bookData])

    if(Object.keys(bookData).length > 0){
    }

return(
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>   
                   <TableCell>Title</TableCell> 
                   <TableCell>Author</TableCell> 
                   <TableCell>ISBN</TableCell> 
                   <TableCell>Lowest Price</TableCell> 
                   <TableCell>Compare Prices</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row)=>(
                    <TableRow key={row.isbn}>
                        <TableCell>{row.title}</TableCell>
                        <TableCell>{row.author}</TableCell>
                        <TableCell>{row.isbn}</TableCell>
                        <TableCell>{row.price}</TableCell>
                        <TableCell><Button variant="outlined">Check Price</Button></TableCell>
                    </TableRow>
                    
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);}

BookTable.propTypes ={
    bookData: PropTypes.object
}

export default BookTable;