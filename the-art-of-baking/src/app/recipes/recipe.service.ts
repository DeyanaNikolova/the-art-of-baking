import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Recipe } from '../types/recipe';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

apiUrl = environment;

  constructor(private http: HttpClient) { }

  getRecipes() {
    return this.http.get<Recipe[]>(`${this.apiUrl}/recipes`);
  }
}
