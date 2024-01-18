import React, { useEffect } from "react";
import Button from "@mui/material/CardMedia";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  increaseBasket,
  decreaseBasket,
  deleteBasket,
} from "../redux/slice/productsSlice";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

const Basket = () => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.product.basket);

  useEffect(() => {
    console.log("salam");
    dispatch(fetchData());
  }, [dispatch]);

  console.log(basket);
  return (
    <>
      <div className="basket">
        <div className="container">
          <div className="products-intro">
            <h1>Basket</h1>
          </div>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Rate</TableCell>
            <TableCell align="right">Favourite</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Increase</TableCell>
            <TableCell align="right">Decrease</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {basket.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.rate}</TableCell>
              <TableCell align="right">{row.favourite}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.image}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right" onClick={()=>{
                dispatch(increaseBasket(row))
              }}><Button>Increase</Button></TableCell>
              <TableCell align="right"><Button onClick={()=>{
                dispatch(decreaseBasket(row))
              }}>Decrease</Button></TableCell>
              <TableCell align="right"><Button onClick={()=>{
                dispatch(deleteBasket(row))
              }}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
        
        </div>
      </div>
    </>
  );
};

export default Basket;
