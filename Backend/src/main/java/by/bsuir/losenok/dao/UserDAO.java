package by.bsuir.losenok.dao;

import by.bsuir.losenok.entity.User;

public interface UserDAO extends GenericDAO<User, Long> {
    User getByEmail(String email);
}
