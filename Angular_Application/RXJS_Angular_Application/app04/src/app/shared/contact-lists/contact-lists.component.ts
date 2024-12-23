import { Component } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactsService } from '../../services/contacts.service';
import { RouterLink } from '@angular/router';
import { MessageBoxComponent } from '../message-box/message-box.component';

@Component({
  selector: 'app-contact-lists',
  standalone: true,
  imports: [ RouterLink, MessageBoxComponent],
  templateUrl: './contact-lists.component.html',
  styleUrl: './contact-lists.component.css'
})
export class ContactListsComponent {

  contacts!:Contact[];
  erorMssg!:string;

  constructor(private contactService: ContactsService){
    // this.contacts=this.contactService.getAll();

  }
  ngOnInit(){
    this.loadData();
  }

  loadData(){
    this.contactService.getAll().subscribe({
      next: data => this.contacts=data,
      error: err => {console.error(err); this.erorMssg="Unable to load Data! Please try later!"}
    })
  }
  // deleteContact(id: number){
  //   this.contactService.deleteById(id);
  //   this.contacts=this.contactService.getAll();
  // }
  delete(id:number){
    this.contactService.deleteById(id).subscribe({
      next: data => this.loadData(),
      error: err => {console.error(err); this.erorMssg="Unable to remove the record! Please try later!"}
    })
  }
}
