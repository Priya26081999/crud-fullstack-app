package com.example.ems_backend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.ems_backend.dto.EmployeeDto;
import com.example.ems_backend.entity.Employee;
import com.example.ems_backend.exception.ResourseNoFoundException;
import com.example.ems_backend.mapper.EmployeeMapper;
import com.example.ems_backend.repositary.EmployeeRepositary;

import lombok.AllArgsConstructor;
@AllArgsConstructor
@Service
public class EmployeeImplementions implements EmployeeService {
	
	private EmployeeRepositary employeeRepository;

	@Override
	
	public EmployeeDto createEmployee(EmployeeDto employeeDto) {
		
		Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
		Employee createEmployee =employeeRepository.save(employee);
		return  EmployeeMapper.mapToEmployeeDto(createEmployee);
	}

	@Override
	public EmployeeDto getEmployeeById(Long id) {
		
		Employee employee = employeeRepository.findById(id).orElseThrow(()-> new ResourseNoFoundException("Employee is not exists with given id:"  + id));
		
		return EmployeeMapper.mapToEmployeeDto(employee);
		
		

	}

	@Override
	public List<EmployeeDto> getAllEmployee() {
		 List <Employee> employees =  employeeRepository.findAll();
		 
		return employees.stream().map((employee)->EmployeeMapper.mapToEmployeeDto(employee)).collect(Collectors.toList());
	}

	@Override
	public EmployeeDto updateEmployeeById(Long id, EmployeeDto updeteEmployee) {
		
		  Employee employee  = employeeRepository.findById(id).orElseThrow(()->new ResourseNoFoundException("Invalid id : " + id + "try again please!" ));
		  
		  employee.setFirstName(updeteEmployee.getFirstName());
		  employee.setLastName(updeteEmployee.getLastName());
		  employee.setEmail(updeteEmployee.getEmail());
		  
		  Employee updatedEmployee = employeeRepository.save(employee);
		return EmployeeMapper.mapToEmployeeDto(updatedEmployee);
	}

	@Override
	public void deleteEmployee(Long id) {
		
		 Employee employee  = employeeRepository.findById(id).orElseThrow(()->new ResourseNoFoundException("Invalid id : " + id + "try again please!" ));
		employeeRepository.deleteById(id);
        
		
	}
	
	

}
