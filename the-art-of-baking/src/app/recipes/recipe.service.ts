import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipe } from '../types/recipe';
import { environment } from 'src/environments/environment.development';
import { UserService } from '../user/user.service';


@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient, private userService: UserService) {}

  getRecipes() {
    const { apiUrl } = environment;
    return this.http.get<Recipe[]>(`${apiUrl}/data/recipes`);
  }

  getRecipe(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Recipe>(`${apiUrl}/data/recipes/${id}`);
  }

  addRecipe(
    recipeName: string,
    shortDescription: string,
    imageUrl: URL,
    ingredients: string,
    instructions: string,
    prepTime: string,
    cookTime: string,
    servings: number
  ) {
    const { apiUrl } = environment;
    
    const recipe = {
      recipeName,
      shortDescription,
      imageUrl,
      ingredients,
      instructions,
      prepTime,
      cookTime,
      servings,
    };
    
    const options = this.userService.authHeaders()
    return this.http.post<Recipe>(`${apiUrl}/data/recipes`,  recipe, options);
  }
}
