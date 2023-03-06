package Service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import Dao.UsersDao;
import Model.Users;
@Service
public class UsersServImpl implements UsersServ{
	@Autowired
	private UsersDao userDao;

	@Override
	public void add(Users user) {
		userDao.save(user);
	}

	@Override
	public void removeById(int id) {
		userDao.deleteById(id);
	}

	@Override
	public List<Users> getAll() {
		Iterable<Users> itr=userDao.findAll();
		List<Users> lst=new ArrayList<Users>();
		itr.forEach(ele->lst.add(ele));
		return lst;
	}
}
