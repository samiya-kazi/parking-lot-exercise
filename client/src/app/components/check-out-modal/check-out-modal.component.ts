import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IParkingLog } from '../../interfaces/parkingLog.interface';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-check-out-modal',
  templateUrl: './check-out-modal.component.html',
  styleUrl: './check-out-modal.component.css'
})
export class CheckOutModalComponent implements OnInit {
  
  @Input() log!: IParkingLog;
  @Output() cancelCheckout = new EventEmitter();
  @Output() checkOutComplete = new EventEmitter<IParkingLog>();
  fee: number = 0

  constructor (private api: ApiService) {}

  ngOnInit(): void {
    this.calculateFee();
  }

  calculateFee () {
    const current = Date.now();
    const logTime = new Date(this.log.checkInTimestamp).getTime();

    const diff = current - logTime;
    const minDiff = diff / (1000 * 60);

    const minFee = 50;

    if (minDiff <= 60) this.fee = minFee;
    else {
      const extraHours = Math.floor((minDiff - 60) / 60);
      this.fee = minFee + (extraHours * 10);
    }
  }

  cancel () {
    this.cancelCheckout.emit();
  }

  handleCheckout () {
    this.api.markLogAsCheckedOut(this.log._id, this.fee).subscribe({
      next: (data) => {
        this.checkOutComplete.emit(data);
      }
    })
  }


}
