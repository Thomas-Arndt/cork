package com.cork.server.services;

import java.util.List;
import java.util.Optional;
import java.util.Properties;

import javax.servlet.http.HttpServletRequest;

import com.cork.server.models.Ad;
import com.cork.server.repositories.AdRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;

@Service
public class AdService {

    @Autowired
    private AdRepository adRepo;

    // @Autowired
    // private JavaMailSender mailSender;

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
        // inject location of the image file
        Ad newAd = adRepo.save(ad);
        // send the automated HTML e-mail

        // String title = ad.title;

        return newAd;
    }

    public Ad updateAd(Ad ad) {
        return adRepo.save(ad);
    }

    public void deleteAd(Long id) {
        adRepo.deleteById(id);
    }

}
