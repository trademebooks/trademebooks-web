package com.chosensolutions.cusbe.models;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@Table(name = "friends")
public class FriendEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    /** user_one_id
     * means that that this user has x amount of friends in the column user_two_id
     */
    @Column
    private Long user_one_id;

    /**
     * user_two_id
     * means that this user is a friend of that person in the column user_one_id
     */
    @Column
    private Long user_two_id;

}
