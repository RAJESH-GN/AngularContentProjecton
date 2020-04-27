import { Component, DoCheck } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements DoCheck {
  ngDoCheck(): void {
    console.log(
      'From doCheck Parent value of the element passed to child for rendering'
    );
    console.log(this.sampleInput);
  }
  public conditionSatisfied = true;
  conditionSatisfied2 = false;
  sampleInput;
  templateInputType = true;

  Users: Array<User> = [
    { name: 'Rajesh', age: 27, company: 'Sample Company1', place: 'IND' },
    { name: 'Subbarao', age: 54, company: 'Railways', place: 'Europe' },
    { name: 'Raghu', age: 31, company: 'Sample Company2', place: 'America' },
  ];
}
