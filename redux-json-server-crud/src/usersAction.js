import axios from 'axios';

export const fetchUsers = () => dispatch => {
  dispatch({ type: 'FETCH_USERS_REQUEST' });
  axios.get('http://localhost:4000/users')
    .then(response => {
      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: response.data });
    })
    .catch(error => {
      dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
    });
};

export const addUsers = (user) => (dispatch, getState) => {
  const { users } = getState().users;
  const nextId = users.length > 0 ? Math.max(...users.map(u => parseInt(u.id))) + 1 : 1;
  const newUser = { ...user, id: nextId.toString() };

  axios.post('http://localhost:4000/users', newUser)
    .then(response => {
      dispatch({ type: 'ADD_USER', payload: response.data });
    })
    .catch(error => {
      console.error('Error adding user:', error);
    });
};

export const deleteUsers = id => dispatch => {
  axios.delete(`http://localhost:4000/users/${id}`)
    .then(() => {
      dispatch({ type: 'DELETE_USER', payload: id });
    })
    .catch(error => {
      console.error('Error deleting user:', error);
    });
};

export const updateUsers = user => dispatch => {
  axios.put(`http://localhost:4000/users/${user.id}`, user)
    .then(response => {
      dispatch({ type: 'UPDATE_USER', payload: response.data });
    })
    .catch(error => {
      console.error('Error updating user:', error);
    });
};
