import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/types/recipe';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  recipe!: Recipe;

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.fetchRecipe();
  }
  fetchRecipe(): void {
    const id = this.activatedRoute.snapshot.params['recipeId'];
    this.recipeService.getRecipe(id).subscribe((recipe) => {  
      this.recipe = recipe;
    
    // console.log({ recipe });
    });
  }
}
