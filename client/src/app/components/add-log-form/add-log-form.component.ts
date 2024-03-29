import { Component, EventEmitter, Output } from '@angular/core';
import { SlotService } from '../../services/slot/slot.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api/api.service';
import { IParkingLog } from '../../interfaces/parkingLog.interface';
import { OccupiedLogsService } from '../../services/occupied-logs/occupied-logs.service';

@Component({
  selector: 'app-add-log-form',
  templateUrl: './add-log-form.component.html',
  styleUrl: './add-log-form.component.css'
})
export class AddLogFormComponent {

  @Output() newLog = new EventEmitter<IParkingLog>();

  error: string = '';

  addLogForm = this.fb.group({
    license: new FormControl('', [Validators.required, Validators.minLength(5)]),
    slot: new FormControl('', [Validators.required, Validators.minLength(5)]),
  })

  constructor(
    public slotService: SlotService, 
    private fb: FormBuilder,
    private api: ApiService,
    private occupiedService: OccupiedLogsService
  ) {}

  handleSubmit () {
    if (this.addLogForm.valid) {
      const license = this.addLogForm.value.license!;
      const slot = this.addLogForm.value.slot!;

      this.api.postNewLog({ license, slot }).subscribe({
        next: (data) => {
          this.newLog.emit(data);
          this.addLogForm.reset();
        },
        error: (err) => {
          this.error = err.error.error;
          setTimeout(() => this.error = '', 4000);
        }
      })
    }
  }

  parseSlotName (slot: string) {
    return slot.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
  }

  isButtonDisabled () {
    return !this.addLogForm.valid
  }

  get license () {
    return this.addLogForm.controls.license
  }

  get slot () {
    return this.addLogForm.controls.slot
  }

  isSlotOccupied(slot: string) {
    return !!this.occupiedService.occupiedLogs.find(log => log.slot === slot);
  }
}
