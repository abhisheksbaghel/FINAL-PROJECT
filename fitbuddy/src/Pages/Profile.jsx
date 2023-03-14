import React, { useState,useEffect } from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar
} from 'mdb-react-ui-kit';
import { ReactSession }  from 'react-client-session';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function ProfilePage() {


  useEffect(()=>{	  
    let link1="http://localhost:8080/dailyactivity/top5/"+ReactSession.get("id");
axios.get(link1).then((response)=>{

console.log(response.data[0].date);
ReactSession.set("day0burn",response.data[4].dailyBurn)
ReactSession.set("day1burn",response.data[3].dailyBurn)
ReactSession.set("day2burn",response.data[2].dailyBurn)
ReactSession.set("day3burn",response.data[1].dailyBurn)
ReactSession.set("day4burn",response.data[0].dailyBurn)

ReactSession.set("day0Intake",response.data[4].dailyIntake)
ReactSession.set("day1Intake",response.data[3].dailyIntake)
ReactSession.set("day2Intake",response.data[2].dailyIntake)
ReactSession.set("day3Intake",response.data[1].dailyIntake)
ReactSession.set("day4Intake",response.data[0].dailyIntake)

console.log("bolone lagiiii");


});

var path='http://localhost:8080/fitness/getById/'+ReactSession.get("id");
            console.log(path);
        axios.get(path).then((response)=>{
            if(response.data==[])
            {
                console.log("Hiii i am axios then");
                window.location.replace("http://localhost:3000/dashboard");
                alert('Setup your profile');
                window.location.href='http://localhost:3000/editprofile';
                 return false;
            }
            else{
                ReactSession.set("targetBurn",response.data.targetBurn);
                ReactSession.set("targetIntake",response.data.targetIntake);
                ReactSession.set("age",response.data.age);
                ReactSession.set("weight",response.data.weight);
                ReactSession.set("height",response.data.height);
            }
        });

},[]);

  const [burn,setBurn]=useState();
  const [intake,setIntake]=useState();
  var flag=true;

  const handleBurnChange=(e)=>{
    setBurn(e.target.value);
    console.log(burn);
  };

  const handleIntakeChange=(e)=>{
    setIntake(e.target.value);
    console.log(intake);
  };

  const handleSave=()=>{
    
    console.log("Handle Save");
    let today1 = new Date().toISOString().slice(0, 10)
    const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = dd + '/' + mm + '/' + yyyy;
    console.log(today);
    console.log(formattedToday);
    var daily={};
    daily["date"]=formattedToday;
    daily["id"]=ReactSession.get("id");
    var inp1=document.getElementById("exampleInputEmail1").value;
    daily["dailyBurn"]=parseFloat(inp1);
    var inp2=document.getElementById("exampleInputPassword1").value;
    daily["dailyIntake"]=parseFloat(inp2);
    var url="http://localhost:8080/dailyactivity/add";
    axios.post(url,daily);
    console.log(daily);
  }

const handleTargetChange=()=>{
  window.location.replace("http://localhost:3000/editprofile");
};

  const handleDailyUps = ()=>{
    if(ReactSession.get("flag")==true)
    {
      ReactSession.set("flag",false);
      window.location.reload();
    }
    else{
      
      ReactSession.set("flag",true);
      window.location.reload();
    }
  };
  return (
    <section style={{ backgroundColor: 'white' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-dark rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <Link to="/editprofile" id="editprof">Edit Profile</Link>
              </MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">Profile Picture</p>
                <p className="text-muted mb-1">{ReactSession.get("role")}</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn className="bg-dark" style={{color: 'white' }} onClick={handleDailyUps}>Daily Updates</MDBBtn>
                  <MDBBtn  outline className="ms-1 bg-dark" style={{color: 'white' }} onClick={handleTargetChange} > Change Target</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            
              <MDBCard className="mb-4">
              <MDBCardBody id='DailyUpBlock'>{(ReactSession.get("flag")==true)?(<>
              <div className="form-group row">
    <label
      style={{ fontWeight: "bolder", fontSize: "large" }}
      htmlFor="staticEmail"
      className="col-sm-5 col-form-label"
    >
      Target burns
    </label>
    <div className="col-sm-5">
      <input
        type="text"
        readOnly=""
        className="form-control-plaintext"
        id="staticEmail"
        defaultValue={ReactSession.get("targetBurn")}
      />
    </div>
  </div>
  <div className="form-group row">
    <label
      style={{ fontWeight: "bolder", fontSize: "large" }}
      htmlFor="staticEmail"
      className="col-sm-5 col-form-label"
    >
      Target Intake
    </label>
    <div className="col-sm-5">
      <input
        type="text"
        readOnly=""
        className="form-control-plaintext"
        id="staticEmail"
        defaultValue={ReactSession.get("targetIntake")}
      />
    </div>
  </div></>):(<><form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Calorie Burned</label>
    <input
      type="number"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Today Burn"
      value={burn}
      onChange={handleBurnChange}
    />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Calorie Intake</label>
    <input
      type="number"
      className="form-control"
      id="exampleInputPassword1"
      placeholder="Today Intake"
      value={intake}
      onChange={handleIntakeChange}
    />
  </div>
  <button onClick={handleSave} className="btn btn-dark">
    Save
  </button>
</form>
</>)
             } </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{ReactSession.get("fullName")}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{ReactSession.get("email")}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{ReactSession.get("phone")}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Height/Weight/Age</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{ReactSession.get("height")}m/{ReactSession.get("weight")}kg/{ReactSession.get("age")}yrs.</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Target Burns </span> Last 5 Days Status</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>4 days ago</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={(ReactSession.get("day0burn")/ReactSession.get("targetBurn"))*100} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>3 days ago</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={(ReactSession.get("day1burn")/ReactSession.get("targetBurn"))*100} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>2 days ago</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={(ReactSession.get("day2burn")/ReactSession.get("targetBurn"))*100} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>1 days ago</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={(ReactSession.get("day3burn")/ReactSession.get("targetBurn"))*100} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Today</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={(ReactSession.get("day4burn")/ReactSession.get("targetBurn"))*100} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Target Intake</span> Last 5 Days Status</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>4 days ago</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={(ReactSession.get("day0Intake")/ReactSession.get("targetIntake"))*100} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>3 days ago</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={(ReactSession.get("day1Intake")/ReactSession.get("targetIntake"))*100} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>2 days ago</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={(ReactSession.get("day2Intake")/ReactSession.get("targetIntake"))*100} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>1 days ago</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={(ReactSession.get("day3Intake")/ReactSession.get("targetIntake"))*100} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Today</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={(ReactSession.get("day4Intake")/ReactSession.get("targetIntake"))*100} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}