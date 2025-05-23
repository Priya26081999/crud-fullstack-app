import axios from 'axios';
const API_BASE_URL = "http://localhost:8080/api/employees"

export const ListEmployee  =()=> axios.get(API_BASE_URL)
export const CreateEmployee = (employee) =>axios.post(API_BASE_URL,employee)
export const GetEmployee = (employeeId) => axios.get(API_BASE_URL + "/"+ employeeId)
export const UpdateEmployee= (employeeId,employee) => axios.put(API_BASE_URL+"/"+ employeeId,employee)
export const DeleteEmployee = (id) => axios.delete(API_BASE_URL + "/" + id) 