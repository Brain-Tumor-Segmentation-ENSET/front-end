import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Test } from '../models/test';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getTest() {
    return this.http.get('https://localhost:5000/');
  }
  doTest(formData: FormData) {
    return this.http.post<any>('http://localhost:5000/upload', formData);
  }
}
