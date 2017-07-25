(function () {

  angular
    .module('RecipeApp')
    .controller('RecipeController', RecipeController);

  function RecipeController() {
    const vm = this;

    vm.addFavorite = function(recipe) {
      vm.onAddFavorite(recipe);
    }

    vm.removeFavorite = function(recipe) {
      vm.onRemoveFavorite(recipe);
    }
  }
})();
