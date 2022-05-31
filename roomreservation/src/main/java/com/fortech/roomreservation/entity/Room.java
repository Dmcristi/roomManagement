package com.fortech.roomreservation.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "rooms")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotBlank(message = "Type is mandatory")
    @Size(min = 2, max = 10)
    private String type;
    @NotBlank(message = "Description is mandatory")
    @Size(min = 5, max = 500)
    private String description;
    @NotBlank(message = "Location is mandatory")
    @Size(min = 3, max = 50)
    private String location;
}
