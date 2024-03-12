import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'shoppingList', loadChildren: () => import('./modules/shopping-list/shopping-list.module').then(m => m.ShoppingListModule) },
  // You can use async/await syntax to lazy load a module as well:
  { path: 'recipes', loadChildren: async () => {
    const m = await import('./modules/recipes/recipes.module')
    return m.RecipesModule
  }}
];

@NgModule({
  /* The `preloadingStrategy: PreloadAllModules` option to RouterModule.forRoot() is
   * an optimization regading lazy-loaded modules as now, we'll keep the initial bundle
   * of our app reduced in size, but as soon as this loads, all other lazy-loaded
   * modules will be preloaded, thus when the user need to access that, there will be
   * no delay regarding the lazy-loaded module */
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
