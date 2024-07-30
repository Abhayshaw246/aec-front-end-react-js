import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { listEmployees } from "../services/EmployeeServices"


const ListEmployeeComponent = () => {
    const [employees,setEmployees]  =  useState([]);
    const navigator = useNavigate();
 
    useEffect( () => {
 
       listEmployees().then((response) => {
         setEmployees(response.data);
 
       }).catch(error =>{
         console.error(error);
       })
 
    },[])

  return (
    
    <div className='container'>
        {/* <button type="button" className="btn btn-primary" onClick={addNewEmployee}>Add Employee</button> */}
       <h3> List Of Empoyees</h3>
    <table className='table'>
        <thead>

            <tr>
                <th>EmpId</th>
                <th>EmpName</th>
                <th>EmpCity</th>              
                <th>EmpAddress</th>
            </tr>
        </thead>

        <tbody>
            {
              
               
                   employees.map(employee =>
                   <tr key={employee.id}>
                       <td>{employee.empId}</td>
                       <td>{employee.empName}</td>                  
                       <td>{employee.empCity}</td>
                       <td>{employee.empAddress}</td>
                       {/* <td>
                        <button className="btn btn-info" onClick="{() =>updateEmployee(employee.id)}">Update</button>
                       </td> */}
                     
                   </tr>)
            }
        </tbody>
    </table>
    </div>
  )
}

export default ListEmployeeComponent;