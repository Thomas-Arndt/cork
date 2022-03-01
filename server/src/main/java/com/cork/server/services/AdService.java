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
                    "<h2 align='center' style='text-decoration: underline'><b>Ad Title:</b></h2>" +
                    "<h2 align='center'>" + title + "</h2>" +
                    "\n" +
                    "<img src='cid:adImage' align='center' />" +
                    "<div align='center'><span>$" + price + "</span><span>" + city + ",</span><span>" + state
                    + "</span></div>\n" +
                    "<div align='center' style='display:flex'>" + description + "</div>" +
                    "</body>\n" +
                    "</html>\n";

            helper.setFrom(from);
            helper.setTo(to);
            helper.setSubject(mailSubject);
            helper.setText(mailContent, true);

            DataSource loadImage = new FileDataSource(
                    "C:\\Users\\Rangel\\Desktop\\cork\\client\\src\\static\\images\\adImages" + image);
            helper.addInline("adImage", loadImage);

            System.out.println(message);
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
