import { Time } from "@angular/common";
import { User } from "./user";

export interface Recipe{
    _id: string;
    recipeName: string;
    shortDescription: string;
    imageUrl: URL;
    ingredients: string;
    instructions: string;
    prepTime: string;
    cookingTime: string;
    servings: number;
    userName: User;
    userId: User;
    _createdOn: Time;
    updatedAt: string;
}