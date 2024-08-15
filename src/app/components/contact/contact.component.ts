import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MailService } from '../../service/mail.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(private titleService : Title, private mailService: MailService)
  {
    this.titleService.setTitle('HMAIDI MOHAMED - Contact')
  }
  private access_key="db6ac238-08e6-4057-a2cf-7adeac39ad72";
  messages = {
    name: '',
    email: '',
    message: '',
  };

  async sendEmail(contactForm: NgForm) {
    let formData = new FormData();
    formData.append('name', this.messages.name);
    formData.append('email', this.messages.email);
    formData.append('message', this.messages.message);
    formData.append('access_key', this.access_key);
    formData.append('subject', 'Email Support From Your Site');
    formData.append('from_name', 'Contact Notification');
  
    try {
      const response = await this.mailService.sendEmail(formData);
      if (response.ok) {
        alert('Votre message a été envoyé avec succès!');
      } else {
        alert('Il y a eu un problème avec l\'envoi de votre message.');
      }
    } catch (error) {
      alert('Erreur réseau : Veuillez réessayer plus tard.');
    }
  }
  

}
