import React from 'react';
import { Link } from 'react-router-dom';
import { ReactSession }  from 'react-client-session';
import $ from 'jquery';
import axios from 'axios';

const EditProfile = () => {

    const handleSubmitReg = (e) =>
    {


        e.preventDefault();
        var userdet = {}
        userdet["id"] =ReactSession.get("id");
    userdet["fullName"] = $("#fullName").val();
    userdet["email"] = $("#email").val();
    userdet["phone"] = $("#phone").val();
    userdet["password"] = ReactSession.get("password");
    userdet["gender"]=$('#selectReg').find(":selected").val();
    if(ReactSession.get("role")=="admin"){
    userdet["role"] = "admin";}
    else{
    userdet["role"] = "user";
    }
      console.log(userdet);
    var userfit = {}
    userfit["id"] =ReactSession.get("id");
    userfit["age"] = $("#age").val();
    userfit["height"] = $("#height").val();
    userfit["weight"] = $("#weight").val();
    userfit["targetBurn"] = $("#targetBurn").val();
    userfit["targetIntake"]=$('#targetIntake').val();

    console.log("Hello"+userfit.fullName+"  "+userfit.fullName);

    const postData=()=>{
        var url="http://localhost:8080/fitness/add";
        axios.post(url,userfit);
        var url1="http://localhost:8080/users/add";
        axios.post(url1,userdet);
        alert("Updated successfully!!!");
    }
        postData();
        const resetSession = ()=>{
          console.log("resetSession");
          ReactSession.set("fullName",userdet.fullName);
          ReactSession.set("email",userdet.email);
          ReactSession.set("phone",userdet.phone);
          ReactSession.set("gender",userdet.gender);
          ReactSession.set("age",userfit.age);
          ReactSession.set("height",userfit.height);
          ReactSession.set("weight",userfit.weight);
          ReactSession.set("targetBurn",userfit.targetBurn);
          ReactSession.set("targetIntake",userfit.targetIntake);

          window.location.reload();
        };

        resetSession();


    };
    
  return (
    <div>
      <div className="container rounded bg-white mt-5">
  <div className="row">
    <div className="col-md-4 border-right">
      <div className="d-flex flex-column align-items-center text-center p-3 py-5">
        <img
          className="rounded-circle mt-5"
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
          width={90}
        />
        <span className="font-weight-bold">{ReactSession.get("fullName")}</span>
        <span className="text-black-50">{ReactSession.get("email")}</span>
        <span>{ReactSession.get("role")}</span>
      </div>
    </div>
    <div className="col-md-8">
      <div className="p-3 py-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex flex-row align-items-center back">
            <i className="fa fa-long-arrow-left mr-1 mb-1" />
            <Link to="/profile" style={{textDecoration:"none"}}>Back to home</Link>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <input
              type="text"
              required
              className="form-control"
              placeholder="full name"
              id='fullName'
              defaultValue={ReactSession.get("fullName")}
            />
          </div>
          <div className="col-md-6">
            <input
            required
              type="text"
              className="form-control"
              id='email'
              defaultValue={ReactSession.get("email")}
              placeholder="Email"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <input
            required
              type="text"
              className="form-control"
              placeholder="Phone Number"
              id='phone'
              defaultValue={ReactSession.get("phone")}
            />
          </div>
          <div className="col-md-6 mt-2">
          <select id="selectReg" className="form-select" aria-label="Default select example" defaultValue={ReactSession.get("gender")}>
  <option disabled selected="">Select Gender</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Others">Others</option>
</select>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <input
            required
              type="text"
              className="form-control"
              placeholder="Target Calorie Intake"
              id='targetIntake'
              defaultValue={ReactSession.get("targetIntake")}
            />
          </div>
          <div className="col-md-6">
            <input
            required
              type="text"
              className="form-control"
              id='targetBurn'
              defaultValue={ReactSession.get("targetBurn")}
              placeholder="Target Calorie Burn"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <input
            required
              type="text"
              className="form-control"
              id='age'
              placeholder="Age"
              defaultValue={ReactSession.get("age")}
            />
          </div>
          <div className="col-md-6">
            <input
            required
              type="text"
              className="form-control"
              id='weight'
              defaultValue={ReactSession.get("weight")}
              placeholder="Weight"
            />
          </div>
          <div className="col-md-6">
            <input
            required
              type="text"
              className="form-control"
              id='height'
              defaultValue={ReactSession.get("height")}
              placeholder="Height"
            />
          </div>
        </div>
        <div className="mt-5 text-right">
          <button className="btn btn-primary profile-button" type="button" onClick={handleSubmitReg}>
            Save Profile
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default EditProfile
