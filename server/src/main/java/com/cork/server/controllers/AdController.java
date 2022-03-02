package com.cork.server.controllers;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import com.cork.server.models.Ad;
import com.cork.server.services.AdService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin(origins = "http://localhost:3000")
@RestController()
@RequestMapping("/api")
public class AdController {

    @Autowired
    private AdService adService;

    @GetMapping("/allAds")
    public List<Ad> allAds() {
        return adService.allAds();
    }

    @GetMapping("/oneAd/{id}")
    public ResponseEntity<Ad> oneAd(@PathVariable("id") Long id) {
        Ad ad = adService.oneAd(id);
        ad.setEmail(null);
        return ResponseEntity.ok(ad);
    }

    @PostMapping("/createAd")
    public ResponseEntity<Ad> createAd(@RequestBody Ad ad) {
        Ad newAd = adService.createAd(ad);
        return ResponseEntity.ok(newAd);

    }

    @PostMapping("/uploadImage")
    public ResponseEntity<Map<String, String>> uploadImage(@RequestParam("file") MultipartFile file) {
        UUID guid = UUID.randomUUID();
        File absolutePath = new File("C:\\Users\\Rangel\\Desktop\\cork\\client\\src\\static\\images\\adImages" + guid
                + file.getOriginalFilename());
        String fileName = guid + file.getOriginalFilename();
        try {
            file.transferTo(absolutePath);
        } catch (IOException ioe) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        Map<String, String> response = new HashMap<>();
        response.put("filePath", fileName);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/updateAd/{id}")
    public ResponseEntity<Ad> updateAd(@RequestBody Ad ad) {
        Ad updatedAd = adService.updateAd(ad);
        return ResponseEntity.ok(updatedAd);

    }

    @DeleteMapping("/deleteAd/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteAd(@PathVariable("id") Long id) {
        adService.deleteAd(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);

    }

}
