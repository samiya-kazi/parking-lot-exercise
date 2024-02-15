import { Component, OnInit } from '@angular/core';
import { IParkingLog } from './interfaces/parkingLog.interface';
import { ApiService } from './services/api/api.service';
import { SlotService } from './services/slot/slot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Parking Lot';

  occupiedLogs: IParkingLog[] = [];

  constructor (private api: ApiService, public slotService: SlotService) {}

  ngOnInit(): void {
    this.api.getAllOccupiedSlots().subscribe({
      next: (data) => this.occupiedLogs = data
    });
  }

  getLogForSlot(slot: string) {
    return this.occupiedLogs.find(log => log.slot === slot);
  }

  handleNewLog(log: IParkingLog) {
    this.occupiedLogs.push(log);
  }
}
