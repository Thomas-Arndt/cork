package com.cork.server.services;

import java.util.List;
import java.util.Optional;

import javax.activation.DataSource;
import javax.activation.FileDataSource;
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
        String image = newAd.getImage();
        Double price = newAd.getPrice();
        String city = newAd.getCity();
        String state = newAd.getState();
        String description = newAd.getDescription();
        String email = newAd.getEmail();
        Long adId = newAd.getId();

        String from = "cork.noreply@gmail.com";
        String to = email;

        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            String mailSubject = "Here's you're new Cork Ad listing";

            String mailContent = "<!doctype html>\n" +
                    "<html lang=\"en\" xmlns=\"http://www.w3.org/1999/xhtml\"\n" +
                    "<head>\n" +
                    "    <meta charset=\"UTF-8\">\n" +
                    "    <meta name=\"viewport\"\n" +
                    "          content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n"
                    +
                    "    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n" +
                    "    <title>Email</title>\n" +
                    "</head>\n" +
                    "<body>\n" +
                    "<h2 align='center' style=''>Would you like to change or delete your listing?</h2>" +
                    "<h2 align='center' style='display: flex; justify-content: space-around; width: 100px; '><a href='http://localhost:3000/details/"
                    + adId + "'>View Your Listing</a><p></p><a href='http://localhost:3000/edit_ad/"
                    + adId + "'>Edit</a><p></p><a href='http://localhost:3000/delete/"
                    + adId + "'>Delete</a></h2>"
                    +
                    "<h2 align='center' style=''>" + title + "</h2>" +
                    "<h3 align='center' style=''>Price: " + price + "</h3>" +
                    "<h3 align='center' style=''>Location: " + city + ", " + state + "</h3>" +
                    "<h3 align='center' style='display:flex; flex-wrap: wrap; justify-content:center; width: 100px; margin-top: 35px; border: 1px solid black; border-radius: 5px; padding: 10px'>"
                    + description + "</h3>" +
                    "<p><img align='center' src='cid:adImage' style='width: 250px; height: auto;' /></p>" +

                    "</body>\n" +
                    "</html>\n";

            helper.setFrom(from);
            helper.setTo(to);
            helper.setSubject(mailSubject);
            helper.setText(mailContent, true);

            DataSource adImage = new FileDataSource(
                    "C:\\Users\\Rangel\\Desktop\\cork\\client\\src\\static\\images\\adImages" + image);
            helper.addInline("adImage", adImage);

            System.out.println(message);
            mailSender.send(message);

        } catch (MessagingException me) {
            System.out.println(me);
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
