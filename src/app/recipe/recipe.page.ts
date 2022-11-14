import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  id: any;
  recipes: any;
  item: Object;

  constructor(
    private activatedroute: ActivatedRoute
  ) { }
  
  
  ngOnInit() {
    this.id = this.activatedroute.snapshot.paramMap.get("id");  

    fetch('./assets/json/recipe.json').then(res => res.json()).then(json => {
      this.recipes = json;
      this.item = this.recipes.find(item => item.id == this.id);
    })  
  }

}
