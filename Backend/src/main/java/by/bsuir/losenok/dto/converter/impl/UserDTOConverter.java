package by.bsuir.losenok.dto.converter.impl;

import by.bsuir.losenok.dto.UserDTO;
import by.bsuir.losenok.dto.converter.DTOConverter;
import by.bsuir.losenok.entity.User;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class UserDTOConverter implements DTOConverter<User, UserDTO> {

    @Override
    public UserDTO getDto(User entity) {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(entity.getId());
        userDTO.setEmail(entity.getEmail());
        userDTO.setPassword(entity.getPassword());
        userDTO.setRole(entity.getRole());
        userDTO.setFirstName(entity.getFirstName());
        userDTO.setLastName(entity.getLastName());
        return userDTO;
    }

    @Override
    public User getEntity(UserDTO dto) {
        User user = new User();
        user.setId(dto.getId());
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());
        user.setRole(dto.getRole());
        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        return user;
    }

    @Override
    public List<UserDTO> getDtoList(List<User> entityList) {
        List<UserDTO> userDTOList = new ArrayList<>(entityList.size());
        userDTOList.addAll(entityList.stream().map(this::getDto).collect(Collectors.toList()));
        return userDTOList;
    }
}
