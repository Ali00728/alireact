import React, { useState } from 'react'

const Contact = () => {
    const [data,setData] = useState({
        name : "",
        email : "",
        password : "",
        message : "",
    })
   
    const inputEvent = (event) =>{
        const {name,value} = event.target;
        setData((preval)=>{
            return{
                ...preval,
                [name]:value,
            }
        })
    }
    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`My name is ${data.name} email is ${data.email} and i want to say ${data.message}`);
    }
    return (
        <>
            <div className="my-4">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                        <div className="mb-3">
                                <label  className="form-label">Full Name</label>
                                <input name="name"  onChange={inputEvent} value={data.name}  type="text" className="form-control" placeholder="Enter Name" />
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Email address</label>
                                <input name="email" onChange={inputEvent} value={data.email} type="email" className="form-control" placeholder="Enter Email" />
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Password</label>
                                <input name="password"  onChange={inputEvent} value={data.password} type="password" className="form-control" placeholder="Enter Password" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea name="message"  onChange={inputEvent} value={data.message} className="form-control" rows="3"></textarea>
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Contact;