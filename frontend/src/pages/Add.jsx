import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { postData } from "../redux/slice/productsSlice";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchData,deleteData } from "../redux/slice/productsSlice";
import {Helmet} from "react-helmet";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  rate: Yup.number()
    .required('Required'),
  favourite: Yup.number()
    .required('Required'),
  description: Yup.string()
   .min(2, 'Too Short!')
 .required('Required'),
  image: Yup.string()
  .min(9, 'Too Short!').required('Required'),
});


const Add = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  console.log(data);


  const [search,setSearch]=useState("")
  let [type,setType]= useState("")

  let filteredData=()=>{
    if(type=="az"){
      return [...data].sort((a,b)=>a.name.localeCompare(b.name))
    }else if(type=="za"){
      return [...data].sort((a,b)=>b.name.localeCompare(a.name))
    }else{
      return [...data].sort((a,b)=>Number(b.favourite)-Number(a.favourite))
    }

    return data;
  }
  return (
    <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Add</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="add-section">
        <h1>My Form</h1>
        <div className="form">
        <Formik
       initialValues={{
         name: '',
         rate: '',
         favourite: '',
         description:"",
         image:"",
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
        dispatch(postData(values))
         console.log(values);
     
       }}
     >
       {({ errors, touched,handleSubmit }) => (
         <Form onSubmit={handleSubmit}>
           <Field name="name"  placeholder="name"/>
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
           <br />
           <Field name="rate" placeholder="rate"/>
           {errors.rate && touched.rate ? (
             <div>{errors.rate}</div>
           ) : null}
           <br />
           <Field name="favourite" placeholder="favourite"/>
           {errors.favourite && touched.favourite ? (
             <div>{errors.favourite}</div>
           ) : null}
            <br />
            <Field name="image" placeholder="image"/>
           {errors.image && touched.image ? (
             <div>{errors.image}</div>
           ) : null}
            <br />
            <Field name="description"  placeholder="description"/>
           {errors.description && touched.description ? (
             <div>{errors.description}</div>
           ) : null}
            <br />
         
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
        </div>
      </div>
      <div className="table">
      <TextField id="outlined-basic" label="Search" variant="outlined" onChange={(e)=>{
        setSearch(e.target.value)
      }}/>
      <Button onClick={()=>{
        setType("az")
      }}>A-Z</Button>
      <Button onClick={()=>{
        setType("za")
      }}>Z-A</Button>
      <Button onClick={()=>{
        setType("")
      }}>Favourite</Button>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
       
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Rate</TableCell>
            <TableCell align="right">Favourite</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData().filter(item=>item.name.toLowerCase().includes(search.toLowerCase())).map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.rate}</TableCell>
              <TableCell align="right">{row.favourite}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.image}</TableCell>
              <TableCell align="right"><Button onClick={()=>{
                dispatch(deleteData(row._id))
              }}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
      </div>
    </>
  );
};

export default Add;
