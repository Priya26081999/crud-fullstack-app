import { useEffect, useState } from "react"
import { CreateEmployee, GetEmployee, UpdateEmployee } from "../Services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";


const Employee = () => {

    const[firstName,SetFirstName] = useState("");
    const[lastName,SetLastName] = useState("");
    const[email,SetEmail] = useState("");
    const{id} = useParams();

    const[errors,setErrors] = useState({
        firstName:"",
        lastName:"",
        email:""
});

useEffect(()=>{
   
   if(id){
      GetEmployee(id).then((response)=>{
        SetFirstName(response.data.firstName);
        SetLastName(response.data.lastName)
        SetEmail(response.data.email)
      }).catch(error=>{
                console.error(error)
      })
   }
},[id])

   const validateForm = () =>{
    let valid = true;

    const errorCopy = {...errors}
    
    if(firstName.trim()){
        errorCopy.firstName = "";
    }
    else{
        errorCopy.firstName = "Fist name is required";
        valid=false
    }


    
    if(lastName.trim()){
        errorCopy.lastName = "";
    }
    else{
        errorCopy.lastName = "Last name is required";
        valid=false;
    }


    
    if(email.trim()){
        errorCopy.email = "";
    }
    else{
        errorCopy.email = "Email is required";
        valid=false;
    }

    setErrors(errorCopy)
    return valid


   }
   

    const navigator = useNavigate();

   

   

    const saveOrUpdateEmployee = (e)=>{
        e.preventDefault();

        if(validateForm()){



          const employee = {firstName,lastName,email}

        console.log(employee);
            if(id){
                UpdateEmployee(id,employee).then((response)=>{
                    console.log(response.data)
                    navigator("/employees")
                }).catch((error)=>{
                    console.error(error)
                })
            }
            else{
        CreateEmployee(employee).then((response)=>{
            console.log(response.data)
            navigator("/employees")
        }).catch((error)=>{
            console.error(error)
        })



        }

    }

        

    }

    const pageTitle = () =>{
        if(id){
            return  <h2 className="text-center">update Employee</h2>
        }

        else{
            return <h2 className="text-center">Add Employee</h2>
        }
    }



  return (
    <div>
        <div className="container">
            <br /> <br />
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                   {pageTitle()}
                    <div className="card-body">
                        <form action=" ">
                            <div className="form-group mb-2">
                           <label className="form-label">Fisrt Name</label>
                           <input type="text"  placeholder="Enter firstName" name="firstName"  value={firstName} className={`form-control  ${errors.firstName ? "is-invalid" : "" }`}
                              onChange={(e)=>SetFirstName(e.target.value)}/>

                              {errors.firstName && <div className="invalid-feedback">{errors.firstName} </div>}

                            </div>

                            <div className="form-group mb-2">
                           <label className="form-label">Last Name</label>
                           <input type="text"  placeholder="Enter LastName" name="lastName"  value={lastName} className={`form-control  ${errors.lastName ? "is-invalid" : "" }`  }
                              onChange={(e)=>SetLastName(e.target.value)}/>

                               {errors.lastName && <div className="invalid-feedback">{errors.lastName} </div>}

                            </div>

                           <div className="form-group mb-2">
                           <label className="form-label">Email</label>
                           <input type="email"  placeholder="email" name="email"  value={email}  className={`form-control  ${errors.email ? "is-invalid" : "" }`  }
                              onChange={(e)=>SetEmail(e.target.value)}/>

                               {errors.email && <div className="invalid-feedback">{errors.email} </div>}

                            </div>

                            <button className="btn btn-success"  type="submit"
                            onClick={saveOrUpdateEmployee}>Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Employee;