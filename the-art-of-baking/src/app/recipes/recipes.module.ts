import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddRecipeComponent,
    RecipeDetailsComponent,
    AllRecipesComponent
  ],
  imports: [
    CommonModule, 
    RecipeRoutingModule,
    RouterModule
  ]
})
export class RecipesModule { }
