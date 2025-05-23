import { useEffect, useState } from "react"
import { ListEmployee,DeleteEmployee } from "../Services/EmployeeService";
import { useNavigate } from "react-router-dom";


const ListOfEmployee = () => {

    const[employees,setEmployees] = useState([]);
    const navigator = useNavigate();

    const addNewEmployee = ()=>{
        navigator("/add-employee")
    }

    useEffect(()=>{
       getAllEmployees()
    },[])

    const getAllEmployees = () => {
         ListEmployee()
        .then((response)=>{
        setEmployees(response.data);

        }).catch((error)=>{
            console.error(error)
        })
    }


    const updateEmployee =(id)=>{
        navigator(`/update-employee/${id}`)
    }

    const removeEmployee = (id) => {
        console.log(id)
        DeleteEmployee(id).then((response)=>{
          getAllEmployees();
        }).catch((error)=>{
            console.error(error)
        })
    }

    return (
    <>
    <div className="container">
       <h1>List of Employees</h1>
        <button type="button" className="btn btn-primary mb-2" onClick={addNewEmployee}>ADD Employee</button>
       <table className="table table-striped table-bordered">
        <thead>
            <tr>
                <th>Employee Id</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email</th>
                <th>Action</th>
            </tr>
        </thead>

        <tbody>
            {employees.map((data)=>(
                <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.email}</td>
                    <td>
                        <button className="btn btn-info" onClick={()=>updateEmployee(data.id)}>Update</button>
                        <button className="btn btn-danger" onClick={()=>removeEmployee(data.id)} style={{marginLeft:"10px"}}>Delete</button>
                    </td>
                    
                </tr>
            ))}
        </tbody>
       </table>
    </div>

    </>
  )
}

export default ListOfEmployee