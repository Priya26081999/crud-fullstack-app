package com.example.ems_backend.repositary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ems_backend.entity.Employee;

@Repository
public interface EmployeeRepositary extends JpaRepository<Employee, Long> {
	

}
