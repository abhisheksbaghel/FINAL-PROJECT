import { borderBottom } from '@mui/system';
import React,{useState} from 'react';
import { useEffect } from 'react';
import "./cart.css";

const Cart = ({cart, setCart, handleChange}) => {

    const handlePay=()=>{
        alert("Order Placed Successfully!!!");
        window.location.href='http://localhost:3000/product';
        return false;
    };
    const [price, setPrice] = useState(0);
    
    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
        // handlePrice();
    }

    useEffect(()=>{
        handlePrice();
    })

  return (
    <div>
        
    
    <div style={{width:"100vw"}} className='row Art'>
        {
            cart?.map((item)=>(
                <>
                <div className="cart_box1 col-8" key={item.id}>
                    <div className="cart_img1">
                        <img src={item.img} />
                        <p style={{color:"white"}}>{item.title}</p>
                    </div>
                    <div>
                        <button style={{height:"40px", width:"30px"}} onClick={()=>handleChange(item, +1)}> + </button>
                        <button style={{height:"40px", width:"30px"}}>{item.amount}</button>
                        <button style={{height:"40px", width:"30px"}} onClick={()=>handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={()=>handleRemove(item.id)} >Remove</button>
                    </div>
                </div>
                <br />
                </>
            ))}
        <div className='total'>
            <div style={{marginRight:"5%"}}>Total Price of your Cart : </div>
            <div >Rs - {price}</div>
            
        </div>
        <br />
        <br />
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
         
         </div>
    </div>
    <br />
        <br />

        <div
  className="card shadow-2-strong mb-5 mb-lg-0"
  style={{ borderRadius: 16 ,width:"90%", marginLeft:"5%" }}
>
  <div className="card-body p-4">
    <div className="row">
      <div className="col-md-6 col-lg-4 col-xl-3 mb-4 mb-md-0">
        <form>
          <div className="d-flex flex-row pb-3">
            <div className="d-flex align-items-center pe-2">
              <input
                className="form-check-input"
                type="radio"
                name="radioNoLabel"
                id="radioNoLabel1v"
                defaultValue=""
                aria-label="..."
                defaultChecked=""
              />
            </div>
            <div className="rounded border w-100 p-3">
              <p className="d-flex align-items-center mb-0">
                <i className="fab fa-cc-mastercard fa-2x text-dark pe-2" />
                Credit Card
              </p>
            </div>
          </div>
          <div className="d-flex flex-row pb-3">
            <div className="d-flex align-items-center pe-2">
              <input
                className="form-check-input"
                type="radio"
                name="radioNoLabel"
                id="radioNoLabel2v"
                defaultValue=""
                aria-label="..."
              />
            </div>
            <div className="rounded border w-100 p-3">
              <p className="d-flex align-items-center mb-0">
                <i className="fab fa-cc-visa fa-2x fa-lg text-dark pe-2" />
                Debit Card
              </p>
            </div>
          </div>
          <div className="d-flex flex-row">
            <div className="d-flex align-items-center pe-2">
              <input
                className="form-check-input"
                type="radio"
                name="radioNoLabel"
                id="radioNoLabel3v"
                defaultValue=""
                aria-label="..."
              />
            </div>
            <div className="rounded border w-100 p-3">
              <p className="d-flex align-items-center mb-0">
                <i className="fab fa-cc-paypal fa-2x fa-lg text-dark pe-2" />
                PayPal
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className="col-md-6 col-lg-4 col-xl-6">
        <div className="row">
          <div className="col-12 col-xl-6">

          <div className="form-outline mb-4 mb-xl-5">
              <input
                style={{borderBottom:"2px solid black"}}
                type="text"
                id="typeName"
                className="form-control form-control-lg"
                siez={17}
                placeholder="Sector-12 Kharghar MH"
              />
              <label className="form-label" htmlFor="typeName">
                Full Delivery Address
              </label>
            </div>

            <div className="form-outline mb-4 mb-xl-5">
              <input
              style={{borderBottom:"2px solid black"}}
                type="text"
                id="typeName"
                className="form-control form-control-lg"
                siez={17}
                placeholder="John Smith"
              />
              <label className="form-label" htmlFor="typeName">
                Name on card
              </label>
            </div>
            <div className="form-outline mb-4 mb-xl-5">
              <input
              style={{borderBottom:"2px solid black"}}
                type="text"
                id="typeExp"
                className="form-control form-control-lg"
                placeholder="MM/YY"
                size={7}
                minLength={7}
                maxLength={7}
              />
              <label className="form-label" htmlFor="typeExp">
                Expiration
              </label>
            </div>
          </div>
          <div className="col-12 col-xl-6">
            <div className="form-outline mb-4 mb-xl-5">
              <input
              style={{borderBottom:"2px solid black"}}
                type="text"
                id="typeText"
                className="form-control form-control-lg"
                siez={17}
                placeholder="1111 2222 3333 4444"
                minLength={19}
                maxLength={19}
              />
              <label className="form-label" htmlFor="typeText">
                Card Number
              </label>
            </div>
            <div className="form-outline mb-4 mb-xl-5">
              <input
              style={{borderBottom:"2px solid black"}}
                type="password"
                id="typeText"
                className="form-control form-control-lg"
                placeholder="●●●"
                size={1}
                minLength={3}
                maxLength={3}
              />
              <label className="form-label" htmlFor="typeText">
                Cvv
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-xl-3">
        <button style={{backgroundColor:"green"}} type="button" className="btn btn-primary btn-block btn-lg" onClick={handlePay}>
          <div className="d-flex justify-content-between">
            <span >Pay Rs - {price}</span>
            <span></span>
          </div>
        </button>
      </div>
    </div>
  </div>
</div>

    
    </div>
  )
}

export default Cart