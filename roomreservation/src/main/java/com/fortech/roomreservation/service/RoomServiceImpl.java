package com.fortech.roomreservation.service;

import com.fortech.roomreservation.entity.Room;
import com.fortech.roomreservation.exceptions.RoomNotFoundException;
import com.fortech.roomreservation.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomServiceImpl implements RoomService {

    @Autowired
    private RoomRepository repository;

    @Override
    public List<Room> find() {
        return repository.findAllByOrderByIdAsc();
    }

    @Override
    public Room findById(Long id) {
        if (repository.findById(id).isPresent()) {
            return repository.findById(id).get();
        }
        throw new RoomNotFoundException("Room not found!");
    }

    @Override
    public Room create(Room room) {
        return repository.save(room);
    }

    @Override
    public Room update(Room room) {
        return repository.save(room);
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
