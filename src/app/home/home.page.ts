import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  recipes : any;

  constructor() {}

  ngOnInit() {
    fetch('./assets/json/recipe.json').then(res => res.json()).then(json => {
      this.recipes = json;
    })
  }

}
