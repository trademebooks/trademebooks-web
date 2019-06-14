package com.chosensolutions.cusbe.controllers.api;

import com.chosensolutions.cusbe.domain.dto.FriendDto;
import com.chosensolutions.cusbe.services.friend.FriendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/friends")
public class FriendController {

    @Autowired
    FriendService friendService;

    @GetMapping("/all")
    public List<FriendDto> friends() {
        return friendService.getAllFriendsByUserId();
    }

}