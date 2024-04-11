import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  recipes:any=[];
  constructor(private _AuthService: AuthService) { 
    this.getRecipes();
  }

  getRecipes() {
    return this._AuthService.getRecipes().subscribe({
      next:(response) => {
        this.recipes=response.meals;
        console.log(response.meals);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
