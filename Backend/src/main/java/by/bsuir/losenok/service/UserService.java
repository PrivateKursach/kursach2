package by.bsuir.losenok.service;

import by.bsuir.losenok.dto.UserDTO;

public interface UserService extends GenericService<UserDTO, Long> {
    UserDTO login(String email, String password);
    UserDTO register(UserDTO userDTO);
}
