import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    AddRecipeComponent,
    RecipeDetailsComponent,
    AllRecipesComponent
  ],
  imports: [
    CommonModule, 
    RecipeRoutingModule,
    FormsModule,
    CoreModule
  ]
})
export class RecipesModule { }
