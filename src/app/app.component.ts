import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'app';

  selectedThing: object;

  favoriteThings = [
    {id: 1, name: "ice cream"},
    {id: 2, name: "more ice cream"},
    {id: 3, name: "even more ice cream"},
    {id: 4, name: "infinity ice cream"},
    {id: 5, name: "children crying"},
    {id: 6, name: "living with Curtis"},
  ]

  clickedThing(thingIClicked){
    this.selectedThing = thingIClicked;
  }

}
