package com.fitbuddy.Dao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.fitbuddy.Model.Users;
@Repository
public interface UsersDao extends JpaRepository<Users, Integer>{
	
	@Query(value="select e from Users e where e.email=:email")
	Users getByEmail(@Param(value="email")String email);
	public Users findById(@Param(value = "id") int id);

}
