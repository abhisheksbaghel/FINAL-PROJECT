import "./AdminPage.css";
import axios from "axios";
import { useState,useEffect } from "react";
import $ from 'jquery';
import { Link, useNavigate } from "react-router-dom";
import { positions } from "@mui/system";
import { ReactSession }  from 'react-client-session';

function AdminPage()
{
    function deletePro(){

	
        fetch('http://localhost:8080/users/details/' +id11, {
             method: 'DELETE',
           });
   
}
    var srno=1;
   
     const [users,setUsers] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/users/getList').then((response) => {
        setUsers(response.data);
        console.log(response.data);
  });
    },[]);
     var id11;
     var gender;
     var role1;
     var id;
     var password1;
     function invokeId(id,event){
      
        id11=id;
        console.log(id11+"invoke");
        
        $.getJSON("http://localhost:8080/users/getuser/"+id11, function(result){
            document.getElementById("fullName").value=result.fullName;
            document.getElementById("form3Example1m11").value=result.email;
            document.getElementById("form3Example1n11").value=result.phone;
            document.getElementById("form3Example991").value=result.password;
            document.getElementById("role1").value=result.role;
            document.getElementById("userId").innerHTML=result.id;
            gender=result.gender;
            role1=result.role;
            id=result.id;
            password1=result.password;


           
        });}

      {/*---------------------------------------------------------------------------------*/}
        function updatePro(event){

            var user = {}
    console.log(document.getElementById("userId").innerHTML);
    user["id"] =id11;
    user["fullName"] = document.getElementById("fullName").value;
    user["email"] = document.getElementById("form3Example1m11").value;
    user["phone"] = document.getElementById("form3Example1n11").value;
    user["password"] = password1;
    user["role"] = document.getElementById("role1").value;
    user["gender"] = gender;
    console.log(user);

    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "http://localhost:8080/users/add",
      data: JSON.stringify(user),
      dataType: 'json',
      cache: false,
      timeout: 600000,
      success: function (data) {

      },
      error: function (e) {
          
      }
  });
                    
                
         {/*---------------------------------------------------------------------------------*/}   
            
        }
        function invokeId1(id,event){
            id11=id;
            console.log(id11);
            }

  var flag=false;
  const initialstate = {
    isSubmit: false,
    FullName: "",
    EmailId: "",
    MobileNo: "",
    Password: "",
    ConfirmPassword: "",
  };

  const [formdata, setFormData] = useState(initialstate);
  const {
    FullName,
    EmailId,
    MobileNo,
    Password,
    ConfirmPassword,
  } = formdata;
  const [formdataErr, setFormDataErr] = useState(null);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    setFormDataErr(null);
    setFormData({
      ...formdata,
      isSubmit: true,
    });
    setTimeout(() => {
      let error = formValidation();

      if (error) {
        setFormDataErr(error);
        setFormData({
          ...formdata,
          isSubmit: false,
        });
        return;
      } else {
        var user = {}
    console.log($("#Address").val());
    user["fullName"] = $("#form3Example1m").val();
    user["email"] = $("#form3Example1m1").val();
    user["phone"] = $("#form3Example1n1").val();
    user["password"] = $("#form3Example99").val();
    user["role"] = $("#role").val();

    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "http://localhost:8080/userss",
      data: JSON.stringify(user),
      dataType: 'json',
      cache: false,
      timeout: 600000,
      success: function (data) {

        
        

      },
      error: function (e) {
          
      }
  });
        alert("User has been Added!");
        window.location.reload();
        setTimeout(() => {
          //backend api
          //handleContactDetails();
          
          setFormData({
            ...formdata,
            isSubmit: false,
          });
          console.log("got response at backend");
          setFormData({
            ...formdata,
            isSubmit: false,
            FullName: "",
            EmailId: "",
            MobileNo: "",
            Password: "",
            ConfirmPassword: "",
          });
        }, 500);
      }
    }, 1000);
  };
  const reset = () => {
    setFormData({
      ...formdata,
      isSubmit: false,
      FullName: "",
      EmailId: "",
      MobileNo: "",
      Password: "",
      ConfirmPassword: "",
    });
  };

  const onChange = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  
  

  const formValidation = () => {
    let error = false;
    if (FullName === "" || !/^[A-Za-z]{2,}$/.test(FullName)) {
      //console.log("inside fullname");
      error = {
        field_id: "FullName",
        message: "Name is required",
      };
      return error;
    }

    if (EmailId === "" || !/\S+@\S+\.\S+/.test(EmailId)) {
      //console.log("inside email");
      error = {
        field_id: "EmailId",
        message: "Valid Email required",
      };
      return error;
    }

    if (MobileNo === "" || !/^\+?([6-9]{1})\)?([0-9]{9})$/.test(MobileNo)) {
      //console.log("inside phone");
      error = {
        field_id: "MobileNo",
        message: "Valid Phone no. is required",
      };
      return error;
    }
   
    if (
      Password === "" ||
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/.test(
        Password
      )
    ) {
      error = {
        field_id: "Password",
        message:
          "Password contains atleast 6 character includes 1 Uppercase, 1 Number and 1 Special character",
      };
      return error;
    }
    if (ConfirmPassword === "" || !(Password === ConfirmPassword)) {
      error = {
        field_id: "ConfirmPassword",
        message: "Password not match",
      };
      return error;
    }
   
  };
    return(<>
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
                  <div className="col-sm-4">
                    <a
                      href="#addEmployeeModal"
                      className="btn btn-success"
                      data-toggle="modal"
                    >
                      <i className="material-icons"></i>{" "}
                      <span>Add New User</span>
                    </a>
                  </div>
                  
                </div>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Sr.No</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Mobile No.</th>
                    <th>Role</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody id="productsJson">
                {
            users.map((value)=>(
                <tr>
        			<td>
        			{(srno++)}
        		</td>
        		<td>{value.fullName}</td>
        		<td>{value.email}</td>
        		<td>{value.phone}</td>
                <td>{value.role}</td>
        		<td>
        		<button onClick={()=>{invokeId(value.id)}} style={{border:"none"}}><a href="#editEmployeeModal"  className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a></button>
        		<button onClick={()=>{invokeId1(value.id)}} style={{border:"none"}}><a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a></button>
        		</td>
        		</tr>
                  ))
                    }
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Edit Modal HTML */}
        <div id="addEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
            <form action="" onSubmit={onSubmit}>
          
                    
                      <div className="card-body p-md-5 text-black">
                        <h3 className="mb-5 text-uppercase text-center">
                          Register
                        </h3>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            
                            <div className="form-outline">
                              <input
                                type="text"
                                id="form3Example1m"
                                name="FullName"
                                value={FullName}
                                onChange={onChange}
                                className="form-control form-control-lg border border-success"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example1m"
                              >
                                Full Name
                              </label>
                             
                            </div>
                            <div>
                              {formdataErr &&
                              formdataErr.field_id === "FullName" ? (
                                <p style={{ color: "red" }}>
                                  {formdataErr.message}
                                </p>
                              ) : null}
                            </div>
                          </div>
                          
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="form3Example1m1"
                                name="EmailId"
                                value={EmailId}
                                onChange={onChange}
                                className="form-control form-control-lg border border-success"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example1m1"
                              >
                                Email Id
                              </label>
                            </div>
                            <div>
                              {formdataErr &&
                              formdataErr.field_id === "EmailId" ? (
                                <p style={{ color: "red" }}>
                                  {formdataErr.message}
                                </p>
                              ) : null}
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="form3Example1n1"
                                name="MobileNo"
                                value={MobileNo}
                                onChange={onChange}
                                className="form-control form-control-lg border border-success"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example1n1"
                              >
                                Mobile Number
                              </label>
                            </div>
                            <div>
                              {formdataErr &&
                              formdataErr.field_id === "MobileNo" ? (
                                <p style={{ color: "red" }}>
                                  {formdataErr.message}
                                </p>
                              ) : null}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <label
                            className="form-label text-dark"
                            htmlFor="role"
                          >
                            Role
                          </label>
                          <select
                            className="select border border-success w-100"
                            id="role"
                          >
                            <option value="Admin">Admin</option>
                            <option value="User">User</option>
                          </select>
                        </div>
                        
                        <div>
                          {formdataErr && formdataErr.field_id === "Pincode" ? (
                            <p style={{ color: "red" }}>
                              {formdataErr.message}
                            </p>
                          ) : null}
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="Password"
                            id="form3Example99"
                            name="Password"
                            value={Password}
                            onChange={onChange}
                            className="form-control form-control-lg border border-success"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example99"
                          >
                            Password
                          </label>
                        </div>
                        <div>
                          {formdataErr &&
                          formdataErr.field_id === "Password" ? (
                            <p style={{ color: "red" }}>
                              {formdataErr.message}
                            </p>
                          ) : null}
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form3Example97"
                            name="ConfirmPassword"
                            value={ConfirmPassword}
                            onChange={onChange}
                            className="form-control form-control-lg border border-success"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example97"
                          >
                            re-enter the Password
                          </label>
                        </div>
                        <div>
                          {formdataErr &&
                          formdataErr.field_id === "ConfirmPassword" ? (
                            <p style={{ color: "red" }}>
                              {formdataErr.message}
                            </p>
                          ) : null}
                        </div>
                        <div className="d-flex justify-content-start pt-3">
                          <button
                            type="button"
                            onClick={reset}
                            className="btn btn-danger btn-lg"
                          >
                            Reset
                          </button>
                          <div className="w-50 justify-content-start"></div>
                          <button
                            type="submit"
                            className="btn btn-success btn-lg ms-2"
                             
                          >
                            Add
                          </button>
                        </div>
                      </div>
                     
                    
               
        </form>
            </div>
          </div>
        </div>
        {/* Edit Modal HTML */}
        <div id="editEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
            <form action="" >
          
                    
          <div className="card-body p-md-5 text-black">
            <h3 className="mb-5 text-uppercase text-center">
              Edit User
            </h3>
            <div className="row">
              <div className="col-md-6 mb-4">
              <div className="form-outline">
                              <h4 id="userId" style={{visibility: "hidden", position:"absolute"}}></h4>
                              <label
                                className="form-label"
                                htmlFor="userId"
                                style={{visibility: "hidden", position:"absolute"}}
                              >
                                Id
                              </label>
                             
                            </div>
                <div className="form-outline">
                  <input
                    type="text"
                    id="fullName"
                    name="FullName"
                    className="form-control form-control-lg border border-success"
                  />
                  <label
                    htmlFor="fullName"
                  >
                    Full Name
                  </label>
                </div>
                <div>
                  {formdataErr &&
                  formdataErr.field_id === "FullName" ? (
                    <p style={{ color: "red" }}>
                      {formdataErr.message}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <input
                    type="text"
                    id="form3Example1m11"
                    name="EmailId"
                    onChange={onChange}
                    className="form-control form-control-lg border border-success"
                  />
                  <label
                    htmlFor="form3Example1m11"
                  >
                    Email Id
                  </label>
                </div>
                <div>
                  {formdataErr &&
                  formdataErr.field_id === "EmailId" ? (
                    <p style={{ color: "red" }}>
                      {formdataErr.message}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <input
                    type="text"
                    id="form3Example1n11"
                    name="MobileNo"
                    onChange={onChange}
                    className="form-control form-control-lg border border-success"
                  />
                  <label
                    htmlFor="form3Example1n11"
                  >
                    Mobile Number
                  </label>
                </div>
                <div>
                  {formdataErr &&
                  formdataErr.field_id === "MobileNo" ? (
                    <p style={{ color: "red" }}>
                      {formdataErr.message}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <label
                htmlFor="role1"
              >
                Role
              </label>
              <select
                className="select border border-success w-100"
                id="role1"
                defaultValue={ReactSession.get("role")}
                defaultChecked ="user"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            
            <div>
              {formdataErr && formdataErr.field_id === "Pincode" ? (
                <p style={{ color: "red" }}>
                  {formdataErr.message}
                </p>
              ) : null}
            </div>
            <div className="d-flex justify-content-start pt-3">
              
              
              <button
                type="submit"
                onClick={updatePro}
                className="btn btn-success btn-lg ms-2"
                 
              >
                Update
              </button>
            </div>
          </div>
         
        
   
</form>
            </div>
          </div>
        </div>
        {/* Delete Modal HTML */}
        <div id="deleteEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form onsubmit="deletePro()">
                <div className="modal-header">
                  <h4 className="modal-title">Delete User</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    ×
                  </button>
                </div>
                <div className="modal-body">
                  <p>Are you sure you want to delete these Records?</p>
                  <p className="text-warning">
                    <small>This action cannot be undone.</small>
                  </p>
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    defaultValue="Cancel"
                  />
                  <input
                    type="submit"
                    
                    onClick={deletePro}
                    className="btn btn-danger"
                    defaultValue="Delete"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        
      </>
      );
}
export default AdminPage;

