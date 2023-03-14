package com.fitbuddy.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitbuddy.Dao.FitnessDao;
import com.fitbuddy.Model.Fitness;

@Service
public class FitnessServImpl implements FitnessServ {
	
	@Autowired
	private FitnessDao fitDao;

	@Override
	public void add(Fitness fit) {
		
		fitDao.save(fit);
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeById(int id) {
		// TODO Auto-generated method stub
		fitDao.deleteById(id);
	}

	@Override
	public List<Fitness> getAll() {
		// TODO Auto-generated method stub
		return fitDao.findAll();
	}

	@Override
	public Fitness getById(int id) {
		// TODO Auto-generated method stub
		return fitDao.findById(id);
	}
	
	

}
