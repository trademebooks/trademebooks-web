package com.chosensolutions.trademebooks.models;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
@Table(name = "messages")
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column
    private String title;

    @Column
    private String body;

    @Column
    private boolean isRead;

    @Column
    private long fromUserId;

    @Column
    private long toUserId;

}
