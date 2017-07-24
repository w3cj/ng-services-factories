(function () {

  angular
    .module('RecipeApp')
    .service('RecipeService', RecipeService);

  function RecipeService() {
    const favorites = [];

    this.getFavorites = function() {
      return favorites;
    }

    this.addFavorite = function(recipe) {
      favorites.push(recipe);
    }

    this.removeFavorite = function(recipe) {
      const index = favorites.indexOf(recipe);
      favorites.splice(index, 1);
    }

    this.isFavorite = function(recipe) {
      return favorites.some(favorite => favorite === recipe);
    }
  }

})();
