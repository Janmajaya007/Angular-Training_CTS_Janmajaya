import { Contact } from './../models/contact';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contacts:Contact[];
  private nextId: number;
  constructor() {
    this.contacts=[
      {id:1, fullName:"Raghu Shrivastab",mobile:"9958963478",emailId:"raghu@gmail.com"},
      {id:2, fullName:"Shyam Natrajan",mobile:"9865321476",emailId:"shyam@gmail.com"},
      {id:3, fullName:"Ritu Poonawala",mobile:"8965332175",emailId:"ritu@gmail.com"},
      {id:4, fullName:"Sourav Garg",mobile:"9874512360",emailId:"sourav@gmail.com"}
    ];
    this.nextId=4;
   }

   getAll():Contact[]{
    return[...this.contacts];
   }

   getById(id:number): Contact | undefined{
    return this.contacts.find(c =>c.id===id)
   }

   add(c:Contact){
    c.id=++this.nextId;
    this.contacts.push(c);
   }

   update(contact : Contact){
      let index = this.contacts.findIndex(c => c.id === contact.id);

      if(index>-1){
        this.contacts[index]=contact;
      }
   }

   deleteById(id: number){
      let index =this.contacts.findIndex(c => c.id===id);
      if(index >-1){
        this.contacts.splice(index, 1);
      }
   }
}
