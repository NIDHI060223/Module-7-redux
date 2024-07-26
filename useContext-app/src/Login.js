import React, { useContext } from 'react'
import { AppContext } from './ThemeContext'

function Login() {
    const {theme} = useContext(AppContext);
  return (
    <div>
      <div className='conatainer main-login'>
      <div className={`login-page ${theme} mt-5`}>
        <h1 className="mb-4">Add Users</h1>
        <form>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              style={{marginTop:"50px" }}
              id="firstname"
              placeholder="Enter the Name"
            />
            <label htmlFor="name" style={{ color:'black' }}>
              User FirstName
            </label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              style={{ marginTop:"50px"}}
              id="name"
              placeholder="Enter the Email"
            />
            <label htmlFor="email" style={{  color:'black'  }}>
              User LastName
            </label>
          </div>

         
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "200px", marginTop:"50px" }}
          >
            Login
          </button>
        </form>
      </div>
      </div>
      
    </div>
  )
}

export default Login
