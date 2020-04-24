import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html'
})
export class ParameterComponent implements OnInit, OnDestroy {

  parameter: any;
  subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(param => {
      this.parameter = param['parameter'];
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
