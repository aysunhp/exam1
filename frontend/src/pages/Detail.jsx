import React,{useEffect} from 'react'
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useParams } from 'react-router-dom'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  addBasket,
  addWishlist,
} from "../redux/slice/productsSlice";

const Detail = () => {
    const {id}=useParams()
    const dispatch = useDispatch();
    const data = useSelector((state) => state.product.data);

    useEffect(() => {
      console.log("salam");
      dispatch(fetchData());
    }, [dispatch]);
  
const detailed=data.filter(item=>item._id==id)

  return (
   <>
   <div className="detail">
   <Box sx={{ flexGrow: 1 }}>
            <div className="container" style={{marginTop:"50px",display:"flex",justifyContent:"center", alignItems:"center"}}>
              {detailed &&
                detailed.map((item) => {
                  return (
                    <Grid item xs={12} sm={12} md={12} lg={12} key={item._id}>
                      <Card
                        sx={{ maxWidth: 525 }}
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
                              {item.description}
                            </div>
                          </div>
                        </CardContent>
                        <CardActions>
                          <div className="buttons">
                            <button
                              className="btn btn1"
                              onClick={() => {
                                dispatch(addBasket(item));
                              }}
                            >
                              CARD
                            </button>
                          
                          </div>
                        </CardActions>
                      </Card>
                    </Grid>
                  );
                })}
                </div>
         
          </Box>
   </div>
   </>
  )
}

export default Detail