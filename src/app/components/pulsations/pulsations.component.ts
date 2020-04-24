import { Component, OnInit } from '@angular/core';
import { PushButtonService } from 'src/app/services/push-button.service';

@Component({
  selector: 'app-pulsations',
  templateUrl: './pulsations.component.html'
})
export class PulsationsComponent implements OnInit {

  private pulsation: number = 0;

  constructor(private _pushButtonService: PushButtonService) { }

  ngOnInit() {
  }

  addPulsation() {
    this.pulsation = this.pulsation + 1;
    this._pushButtonService.push(this.pulsation);
  }
}
