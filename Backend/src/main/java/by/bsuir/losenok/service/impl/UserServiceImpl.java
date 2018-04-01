package by.bsuir.losenok.service.impl;

import by.bsuir.losenok.dao.UserDAO;
import by.bsuir.losenok.dto.UserDTO;
import by.bsuir.losenok.dto.converter.impl.UserDTOConverter;
import by.bsuir.losenok.entity.User;
import by.bsuir.losenok.service.UserService;
import by.bsuir.losenok.service.exception.AuthorizationException;
import by.bsuir.losenok.service.exception.ServiceValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserServiceImpl extends GenericServiceImpl<User, UserDTO, Long> implements UserService {

    private UserDAO userDAO;
    private UserDTOConverter userDTOConverter;

    @Override
    public UserDTO login(String email, String password) {
        User user = userDAO.getByEmail(email);
        if (user == null) {
            throw new AuthorizationException();
        }
        if (!user.getPassword().equals(password)) {
            throw new AuthorizationException();
        }
        return userDTOConverter.getDto(user);
    }

    @Override
    public UserDTO register(UserDTO userDTO) {
        User userWithSameEmail = userDAO.getByEmail(userDTO.getEmail());
        if (userWithSameEmail != null) {
            throw new ServiceValidationException();
        }
        userDTO.setRole(1);
        User createdUser = userDAO.add(userDTOConverter.getEntity(userDTO));
        return userDTOConverter.getDto(createdUser);
    }

    @Autowired
    public void setUserDAO(UserDAO userDAO) {
        setGenericDao(userDAO);
        this.userDAO = userDAO;
    }

    @Autowired
    public void setUserDTOConverter(UserDTOConverter userDTOConverter) {
        setDtoConverter(userDTOConverter);
        this.userDTOConverter = userDTOConverter;
    }
}
