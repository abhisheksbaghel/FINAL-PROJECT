import React, { useEffect, useState } from "react";
import "./Analytics.css";
import axios from "axios";

const Analytics = () =>{
  const [users,setUsers] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/users/getList').then((response) => {
        setUsers(response.data);
        console.log(response.data);
  });
    },[]);
    return(
        <>
        <div className="container-xl">
  <div className="table-responsive">
    <div className="table-wrapper">
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Users</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <a
              href="#addEmployeeModal"
              className="btn btn-success"
              data-toggle="modal"
            >
              <i className="material-icons"></i> <span>Add New User</span>
            </a>
            <a
              href="#deleteEmployeeModal"
              className="btn btn-danger"
              data-toggle="modal"
            >
              <i className="material-icons"></i> <span>Delete</span>
            </a>
          </div>
        </div>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>
              <span className="custom-checkbox">
                <input type="checkbox" id="selectAll" />
                <label htmlFor="selectAll" />
              </span>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {
            users.map((item)=>(
          <tr>
            <td>
              <span className="custom-checkbox">
                <input
                  type="checkbox"
                  id="checkbox1"
                  name="options[]"
                  defaultValue={1}
                />
                <label htmlFor="checkbox1" />
              </span>
            </td>
            <td>{item.fName}</td>
            <td>{item.email}</td>
            <td>{item.address}</td>
            <td>{item.phone}</td>
            <td>
              <a href="#editEmployeeModal" className="edit" data-toggle="modal">
                <i
                  className="material-icons"
                  data-toggle="tooltip"
                  title="Edit"
                >
                  
                </i>
              </a>
              <a
                href="#deleteEmployeeModal"
                className="delete"
                data-toggle="modal"
              >
                <i
                  className="material-icons"
                  data-toggle="tooltip"
                  title="Delete"
                >
                  
                </i>
              </a>
            </td>
          </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  </div>
</div>

        </>
    )
}
export default Analytics;
