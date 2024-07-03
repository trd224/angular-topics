import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  width: any;
  subscription!: Subscription;

  ngOnInit(): void {
    
    this.subscription = interval(100).subscribe(res => {
      //console.log(res);
      this.width = res;
      if(this.width == 100){
        this.subscription.unsubscribe();
      }
    })
  }

}
