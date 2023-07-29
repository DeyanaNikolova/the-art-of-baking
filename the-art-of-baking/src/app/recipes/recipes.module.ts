import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';



@NgModule({
  declarations: [
    AddRecipeComponent,
    RecipeDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AddRecipeComponent]
})
export class RecipesModule { }
