package com.chosensolutions.trademebooks.services.friend;

import com.chosensolutions.trademebooks.domain.dto.FriendDto;
import com.chosensolutions.trademebooks.models.User;
import com.chosensolutions.trademebooks.repositories.FriendRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

@Service
public class FriendService {

    @Autowired
    private FriendRepository friendRepository;

    public List<FriendDto> getAllFriendsByUserId() {
        List<Object[]> friends = friendRepository.queryGetAllFriendsOfUserThroughId("1");
        List<FriendDto> friendDtos = new ArrayList<>();
        for (Object[] friend : friends) {
            FriendDto friendDto = new FriendDto();

            User user = new User();
            user.setUserId("1");

            friendDto.setUserId((BigInteger) friend[0]);
            friendDto.setEmail((String) friend[1]);
            friendDto.setFirstName(String.valueOf(friend[2]));
            friendDto.setLastName((String) friend[3]);
            friendDtos.add(friendDto);
        }

        return friendDtos;
    }

}
