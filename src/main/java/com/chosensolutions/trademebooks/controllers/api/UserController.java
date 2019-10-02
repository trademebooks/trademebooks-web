package com.chosensolutions.trademebooks.controllers.api;

import com.chosensolutions.trademebooks.domain.dto.UserDto;
import com.chosensolutions.trademebooks.domain.request.UserDetailsRequestModel;
import com.chosensolutions.trademebooks.domain.response.UserRest;
import com.chosensolutions.trademebooks.services.user.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class UserController {

    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(path = "/{id}")
    public UserRest getUser(@PathVariable String id) {
        UserDto userDto = userService.getUserByUserId(id);
        ModelMapper modelMapper = new ModelMapper();
        UserRest returnValue = modelMapper.map(userDto, UserRest.class);

        return returnValue;
    }

    @PostMapping("/register")
    public UserRest createUser(@RequestBody UserDetailsRequestModel userDetailsRequestModel) {
        UserRest returnValue = new UserRest();

/*        UserDto userDto = new UserDto();
        BeanUtils.copyProperties(userDetailsRequestModel, userDto);*/

        ModelMapper modelMapper = new ModelMapper();
        UserDto userDto = modelMapper.map(userDetailsRequestModel, UserDto.class);

        UserDto createdUser = userService.createUser(userDto);
        returnValue = modelMapper.map(createdUser, UserRest.class);

        return returnValue;
    }

    @PutMapping
    public String updateUser() {
        return "update user";
    }

    @DeleteMapping
    public String deleteUser() {
        return "delete user";
    }

}