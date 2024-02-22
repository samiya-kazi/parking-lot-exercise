import { Component, OnInit } from '@angular/core';
import { IParkingLog } from './interfaces/parkingLog.interface';
import { ApiService } from './services/api/api.service';
import { SlotService } from './services/slot/slot.service';
import { OccupiedLogsService } from './services/occupied-logs/occupied-logs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Parking Lot';
  selectedLog?: IParkingLog;

  constructor (private api: ApiService, public slotService: SlotService, private occupiedService: OccupiedLogsService) {}

  ngOnInit(): void {
    this.api.getAllOccupiedSlots().subscribe({
      next: (data) => this.occupiedService.occupiedLogs = data
    });
  }

  getLogForSlot(slot: string) {
    return this.occupiedService.occupiedLogs.find(log => log.slot === slot);
  }

  handleNewLog(log: IParkingLog) {
    this.occupiedService.occupiedLogs.push(log);
  }

  selectLog (log: IParkingLog) {
    this.selectedLog = log;
  }

  deselectLog () {
    this.selectedLog = undefined;
  }

  handleCheckout (log: IParkingLog) {
    this.occupiedService.occupiedLogs = this.occupiedService.occupiedLogs.filter(item => item._id !== log._id);
    this.deselectLog();
  }
}
