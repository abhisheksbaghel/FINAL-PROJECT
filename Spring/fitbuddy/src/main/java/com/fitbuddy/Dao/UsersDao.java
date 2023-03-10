package com.fitbuddy.Dao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fitbuddy.Model.Users;
@Repository
public interface UsersDao extends JpaRepository<Users, Integer>{

}
