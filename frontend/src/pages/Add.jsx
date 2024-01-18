import React, { useEffect } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { postData } from "../redux/slice/productsSlice";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slice/productsSlice";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Rate",
    dataIndex: "rate",
  },
  {
    title: "Favourite",
    dataIndex: "favourite",

  },
  {
    title: "Description",
    dataIndex: "description",
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};


const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  rate: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  description: Yup.string() .min(2, 'Too Short!')
  .max(50, 'Too Long!').required('Required'),
});


const Add = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  console.log(data);

  return (
    <>
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
      //  validationSchema={SignupSchema}
       onSubmit={values => {
        // dispatch(postData(values))
         console.log(values);
       }}
     >
       {({ errors, touched,handleSubmit }) => (
         <Form onSubmit={handleSubmit}>
           <Field name="name" />
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
           <br />
           <Field name="rate" />
           {errors.rate && touched.rate ? (
             <div>{errors.rate}</div>
           ) : null}
           <br />
           <Field name="favourite" />
           {errors.favourite && touched.favourite ? (
             <div>{errors.favourite}</div>
           ) : null}
            <br />
            <Field name="description" />
           {errors.description && touched.description ? (
             <div>{errors.description}</div>
           ) : null}
            <br />
           <Field name="image" type="image" />
           {errors.image && touched.image ? <div>{errors.image}</div> : null}
           <br />
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
        </div>
      </div>
      <div className="table">
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
    </>
  );
};

export default Add;
