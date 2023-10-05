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

  const createData = (author, title, isbn, price, cover, link ) =>{ return {author, title, isbn, price, cover, link}};

const BookTable = ({bookData}) => {

    const rows = useMemo(()=>{
        if(!Object.keys(bookData).length) return [];
        return bookData.results.map(bd => createData(bd.volumeInfo.authors[0], bd.volumeInfo.title, bd.volumeInfo.industryIdentifiers[0].identifier,(Math.round(bd.saleInfo.listPrice.amount * 100) / 100).toFixed(2) + " "+ bd.saleInfo.listPrice.currencyCode, bd.volumeInfo.imageLinks.smallThumbnail, bd.saleInfo.buyLink ));

    }, [bookData])

    if(Object.keys(bookData).length > 0){
    }

return(
    <div>
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow className='header'>  
                    <TableCell></TableCell> 
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
                    <TableCell><img src={row.cover} alt={`cover art for ${row.title}`}/></TableCell>
                        <TableCell>{row.title}</TableCell>
                        <TableCell>{row.author}</TableCell>
                        <TableCell>{row.isbn}</TableCell>
                        <TableCell><a href={row.link}>{row.price}</a></TableCell>
                        <TableCell><Button variant="outlined">Check Price</Button></TableCell>
                    </TableRow>
                    
                ))}
            </TableBody>
        </Table>
    </TableContainer>
      <p className='emptyMessage'> {rows.length == 0 && <TableRow>Begin your search by typing the book title, author or isbn into the search bar.</TableRow>}</p>
       </div>
);}

BookTable.propTypes ={
    bookData: PropTypes.object
}

export default BookTable;