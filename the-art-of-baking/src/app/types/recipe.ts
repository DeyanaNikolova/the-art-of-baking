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
    cookTime: string;
    servings: number;
    userName: User;
    _createdOn: Time;
    _ownerId: User
}