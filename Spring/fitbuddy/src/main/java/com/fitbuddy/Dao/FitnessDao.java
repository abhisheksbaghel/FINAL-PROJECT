package com.fitbuddy.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.fitbuddy.Model.Fitness;


@Repository
public interface FitnessDao extends JpaRepository<Fitness, Integer> {
	public Fitness findById(@Param(value = "id") int id);
}
