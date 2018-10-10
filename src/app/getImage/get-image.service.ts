import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetImageService {

  private imageUrl = 'https://pixabay.com/api/?key=9790155-f60ce239d82231d53d42a71ad&lang=es&per_page=20'

  constructor(private http: HttpClient) { }

  getImage(): Observable<any> {
    return this.http.get<any>(this.imageUrl)
  }


}
