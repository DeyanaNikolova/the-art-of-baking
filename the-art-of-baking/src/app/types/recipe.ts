import { User } from "./user";

export interface Recipe{
    _id: string;
    recipeName: string;
    shortDescription: string;
    ingredients: string;
    instructions: string;
    prepTime: string;
    cookingTime: string;
    servings: number;
    userName: User;
    userId: User;
    createdAt: string;
    updatedAt: string;
}