(function () {

  angular
    .module('RecipeApp')
    .component('recipe', {
      controller: 'RecipeController',
      templateUrl: 'app/recipe/recipe.html',
      bindings: {
        data: '<',
        onAddFavorite: '&',
        onRemoveFavorite: '&',
        isFavorite: '&'
      }
    });

})();
