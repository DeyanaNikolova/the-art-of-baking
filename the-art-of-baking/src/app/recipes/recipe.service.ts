import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Recipe } from '../types/recipe';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }
  getRecipes() {
    return this.http.get<Recipe[]>('http//localhost:3000/recipes');
  }
}
