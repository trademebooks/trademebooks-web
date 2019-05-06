package com.chosensolutions.cusbe.controllers.api;

import com.chosensolutions.cusbe.domain.dto.UserDto;
import com.chosensolutions.cusbe.domain.request.UserDetailsRequestModel;
import com.chosensolutions.cusbe.domain.response.UserRest;
import com.chosensolutions.cusbe.services.user.UserService;
import org.codehaus.jackson.map.util.BeanUtil;
import org.springframework.beans.BeanUtils;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public String getUser() {
        return "get user";
    }

    @PostMapping
    public UserRest createUser(@RequestBody UserDetailsRequestModel userDetailsRequestModel) {
        UserRest returnValue = new UserRest();

        UserDto userDto = new UserDto();
        BeanUtils.copyProperties(userDetailsRequestModel, userDto);

        UserDto createdUser = userService.createUser(userDto);
        BeanUtils.copyProperties(createdUser, returnValue);

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