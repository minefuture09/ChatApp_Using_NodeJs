import React from 'react'
import "./join.css"
// import logo from "../../images/logo.png"
import { Link } from "react-router-dom"

let user;

const sendUser = () => {
    user = document.getElementById('joinInput').value;
    document.getElementById('joinInput').value = " ";
}


const Join = () => {



    return (
        
<section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">Please Enter Your Name To Join!</p>
                    <div className="form-outline form-white mb-4">
                      <input type="email" id="joinInput" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="typeEmailX ">Username</label>
                    </div>
                    
                    
                    <Link to="/chat"><button className="btn btn-outline-light btn-lg px-5" onClick={sendUser} type="submit">Login</button></Link>
                   
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>                
    )
}

export default Join
export { user }
