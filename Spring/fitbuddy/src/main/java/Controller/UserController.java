package Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import Model.Users;
import Service.UsersServ;

@RestController
public class UserController {
	@Autowired
	private UsersServ userServ;
	
	@PostMapping(value= {"/add"})
	public void loadData(@ModelAttribute Users user)
	{
		userServ.add(user);
	}
	
	@GetMapping(value= {"/getList"})
	public List<Users> getAllData()
	{
		return userServ.getAll();
	}
	
	@DeleteMapping(value= {"/details/{id}"})
	public void delete(@PathVariable int id)
	{
		userServ.removeById(id);
	}

}
