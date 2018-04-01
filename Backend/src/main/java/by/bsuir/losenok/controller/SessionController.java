package by.bsuir.losenok.controller;

import by.bsuir.losenok.dto.UserDTO;
import by.bsuir.losenok.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/sessions")
public class SessionController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<UserDTO> createSession(@RequestBody UserDTO userDTO) {
        return ResponseEntity.ok(userService.login(userDTO.getEmail(), userDTO.getPassword()));
    }
}
