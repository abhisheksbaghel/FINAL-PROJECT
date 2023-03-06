package Service;

import java.util.List;
import Model.Users;

public interface UsersServ {
	void add(Users user);
	void removeById(int id);
	List<Users> getAll();
}
