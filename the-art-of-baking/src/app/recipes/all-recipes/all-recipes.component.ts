import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/types/recipe';
import { RecipeService } from '../recipe.service';
import { UserService } from 'src/app/user/user.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {

  recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService, private userService: UserService) { 
   
  }
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
   return this.recipeService.getRecipes().subscribe({
      next: (recipes) => {
        this.recipes = recipes;
        console.log(this.recipes);
      },
      error: (err: any) => {
        console.error(`Error: ${err}`);
      }
    });
  }
}
