import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { UserService } from 'src/app/user/user.service';


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {

  constructor(
    private recipeServise: RecipeService,
  //  private userService: UserService,
    private router: Router,
  ) { }

  addRecipeSubmitHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }
// this.userService.getUserDetails()
    console.log(form.value);
    const { recipeName, shortDescription, image, ingredients, instructions, prepTime, cookTime, servings } = form.value;
    this.recipeServise.addRecipe(recipeName, shortDescription, image, ingredients, instructions, prepTime, cookTime, servings).subscribe(() => {
     
      this.router.navigate(['/recipes']);
    });
  }

  clearForm(form: NgForm): void{
form.reset();
  }
}