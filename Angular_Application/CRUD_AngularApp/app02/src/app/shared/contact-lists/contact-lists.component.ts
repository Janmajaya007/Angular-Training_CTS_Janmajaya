import { Component } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactsService } from '../../services/contacts.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-lists',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './contact-lists.component.html',
  styleUrl: './contact-lists.component.css'
})
export class ContactListsComponent {

  contacts:Contact[];

  constructor(private contactService: ContactsService){
    this.contacts=this.contactService.getAll();

  }

  deleteContact(id: number){
    this.contactService.deleteById(id);
    this.contacts=this.contactService.getAll();
  }
}
