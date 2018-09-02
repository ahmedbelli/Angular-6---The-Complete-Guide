import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Eleven Madison Park', 'Lamb dish from Eleven Madison Park', 'https://www.theworlds50best.com/filestore/jpg/ELEVENMADISONPARK_WORLD_2017_DISH2.jpg'),
    new Recipe('Oysters and Pearls', 'Oysters and Caviar from The French Laundry', 'https://static1.squarespace.com/static/530e4e29e4b0ac922f793833/t/554cde72e4b07a0a5e9d8c14/1431101043118/')
  ];

  constructor() { }

  ngOnInit() {
  }

}
