package com.chosensolutions.trademebooks.repositories;

import com.chosensolutions.trademebooks.models.FriendEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FriendRepository extends JpaRepository<FriendEntity, Long> {

    /*
     * SELECT
     * user_two_id AS user_id,
     * email,
     * first_name,
     * last_name
     * FROM `friends`
     * LEFT JOIN users AS users_table_1 ON users_table_1.id = friends.user_two_id
     * WHERE user_one_id = 1
     */
    @Query(value = "SELECT user_two_id AS user_id, email, first_name, last_name " +
            "FROM friends LEFT JOIN users AS users_table_1 ON users_table_1.id = friends.user_two_id " +
            "WHERE user_one_id = 1",
            nativeQuery = true)
    List<Object[]> queryGetAllFriendsOfUserThroughId(String id);
}