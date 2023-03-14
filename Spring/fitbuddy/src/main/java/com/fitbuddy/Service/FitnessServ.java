package com.fitbuddy.Service;

import java.util.List;

import com.fitbuddy.Model.Fitness;

public interface FitnessServ {
	
	void add(Fitness fit);
	void removeById(int id);
	List<Fitness> getAll();
	Fitness getById(int id);

}
