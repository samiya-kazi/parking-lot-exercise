import { Injectable } from '@angular/core';
import { IParkingLog } from '../../interfaces/parkingLog.interface';

@Injectable({
  providedIn: 'root'
})
export class OccupiedLogsService {

  constructor() { }

  occupiedLogs: IParkingLog[] = [];
}
