import React from 'react';
import "./LoginDemo2.css";

import {useState} from 'react';

/************Login Functions******************************* */
function LoginDemo2() {

    const [emailReg, setEmailReg] = useState('');
    const [emailRegError, setEmailRegError] = useState('');

    const [passwordReg, setPasswordReg] = useState('');
    const [passwordRegError, setPasswordRegError] = useState('');

    const [usernameReg, setUsernameReg] = useState('');
    const [usernameRegError, setUsernameRegError] = useState('');

    const [mobileReg, setMobileReg] = useState('');
    const [mobileRegError, setMobileRegError] = useState('');

    /***************************************************************************************** */
    const [emailLogin, setEmailLogin] = useState('');
    const [emailLoginError, setEmailLoginError] = useState('');

    const [passwordLogin, setPasswordLogin] = useState('');
    const [passwordLoginError, setPasswordLoginError] = useState('');

    /***************************************************************************************** */

    const [successMsg, setSuccessMsg] = useState('');

    /******************************************************************************************* */

    const handleEmailRegChange = (e) => {
        setSuccessMsg('');
        setEmailRegError('');
        setEmailReg(e.target.value);
    }
    const handlePasswordRegChange = (e) => {
        setSuccessMsg('');
        setPasswordRegError('');
        setPasswordReg(e.target.value);
    }

    const handleUsernameRegChange = (e) => {
        setSuccessMsg('');
        setUsernameRegError('');
        setUsernameReg(e.target.value);
    }

    const handleMobileRegChange = (e) => {
        setSuccessMsg('');
        setMobileRegError('');
        setMobileReg(e.target.value);
    }

    /******************************************************************************************* */
    const handleEmailLoginChange = (e) => {
        setSuccessMsg('');
        setEmailLoginError('');
        setEmailLogin(e.target.value);
    }
    const handlePasswordLoginChange = (e) => {
        setSuccessMsg('');
        setPasswordLoginError('');
        setPasswordLogin(e.target.value);
    }
    /******************************************************************************************* */

    const handleSubmitReg = (e) =>
    {
        e.preventDefault();
        console.log(usernameReg);
        console.log(emailReg);
        console.log(passwordReg);
        console.log(mobileReg);

        //empty username check
        if (!usernameReg == '') 
        {
            setUsernameRegError('');
      
        }
        
        else 
        {
            setUsernameRegError('Please enter your Username');
        }

        //empty email check
        if (!emailReg == '') 
        {
            //check valid email
            const emailRegRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
            if (emailRegRegex.test(emailReg)) {
                setEmailRegError('');
            }
            else {
                setEmailRegError('Invalid email');
            }
        }
        else 
        {
            setEmailRegError('Please enter your email');
        }

        //empty password check
        if (!passwordReg == '') 
        {
            if (passwordReg.length > 6) 
            {
                setPasswordRegError('');
            }
            else 
            {
                setPasswordRegError('Password must have more than 6 characters');
            }
        }
        else 
        {
            setPasswordRegError('Please enter your password');
        }

        //empty mobile check
        if (!mobileReg == '') 
        {
            //check valid mobile
            const mobileRegRegex = /^[0-9]{10}$/;
            if (mobileRegRegex.test(mobileReg)) {
                setMobileRegError('');
            }
            else {
                setMobileRegError('Invalid Mobile');
            }
        }
        else 
        {
            setMobileRegError('Please enter your Mobile');
        }

    };
    /************************************************************************************************ */
    const handleSubmitLogin = (e) =>
    {
        e.preventDefault();
        console.log(emailLogin);
        console.log(passwordLogin);

        //empty email check
        if (!emailLogin == '') 
        {
            //check valid email
            const emailLoginRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
            if (emailLoginRegex.test(emailLogin)) {
                setEmailLoginError('');
            }
            else {
                setEmailLoginError('Invalid email');
            }
        }
        else 
        {
            setEmailLoginError('Please enter your email');
        }
        //empty password check
        if (!passwordLogin == '') 
        {
            if (passwordLogin.length > 6) 
            {
                setPasswordLoginError('');
            }
            else 
            {
                setPasswordLoginError('Password must have more than 6 characters');
            }
        }
        else 
        {
            setPasswordLoginError('Please enter your password');
        }

    };

    /*****************************Sign-up Functions*********************************************** */






    /*****************************Main  Code********************************************* */
   return(
        <div className='comp'>
        
        <div className="dmain">
            <input type="checkbox" id="chk" aria-hidden="true"/>
        
        {/*}*************Register*********************************{*/}
	    <div className="signup">
        <form action="#" onSubmit={handleSubmitReg}>
			

            <label className='lab1' htmlFor="chk" aria-hidden="true">Register</label>
            
           
                <input type="text" name="usernameReg" id="usernameReg"  className="emailReg"  placeholder="Username" onChange={handleUsernameRegChange} value={usernameReg}/> <br/>
                {usernameRegError && <div className='error-msg'>{usernameRegError}</div>}

                <input type="text" name="emailReg" id="emailReg"  className="emailReg"  placeholder="Email" onChange={handleEmailRegChange} value={emailReg}/> <br/>
                {emailRegError && <div className='error-msg'>{emailRegError}</div>}


			    <input type="passwordReg" id="passwordReg" name="passReg" className="emailReg"  placeholder="Password" onChange={handlePasswordRegChange} value={passwordReg}/> <br/>
                {passwordRegError && <div className='error-msg'>{passwordRegError}</div>}

                <input type="text" name="mobileReg" id="mobileReg"  className="emailReg"  placeholder="Mobile Number" onChange={handleMobileRegChange} value={mobileReg}/> <br/>
                {mobileRegError && <div className='error-msg'>{mobileRegError}</div>}
            
            
            
                <button className="but" type="submit">Register</button>
            
			
		</form>

        </div>
        {/*}*************Register*********************************{*/}
        <div className="login">
        <form action="#" onSubmit={handleSubmitLogin}>
			

                <label style={{color:"black"}} className="lab1" htmlFor="chk" aria-hidden="true">Login</label>
            

                <input type="text" name="emailLogin" id="emailLogin"  className="emailReg"  placeholder="Email" onChange={handleEmailLoginChange} value={emailLogin}/> <br/>
                {emailLoginError && <div className='error-msg'>{emailLoginError}</div>}


			    <input type="password" id="passwordLogin" name="password" className="emailReg"  placeholder="Password" onChange={handlePasswordLoginChange} value={passwordLogin}/> <br/>
                {passwordLoginError && <div className='error-msg'>{passwordLoginError}</div>}
            
            
           
                <button className="but" type="submit">Login</button>
            
			
		</form>


        
	    </div>


        </div>

        </div>
    
    )
    
}

export default LoginDemo2;


//************************************************************************************************************** */
/*


/*******************************************
 <body>
	<div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true">

			<div class="signup">
				<form>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" required="">
					<input type="email" name="email" placeholder="Email" required="">
					<input type="password" name="pswd" placeholder="Password" required="">
					<button>Sign up</button>
				</form>
			</div>

			<div class="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required="">
					<input type="password" name="pswd" placeholder="Password" required="">
					<button>Login</button>
				</form>
			</div>
	</div>
</body>
 */