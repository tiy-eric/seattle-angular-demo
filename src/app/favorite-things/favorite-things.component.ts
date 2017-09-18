import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-things',
  templateUrl: './favorite-things.component.html',
  styleUrls: ['./favorite-things.component.css']
})
export class FavoriteThingsComponent implements OnInit {

  selectedThing: object;
  
  favoriteThings = [
    {id: 1, name: "ice cream"},
    {id: 2, name: "more ice cream"},
    {id: 3, name: "even more ice cream"},
    {id: 4, name: "infinity ice cream"},
    {id: 5, name: "children crying"},
    {id: 6, name: "living with Curtis"},
  ]

  constructor() { }

  ngOnInit() {
  }
  
  clickedThing(thingIClicked){
    this.selectedThing = thingIClicked;
  }

}
