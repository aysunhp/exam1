import React, { useEffect } from "react";
import { Formik } from "formik";
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
    // filters: [
    //   {
    //     text: "Joe",
    //     value: "Joe",
    //   },
    //   {
    //     text: "Jim",
    //     value: "Jim",
    //   },
    //   {
    //     text: "Submenu",
    //     value: "Submenu",
    //     children: [
    //       {
    //         text: "Green",
    //         value: "Green",
    //       },
    //       {
    //         text: "Black",
    //         value: "Black",
    //       },
    //     ],
    //   },
    // ],
    // // specify the condition of filtering result
    // // here is that finding the name started with `value`
    // onFilter: (value, record) => record.name.indexOf(value) === 0,
    // sorter: (a, b) => a.name.length - b.name.length,
    // sortDirections: ["descend"],
  },
  {
    title: "Rate",
    dataIndex: "rate",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Favourite",
    dataIndex: "favourite",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Description",
    dataIndex: "description",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.description.localeCompare(b.description),
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

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
              name: "",
              rate: "",
              favourite: "",
              image: "",
              description: "",
            }}
            onSubmit={(values, actions) => {
              console.log(values);
              dispatch(postData(values));
            }}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
                <TextField
                  label="Name"
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                  name="name"
                  style={{ marginBottom: "20px" }}
                />

                {props.errors.name && (
                  <div id="feedback">{props.errors.name}</div>
                )}
                <br />
                <TextField
                  label="Rate"
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.rate}
                  name="rate"
                  style={{ marginBottom: "20px" }}
                />

                {props.errors.rate && (
                  <div id="feedback">{props.errors.rate}</div>
                )}
                <br />
                <TextField
                  label="Favourite"
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.favourite}
                  name="favourite"
                  style={{ marginBottom: "20px" }}
                />

                {props.errors.favourite && (
                  <div id="feedback">{props.errors.favourite}</div>
                )}
                <br />
                <TextField
                  label="Image"
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.image}
                  name="image"
                  style={{ marginBottom: "20px" }}
                />

                {props.errors.image && (
                  <div id="feedback">{props.errors.image}</div>
                )}
                <br />
                <TextField
                  label="Description"
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.description}
                  name="description"
                  style={{ marginBottom: "20px" }}
                />

                {props.errors.description && (
                  <div id="feedback">{props.errors.description}</div>
                )}
                <br />
                <Button
                  variant="outlined"
                  type="submit"
                  style={{ textAlign: "center" }}
                >
                  Submit
                </Button>
              </form>
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
