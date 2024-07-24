import React, { useEffect, useState } from 'react'
import { updateUsers } from './usersAction';
import { useDispatch } from 'react-redux';
import {  useLocation, useNavigate, useParams } from 'react-router-dom';

function EditUsers() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
    const { id } = useParams();
    const nav = useNavigate()
  const dispatch = useDispatch();
  const { state } = useLocation();

  useEffect(() => {
    if (state && state.user) {
      const { user } = state;
      setName(user.name);
      setEmail(user.email);
      setContact(user.contact);
      setAddress(user.address);
    }
  }, [state]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateUsers({ id: parseInt(id), name, email, contact, address  }));
    nav('/');
  };

  return (
    <div>
     <div className="container mt-5">
        <h1 className="mb-4">Edit User</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              style={{width:"600px", marginLeft:"330px"}}
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter the Name"
            />
            <label htmlFor="name" style={{marginLeft:"330px"}}>Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              style={{width:"600px", marginLeft:"330px"}}
              id="name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter the Email"
            />
            <label htmlFor="email" style={{marginLeft:"330px"}}>Email</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              style={{width:"600px", marginLeft:"330px"}}
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Enter the contact"
            />
            <label htmlFor="name" style={{marginLeft:"330px"}}>Contact</label>
          </div>

          <div className="form-floating mb-3">
            <select
              className="form-select"
              style={{ width: "600px", marginLeft: "330px" }}
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            >
              <option value="">Select Address</option>
              <option value="Address 1">Delhi</option>
              <option value="Address 2">Mumbai</option>
              <option value="Address 3">Ahmedabad</option>
              <option value="Address 3">Bangalore</option>
              <option value="Address 3">Pune</option>
            </select>
            <label htmlFor="address" style={{ marginLeft: "330px" }}>
              Address
            </label>
          </div>


          <button type="submit" className="btn btn-primary mt-3" style={{width:"200px"}}>
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditUsers