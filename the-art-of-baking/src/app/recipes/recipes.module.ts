import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { RecipeRoutingModule } from './recipe-routing.module';



@NgModule({
  declarations: [
    AddRecipeComponent,
    RecipeDetailsComponent,
    AllRecipesComponent
  ],
  imports: [
    CommonModule, RecipeRoutingModule
  ]
})
export class RecipesModule { }
