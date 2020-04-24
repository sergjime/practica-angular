import { Component, OnInit } from '@angular/core';
import { PushButtonService } from 'src/app/services/push-button.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-push-button',
    templateUrl: './push-button.component.html'
})

export class PushButtonComponent implements OnInit {

    push$: Observable<number>;

    constructor(private _pushButtonService: PushButtonService) { }

    ngOnInit() {
        this.push$ = this._pushButtonService.push$;
    }
}