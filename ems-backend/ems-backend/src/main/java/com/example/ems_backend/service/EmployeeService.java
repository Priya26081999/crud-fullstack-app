package com.example.ems_backend.service;

import java.util.List;

import com.example.ems_backend.dto.EmployeeDto;

public interface EmployeeService {
	
	EmployeeDto createEmployee(EmployeeDto employeeDto);
	
	EmployeeDto getEmployeeById(Long id);
	
	List<EmployeeDto> getAllEmployee();
	
	EmployeeDto updateEmployeeById(Long id ,EmployeeDto updeteEmployee);
	
	void deleteEmployee(Long id);
	
	

}
