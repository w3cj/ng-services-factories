(function () {

  angular
    .module('RecipeApp')
    .factory('RecipeFactory', RecipeFactory);

  function RecipeFactory() {
    const favorites = [];

    return {
      getFavorites() {
        return favorites;
      },
      addFavorite(recipe) {
        favorites.push(recipe);
      },
      removeFavorite(recipe) {
        const index = favorites.indexOf(recipe);
        favorites.splice(index, 1);
      },
      isFavorite(recipe) {
        return favorites.some(favorite => favorite === recipe);
      }
    };
  }

})();
