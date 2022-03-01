package com.cork.server.services;

import java.util.List;
import java.util.Optional;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import com.cork.server.models.Ad;
import com.cork.server.repositories.AdRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class AdService {

    @Autowired
    private AdRepository adRepo;

    @Autowired
    private JavaMailSender mailSender;

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
        String title = newAd.getTitle();
        Double price = newAd.getPrice();
        String description = newAd.getDescription();
        String image = newAd.getImage();
        String city = newAd.getCity();
        String state = newAd.getState();
        String email = newAd.getEmail();

        String from = "cork.noreply@gmail.com";
        String to = email;

        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            String mailSubject = "Here's you're new Cork Ad listing";
            String mailContent = "<p><b>Ad Title: </b>" + title + "</p>";
            mailContent += "<p><b>Description:</b>" + description + "</p>";
            // mailContent += "<hr><img src='cid:adImage' />";

            helper.setFrom(from);
            helper.setTo(to);
            helper.setSubject(mailSubject);
            helper.setText(mailContent, true);
            // ClassPathResource resource = new ClassPathResource("");
            // helper.addInline("adImage", resource);

            // System.out.println(message);
            mailSender.send(message);

        } catch (MessagingException me) {
            System.out.println("Error");
        }

        return newAd;
    }

    public Ad updateAd(Ad ad) {
        return adRepo.save(ad);
    }

    public void deleteAd(Long id) {
        adRepo.deleteById(id);
    }

}
