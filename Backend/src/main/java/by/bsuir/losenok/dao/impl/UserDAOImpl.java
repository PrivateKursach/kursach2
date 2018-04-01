package by.bsuir.losenok.dao.impl;

import by.bsuir.losenok.dao.UserDAO;
import by.bsuir.losenok.entity.User;
import org.springframework.stereotype.Repository;

import javax.persistence.TypedQuery;
import java.util.List;

@Repository
public class UserDAOImpl extends GenericDAOImpl<User, Long> implements UserDAO {

    public UserDAOImpl() {
        super(User.class);
    }

    @Override
    public User getByEmail(String email) {
        TypedQuery<User> query = entityManager.createQuery("select u from User u where u.email = :email", User.class);
        List<User> userList = query.setParameter("email", email).getResultList();
        return userList.isEmpty() ? null : userList.get(0);
    }
}
