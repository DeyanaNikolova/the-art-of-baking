import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/types/recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {

recipes: Recipe[] = [];

constructor(private recipeService: RecipeService){ }

ngOnInit(): void {
  this.recipeService.getRecipes().subscribe({
    next: (recipes)=>{
      this.recipes = recipes;
      console.log(this.recipes);
    },
    error: (err: any)=> {
      console.error(`Error: ${err}`);
      
    }
  });
}

}
