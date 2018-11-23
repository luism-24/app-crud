import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, throwError } from 'rxjs';
import { Message } from '../models/message';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class MessageService {

  constructor(private http: HttpClient) { }
  private formatErrors(error: any){
    return throwError(error.error); 
  }

  getAll(): Observable<Message[]>{
    return this.http.get<Message[]>(
      `${environment.api_url}/message`
      ).pipe(catchError(this.formatErrors))
  }

  getByID(id): Observable<Message> {
    return this.http.get<Message>(
      `${environment.api_url}/message${id}`
      ).pipe(catchError(this.formatErrors))
  }
  
  destroy(id: string):Observable<any> {
    return this.http.delete(
      `${environment.api_url}/message/${id}`
    ).pipe(catchError(this.formatErrors));
  }

  // save(message): Observable<Message> {

  //   if (message.id) {
  //     return this.apiService.put('/message/' + message.id, { message: message })
  //       .pipe(map(data => data.message))
  //   } else {
  //     return this.apiService.post('/message', { message: message })
  //       .pipe(map(data => data.message))
  //   }
  // }

}
