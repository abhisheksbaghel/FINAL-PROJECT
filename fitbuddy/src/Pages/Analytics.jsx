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

    function deleteHandler(id)
    {
      var url='http://localhost:8080/users/details/' + id;
        console.log(url);
    }

    return(
        <>
        <div className="container-fluid">
  <div className="table-responsive">
    <div className="table-wrapper">
      <div className="table-title">
        <div className="row">
          <div className="col-lg-12">
            <h2>
              Manage <b>Users</b>
            </h2>
          </div>
          
        </div>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>
              Id
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {
            users.map((item,key)=>(
          <tr key={item.id}>
            <td id="idmap" >
            {item.id}
            </td>
            <td>{item.fullName}</td>
            <td>{item.email}</td>
            <td>{item.role}</td>
            <td>{item.phone}</td>
            <td>
              <a href="#" className="edit" data-toggle="modal">
                <i
                  className="material-icons"
                  data-toggle="tooltip"
                  title="Edit"
                >
                  
                </i>
              </a>
              <a
              href="#"
                className="delete"
                data-toggle="modal"
                onClick={()=>{deleteHandler(item.id)}}
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
