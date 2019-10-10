package com.chosensolutions.trademebooks.controllers;

import com.chosensolutions.trademebooks.domain.dto.FriendDto;
import com.chosensolutions.trademebooks.services.friend.FriendService;
import com.chosensolutions.trademebooks.utils.DataWrapperDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/friends")
public class FriendController {

    @Autowired
    FriendService friendService;

    @GetMapping("/all")
    public ResponseEntity<DataWrapperDTO> friends() {
        List<FriendDto> authUserFriends = friendService.getAllFriendsByUserId();

        return ResponseEntity.status(200).body(new DataWrapperDTO(authUserFriends, "Here are all the currently authenticated user's friends", null));
    }

}