import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  addBasket,
  addWishlist,
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
      <div className="products">
        <div className="container">
          <div className="products-intro">
            <h1>Basket</h1>
          </div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
              {basket &&
                basket.map((item) => {
                  return (
                    <Grid item xs={12} sm={12} md={6} lg={4} key={item._id}>
                      <Card
                        sx={{ maxWidth: 325 }}
                        style={{ border: "none", boxShadow: "none" }}
                      >
                        <CardMedia
                          sx={{ height: 340 }}
                          image={item.image}
                          title="green iguana"
                        />
                        <CardContent>
                          <div className="card-content">
                            <div className="name">{item.name}</div>
                            <div className="rate-fav">
                              <div className="rate">
                                <MdOutlineStarPurple500
                                  style={{ fontSize: "17px", color: "#F89D13" }}
                                />{" "}
                                {item.rate}
                              </div>
                              <div className="fav">
                                <FaHeart
                                  style={{ fontSize: "15px", color: "red" }}
                                  onClick={() => {
                                    dispatch(addWishlist(item));
                                  }}
                                />

                                {item.favourite}
                              </div>
                            </div>
                            <div className="description">
                              Quantity: {item.quantity}
                            </div>
                          </div>
                        </CardContent>
                        <CardActions>
                          <div className="buttons">
                            <button
                              className="btn btn1"
                              onClick={() => {
                                dispatch(increaseBasket(item));
                              }}
                            >
                              +
                            </button>
                            <button
                              className="btn btn1"
                              onClick={() => {
                                dispatch(decreaseBasket(item));
                              }}
                            >
                              -
                            </button>
                            <button
                              className="btn btn2"
                              onClick={() => {
                                dispatch(deleteBasket(item));
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </CardActions>
                      </Card>
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Basket;
