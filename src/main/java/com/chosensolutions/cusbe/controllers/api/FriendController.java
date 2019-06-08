package com.chosensolutions.cusbe.controllers.api;

import com.chosensolutions.cusbe.domain.dto.FriendDto;
import com.chosensolutions.cusbe.repositories.FriendRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/friends")
public class FriendController {

    @Autowired
    private FriendRepository friendRepository;

    @GetMapping("/all")
    public List<FriendDto> friends() {
        List<Object[]> friends = friendRepository.queryGetAllFriendsOfUserThroughId("1");
        List<FriendDto> friendDtos = new ArrayList<>();
        for (Object[] friend : friends) {
            FriendDto friendDto = new FriendDto();

            friendDto.setUserId((BigInteger) friend[0]);
            friendDto.setEmail((String) friend[1]);
            friendDto.setFirstName(String.valueOf(friend[2]));
            friendDto.setLastName((String) friend[3]);
            friendDtos.add(friendDto);
        }

        return friendDtos;
    }

}