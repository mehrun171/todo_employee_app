import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from '../redux/employeeSlice';

function EmployeeList() {
  const { employees, loading, error } = useSelector((state) => state.employees); // Match this to your store's structure
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="employee-container">
  <h1>Employee List</h1>
  <ul>
    {employees.map((employee) => (
      <li key={employee.id}>{employee.name}</li>
    ))}
  </ul>
</div>
  );
}

export default EmployeeList;
