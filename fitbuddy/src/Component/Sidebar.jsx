import { useState } from 'react';
import{
    FaBars,
    FaFax,
    FaRegChartBar,
    FaShoppingBag,
    FaTh, FaUserCircle, FaUsers,FaUtensils,FaSignInAlt,
    FaRunning
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { ReactSession }  from 'react-client-session';

const Sidebar = ({children}) =>{
    const[isOpen,setIsOpen]=useState(false);
    const toggle=()=>setIsOpen(!isOpen);
    const menuItem=[
        {
            path: "/dashboard",
            names:"Dashboard",
            icon:<FaTh/>
        },
        {
            path: "/about",
            names:"About",
            icon:<FaUsers/>
        },
        {
            path: "/manageUsers",
            names:"Manage Users",
            icon:<FaRegChartBar/>
        },
        {
            path: "/bmi-calculator",
            names:"BMI Calculator",
            icon:<FaFax/>
        },
        {
            path: "/product",
            names:"Product",
            icon:<FaShoppingBag/>
        },
        {
            path: "/profile",
            names:"Profile",
            icon:<FaUserCircle/>
        },
        {
            path: "/diet",
            names:"Diet",
            icon:<FaUtensils/>
        },
        {
            path: "/exercise/0001",
            names:"Exercise",
            icon:<FaRunning/>
        },
        {
            path: "/",
            names:"Logout",
            icon:<FaSignInAlt/>
        },
    ];

    const menuItemAdmin=[
        {
            path: "/dashboard",
            names:"Dashboard",
            icon:<FaTh/>
        },
        {
            path: "/about",
            names:"About",
            icon:<FaUsers/>
        },
        {
            path: "/manageUsers",
            names:"Manage Users",
            icon:<FaRegChartBar/>
        },
        {
            path: "/bmi-calculator",
            names:"BMI Calculator",
            icon:<FaFax/>
        },
        {
            path: "/product",
            names:"Product",
            icon:<FaShoppingBag/>
        },
        {
            path: "/profile",
            names:"Profile",
            icon:<FaUserCircle/>
        },
        {
            path: "/diet",
            names:"Diet",
            icon:<FaUtensils/>
        },
        {
            path: "/exercise/0001",
            names:"Exercise",
            icon:<FaRunning/>
        },
        {
            path: "/",
            names:"Logout",
            icon:<FaSignInAlt/>
        },
    ];

    const menuItemUser=[
        {
            path: "/dashboard",
            names:"Dashboard",
            icon:<FaTh/>
        },
        {
            path: "/about",
            names:"About",
            icon:<FaUsers/>
        },
        {
            path: "/bmi-calculator",
            names:"BMI Calculator",
            icon:<FaFax/>
        },
        {
            path: "/product",
            names:"Product",
            icon:<FaShoppingBag/>
        },
        {
            path: "/profile",
            names:"Profile",
            icon:<FaUserCircle/>
        },
        
        {
            path: "/diet",
            names:"Diet",
            icon:<FaUtensils/>
        },
        {
            path: "/exercise/0001",
            names:"Exercise",
            icon:<FaRunning/>
        },
        {
            path: "/",
            names:"Logout",
            icon:<FaSignInAlt/>
        },
    ];
    function logout(){
        ReactSession.set("email","logout");
        ReactSession.set("password","");
        ReactSession.set("role","");
        ReactSession.set("phone","");
        ReactSession.set("fullName","");
        ReactSession.set("id","");
          ReactSession.set("gender","");
          ReactSession.set("age","");
          ReactSession.set("height","");
          ReactSession.set("weight","");
          ReactSession.set("targetBurn","");
          ReactSession.set("targetIntake","");
          ReactSession.set("day0burn","")
          ReactSession.set("day1burn","")
          ReactSession.set("day2burn","")
          ReactSession.set("day3burn","")
          ReactSession.set("day4burn","")
      
          ReactSession.set("day0Intake","")
          ReactSession.set("day1Intake","")
          ReactSession.set("day2Intake","")
          ReactSession.set("day3Intake","")
          ReactSession.set("day4Intake","")
        window.location.replace("http://localhost:3000/");
    }

    return(
        <div className='container1'>
            <div style={{width: isOpen ? "250px":"50px"}} className="sidebar">
                <div className="top_section">
                    <h1 style={{display: isOpen ? "block":"none"}} className="logo"><img className='ablogo' src="/Images/Logo.png" alt="FitBuddy logo"/></h1>
                    
                    <div style={{marginLeft: isOpen ? "50px":"0px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    (ReactSession.get("role")=="")?
                    menuItem.map((items,index)=>((items.names=="Logout")?
                        <NavLink to={items.path} key={index} className="link" onClick={logout} activeclassname="active">
                            <div className="icon" >{items.icon}</div>
                            <div style={{display: isOpen ? "block":"none"}} className="link_text">{items.names}</div>
                        </NavLink>:<NavLink to={items.path} key={index} className="link" activeclassname="active">
                            <div className="icon" >{items.icon}</div>
                            <div style={{display: isOpen ? "block":"none"}} className="link_text">{items.names}</div>
                        </NavLink>
                    )):(ReactSession.get("role")=="Admin"||ReactSession.get("role")=="admin")?
                    menuItemAdmin.map((items,index)=>((items.names=="Logout")?
                        <NavLink to={items.path} key={index} className="link" onClick={logout} activeclassname="active">
                            <div className="icon" >{items.icon}</div>
                            <div style={{display: isOpen ? "block":"none"}} className="link_text">{items.names}</div>
                        </NavLink>:<NavLink to={items.path} key={index} className="link" activeclassname="active">
                            <div className="icon" >{items.icon}</div>
                            <div style={{display: isOpen ? "block":"none"}} className="link_text">{items.names}</div>
                        </NavLink>
                    )):(ReactSession.get("role")=="User"||ReactSession.get("role")=="user")?
                    menuItemUser.map((items,index)=>((items.names=="Logout")?
                        <NavLink to={items.path} key={index} className="link" onClick={logout} activeclassname="active">
                            <div className="icon" >{items.icon}</div>
                            <div style={{display: isOpen ? "block":"none"}} className="link_text">{items.names}</div>
                        </NavLink>:<NavLink to={items.path} key={index} className="link" activeclassname="active">
                            <div className="icon" >{items.icon}</div>
                            <div style={{display: isOpen ? "block":"none"}} className="link_text">{items.names}</div>
                        </NavLink>
                    )):menuItem.map((items,index)=>((items.names=="Logout")?
                    <NavLink to={items.path} key={index} className="link" onClick={logout} activeclassname="active">
                        <div className="icon" >{items.icon}</div>
                        <div style={{display: isOpen ? "block":"none"}} className="link_text">{items.names}</div>
                    </NavLink>:<NavLink to={items.path} key={index} className="link" activeclassname="active">
                        <div className="icon" >{items.icon}</div>
                        <div style={{display: isOpen ? "block":"none"}} className="link_text">{items.names}</div>
                    </NavLink>
                ))
                    
                }
            </div>
            <main>{children}</main>
        </div>
    )
}

export default Sidebar;
