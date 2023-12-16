import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'Simply a Test',
      'https://www.allrecipes.com/thmb/afptgOwO8Zda4J922mgGURnV930=/771x514/filters:no_upscale():max_bytes(150000):strip_icc():focal(399x0:401x2):format(webp)/83557-juicy-roast-chicken-mfs495-1-3d0f1e3e54104d43b24d4b480d2839ba.jpg'
    ),
    new Recipe(
      'A Test Recipe 2',
      'Simply a Test 2',
      'https://www.allrecipes.com/thmb/afptgOwO8Zda4J922mgGURnV930=/771x514/filters:no_upscale():max_bytes(150000):strip_icc():focal(399x0:401x2):format(webp)/83557-juicy-roast-chicken-mfs495-1-3d0f1e3e54104d43b24d4b480d2839ba.jpg'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
   }
}
