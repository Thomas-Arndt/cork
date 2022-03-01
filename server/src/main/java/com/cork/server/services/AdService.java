package com.cork.server.services;

import java.util.List;
import java.util.Optional;

import com.cork.server.models.Ad;
import com.cork.server.repositories.AdRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdService {

    @Autowired
    private AdRepository adRepo;

    public List<Ad> allAds() {
        return adRepo.findAll();
    }

    public Ad oneAd(Long id) {
        Optional<Ad> optionalAd = adRepo.findById(id);
        if (optionalAd.isPresent()) {
            return optionalAd.get();
        }
        return null;
    }

    public Ad createAd(Ad ad) {
        Ad newAd = adRepo.save(ad);
        return newAd;
    }

    public Ad updateAd(Ad ad) {
        return adRepo.save(ad);
    }

    public void deleteAd(Long id) {
        adRepo.deleteById(id);
    }

}
