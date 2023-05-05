import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType, HttpEvent,HttpResponse } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Record } from './record'
@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http: HttpClient) { }

  private recordUrl = 'http://localhost:8080/records';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };


  getRecords(): Observable<Record[]> {

    return this.http.get<Record[]>(this.recordUrl);

  }

  getRecord(userId: number, recordId: number): Observable<Record> {
    return this.http.get<Record>(`${this.recordUrl}/${userId}/${recordId}`);

  }


  updateRecord(record: Record = {} as Record): Observable<any> {
    return this.http.put<Record>(`${this.recordUrl}/${record.id}`, record, this.httpOptions);
  }


}
