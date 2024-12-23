import { HttpClient } from '@angular/common/http';
import { Contact } from './../models/contact';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
// import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor( private httpClient:HttpClient){
  }

  getAll(): Observable<Contact[]>{
      return this.httpClient.get<Contact[]>(environment.apiUrl);
  }

  getAById(id: number): Observable<Contact>{
    return this.httpClient.get<Contact>(environment.apiUrl+ "/" + id);
}

  deleteById(id: number): Observable<void>{
  return this.httpClient.delete<void>(environment.apiUrl+ "/" + id);
}

  add(contact: Contact): Observable<Contact>{
  return this.httpClient.post<Contact>(environment.apiUrl, contact);
}

  update(contact: Contact): Observable<Contact>{
    return  this.httpClient.put<Contact>(environment.apiUrl+ "/" + contact.id, contact);
  }

}
