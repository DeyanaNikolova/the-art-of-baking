import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';


const routes: Routes = [
    {
        path: 'recipes',
        children: [
            {
                path: 'recipes',
                component: AllRecipesComponent
            },
            {
                path: ':recipeId',
                component: RecipeDetailsComponent
            }
        ]
    },
    {
        path: 'add-recipe',
        component: AddRecipeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipeRoutingModule { }
