import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from './redux/actions';

const EmployeeList = () => {
  const dispatch = useDispatch();
  const { loading, employees, error } = useSelector(state => state.employee);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <div>
      <h1>Employee List</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            {employee.name} - {employee.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
