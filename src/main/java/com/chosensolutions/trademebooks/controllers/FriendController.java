package com.chosensolutions.trademebooks.controllers;

import com.chosensolutions.trademebooks.dtos.DataWrapperDTO;
import com.chosensolutions.trademebooks.models.Friend;
import com.chosensolutions.trademebooks.services.friend.FriendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/web/v1/friends")
public class FriendController {

    @Autowired
    FriendService friendService;

    @GetMapping("/")
    public ResponseEntity<DataWrapperDTO> friends() {
        List<Friend> authUserFriends = friendService.getAllFriendsByUserId();

        return ResponseEntity.status(200).body(new DataWrapperDTO("Here are all the currently authenticated user's friends", authUserFriends, null));
    }

}