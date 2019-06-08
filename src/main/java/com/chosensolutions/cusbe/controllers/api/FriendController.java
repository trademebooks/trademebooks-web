package com.chosensolutions.cusbe.controllers.api;

import com.chosensolutions.cusbe.domain.dto.FriendDto;
import com.chosensolutions.cusbe.repositories.FriendRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/friends")
public class FriendController {

    @Autowired
    private FriendRepository friendRepository;

    @GetMapping("/all")
    public List<FriendDto> friends() {

        //System.out.println(friendRepository.queryGetAllFriendsOfUserThroughId("1"));
        return friendRepository.queryGetAllFriendsOfUserThroughId("1");
    }

}