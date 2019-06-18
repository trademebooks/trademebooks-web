package com.chosensolutions.trademebooks.models;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "schools")
public class School {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "school_name")
    private String name;

    @Column
    private String shortName;

    @Column
    private String code;

}
