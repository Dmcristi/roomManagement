package com.fortech.roomreservation.service;

import com.fortech.roomreservation.entity.Room;

import java.util.List;

public interface RoomService {

    List<Room> find();
    Room findById(Long id);
    Room create(Room room);
    Room update(Room room);
    void delete(Long id);
}
