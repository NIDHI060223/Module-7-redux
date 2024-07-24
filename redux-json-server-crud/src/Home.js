import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteUsers, fetchUsers } from './usersAction';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleEdit = user => {
    navigate(`/edit/${user.id}`, { state: { user } });
  };

  const handleDelete = id => {
    dispatch(deleteUsers(id));
  };

  return (
    <div className="container">
      <h1 className='m-5'>Redux Crud</h1>
      <Link to="/add" className="btn btn-primary mb-4" style={{marginRight:"1000px", width:"250px"}}>Add User</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.contact}</td>
              <td>{user.address}</td>
              <td>
                <button className="btn btn-danger me-2" onClick={() => handleDelete(user.id)}>Delete</button>
                <button className="btn btn-success"  onClick={() => handleEdit(user)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
