package Dao;
import Model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface UsersDao extends JpaRepository<Users, Integer>{

}
