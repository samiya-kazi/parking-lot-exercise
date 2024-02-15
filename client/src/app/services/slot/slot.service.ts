import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlotService {

  constructor() { }

  slots: string[] = [
    'slot-1',
    'slot-2',
    'slot-3',
    'slot-4',
    'slot-5',
    'slot-6',
    'slot-7',
    'slot-8',
    'slot-9',
    'slot-10',
  ]
}
