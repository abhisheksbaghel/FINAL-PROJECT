package com.fitbuddy.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.fitbuddy.Model.Login;
@Repository
public interface LoginDao extends JpaRepository<Login, Integer> {
	
	@Query(value="select e from Login e where e.email=:email")
	Login getByEmail(@Param(value="email")String email);

}
