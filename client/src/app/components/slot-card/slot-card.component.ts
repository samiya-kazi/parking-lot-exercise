import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IParkingLog } from '../../interfaces/parkingLog.interface';

@Component({
  selector: 'app-slot-card',
  templateUrl: './slot-card.component.html',
  styleUrl: './slot-card.component.css'
})
export class SlotCardComponent {
  @Input() slot!: string;
  @Input() log?: IParkingLog;
  @Output() checkOutOpen = new EventEmitter<IParkingLog>()

  parseSlotName (slot: string) {
    return slot.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
  }

  openCheckOut() {
    this.checkOutOpen.emit(this.log!);
  }
}
