import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Grilled Chicken',
      'How to make this delicious Grilled Chicken',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
    new Recipe(
      'Slow Cooker Honey Ribs',
      'How to make this delicious Slow Cooker Honey Ribs',
      'https://static01.nyt.com/images/2019/09/18/dining/sd-slow-cooker-hot-honey-ribs/sd-slow-cooker-hot-honey-ribs-articleLarge.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
