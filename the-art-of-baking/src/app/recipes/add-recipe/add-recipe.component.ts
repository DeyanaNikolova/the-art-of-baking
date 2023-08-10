import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {

  constructor(
    private recipeServise: RecipeService,
    private router: Router,
  ) { }

  addRecipeSubmitHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const { recipeName, shortDescription, image, ingredients, instructions, prepTime, cookingTime, servings } = form.value;
    this.recipeServise.addRecipe(recipeName, shortDescription, image, ingredients, instructions, prepTime, cookingTime, servings).subscribe(() => {
     
      this.router.navigate(['/recipes']);
    });
  }
}