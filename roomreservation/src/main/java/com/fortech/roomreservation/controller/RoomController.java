package com.fortech.roomreservation.controller;

import com.fortech.roomreservation.entity.Room;
import com.fortech.roomreservation.service.RoomServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PutMapping;

import java.util.List;

//@RestController
//@RequestMapping("/api/v1")
//@CrossOrigin("*")
//public class RoomController {
//
//    @Autowired
//    private RoomRepository rRepo;
//
//    @GetMapping("/rooms")
//    public List<Room> getAllRooms(){
////       List<Room> roomsList = rRepo.findAll();
////        if (roomsList.size() == 0) {
////            throw new RoomNotFoundException("There are no rooms");
////        }
//        return rRepo.findAll();
//    };
//
//    @PostMapping("/rooms")
//    @ResponseStatus(HttpStatus.CREATED)
//    public Room saveRoomDetails(@RequestBody Room room){
//        return rRepo.save(room);
//    }
//
//    @GetMapping("/rooms/{id}")
//    public Room getRoomById(@PathVariable Long id){
//        return  rRepo.findById(id).get();
//    }
//
//    @PutMapping("/rooms")
//    public Room updateRoomDetails(@RequestBody Room room){
//        return rRepo.save(room);
//    }
//
//    @DeleteMapping("/rooms/{id}")
//    public ResponseEntity<HttpStatus> deleteRoomById(@PathVariable Long id){
//        rRepo.deleteById(id);
//        return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
//    }
//}

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class RoomController {

    @Autowired
    private RoomServiceImpl roomService;

    @GetMapping("/rooms")
    public List<Room> getAllRooms(){
        return roomService.find();
    };

    @PostMapping("/rooms")
    @ResponseStatus(HttpStatus.CREATED)
    public Room saveRoomDetails(@RequestBody Room room){
        return roomService.create(room);
    }

    @GetMapping("/rooms/{id}")
    public Room getRoomById(@PathVariable Long id){
        return  roomService.findById(id);
    }

    @PutMapping("/rooms")
    public Room updateRoomDetails(@RequestBody Room room){
        return roomService.update(room);
    }

    @DeleteMapping("/rooms/{id}")
    public ResponseEntity<HttpStatus> deleteRoomById(@PathVariable Long id){
        roomService.delete(id);
        return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
    }
}


