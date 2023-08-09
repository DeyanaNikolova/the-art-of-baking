import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Recipe } from '../types/recipe';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private http: HttpClient) { }

  getRecipes() {
    const { apiUrl } = environment
    return this.http.get<Recipe[]>(`${apiUrl}/data/recipes`);
  }

  getRecipe(id: string){
    const { apiUrl } = environment
    return this.http.get<Recipe>(`${apiUrl}/data/recipes/${id}`)
  }

  addRecipe(recipeName: string, shortDescription: string, image: string,ingredients: string, instructions: string, prepTime: string, cookingTime: string, servings: number){
    const { apiUrl } = environment
    return this.http.post<Recipe>(`${apiUrl}/data/recipes`, {recipeName, shortDescription, image, ingredients, instructions, prepTime, cookingTime, servings});
  }
}
