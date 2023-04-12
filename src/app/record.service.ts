import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Record} from './record'
@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http: HttpClient) { }

  private recordUrl = 'http://localhost:8080/records';


  getRecords():Observable<Record[]>{

    return this.http.get<Record[]>(this.recordUrl);

  }

  getRecord(userId:number, recordId:number):Observable<Record>{
  return  this.http.get<Record>(`${this.recordUrl}/${userId}/${recordId}`);



  }

}
