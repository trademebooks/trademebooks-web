package com.chosensolutions.models;

import lombok.Data;

import javax.persistence.*;

@Data
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
