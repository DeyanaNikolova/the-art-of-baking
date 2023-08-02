import { User } from "./user";

export interface Recipe{
    _id: string;
    recipeName: string;
    shortDescription: string;
    ingredients: string;
    description: string;
    prepTime: string;
    cookingTime: string;
    serving: number;
    userName: User;
    userId: User;
    createdAt: string;
    updatedAt: string;
}