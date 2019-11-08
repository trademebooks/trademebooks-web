package com.chosensolutions.trademebooks.models;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@Table(name = "friends")
public class Friend {

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
