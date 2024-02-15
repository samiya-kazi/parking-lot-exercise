import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IParkingLog } from '../../interfaces/parkingLog.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  root: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllOccupiedSlots () {
    return this.http.get<IParkingLog[]>(this.root + '/logs/occupied');
  }

  getAllLogs () {
    return this.http.get<IParkingLog[]>(this.root + '/logs/all');
  }

  postNewLog (data: { license: string, slot: string }) {
    return this.http.post<IParkingLog>(this.root + '/logs/new', data);
  }

  markLogAsCheckedOut (id: string, fee: number) {
    return this.http.post<IParkingLog>(this.root + '/logs/check-out/' + id, { fee });
  }
}
