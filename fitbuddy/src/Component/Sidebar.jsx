import { useState } from 'react';
import{
    FaBars,
    FaFax,
    FaRegChartBar,
    FaShoppingBag,
    FaTh, FaUserCircle, FaUsers
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) =>{
    const[isOpen,setIsOpen]=useState(false);
    const toggle=()=>setIsOpen(!isOpen);
    const menuItem=[
        {
            path: "/",
            names:"Dashboard",
            icon:<FaTh/>
        },
        {
            path: "/about",
            names:"About",
            icon:<FaUsers/>
        },
        {
            path: "/analytics",
            names:"Analytics",
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
    ]
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
                    menuItem.map((items,index)=>(
                        <NavLink to={items.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{items.icon}</div>
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
