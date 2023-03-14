package com.fitbuddy.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitbuddy.Dao.LoginDao;
import com.fitbuddy.Model.Login;

@Service
public class LoginServImpl implements LoginServ{
	@Autowired
	private LoginDao logDao;

	@Override
	public void update(Login login) {
		// TODO Auto-generated method stub
		logDao.save(login);
	}

	@Override
	public Login verify(String email) {
		return logDao.getByEmail(email);
	}

}
