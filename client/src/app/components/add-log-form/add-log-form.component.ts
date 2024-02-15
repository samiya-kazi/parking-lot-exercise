import { Component, EventEmitter, Output } from '@angular/core';
import { SlotService } from '../../services/slot/slot.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api/api.service';
import { IParkingLog } from '../../interfaces/parkingLog.interface';

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
    private api: ApiService
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
    console.log(this.addLogForm.value);
  }

  parseSlotName (slot: string) {
    return slot.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
  }

  isButtonDisabled () {
    return !this.addLogForm.valid
  }

}
