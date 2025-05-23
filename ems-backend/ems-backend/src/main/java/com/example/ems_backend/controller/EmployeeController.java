package com.example.ems_backend.controller;
import java.util.List;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ems_backend.dto.EmployeeDto;
import com.example.ems_backend.service.EmployeeService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")
@CrossOrigin("*")

public class EmployeeController {
	
	private EmployeeService employeeService;
	
	// build add employee rest-api
	
	@PostMapping
	public ResponseEntity<EmployeeDto>createEmployee(@RequestBody EmployeeDto employeeDto){
		
		EmployeeDto savedEmployee = employeeService.createEmployee(employeeDto);
		return new ResponseEntity<>(savedEmployee,HttpStatus.CREATED);
	}
	
	
	// build get employee by id rest-api
	
	@GetMapping("/{id}")
	
	public ResponseEntity<EmployeeDto>getEmployeeById(@PathVariable("id") Long id ){
		
		EmployeeDto getEmployee = employeeService.getEmployeeById(id);
		return new  ResponseEntity<>(getEmployee,HttpStatus.OK);
		
	}
	
	// build get all employees 
	@GetMapping()
	public ResponseEntity <List<EmployeeDto>>getAllEmployee(){
		
		List<EmployeeDto> getAllEmployee = employeeService.getAllEmployee();
		
		return new ResponseEntity<>(getAllEmployee,HttpStatus.OK);
		
	}
	
	//build update employee rest-api
	
	@PutMapping("/{id}")
	
	public ResponseEntity<EmployeeDto>updateEmployee(@PathVariable("id") Long id,@RequestBody EmployeeDto employeeDto){
		
	    EmployeeDto updateEmployee = employeeService.updateEmployeeById(id, employeeDto);
	    
	    return new ResponseEntity<>(updateEmployee,HttpStatus.OK);
	}
	
	
	//build update employee rest-api
	
	@DeleteMapping("/{id}")
	
	public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long id) {
		
		employeeService.deleteEmployee(id);
		return ResponseEntity.ok("Employee Deleted Successfully.");
		
	}
	
	
	
	
	
	
	
	

}
