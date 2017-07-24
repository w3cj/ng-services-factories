(function () {

  angular
    .module('RecipeApp')
    .controller('RecipeFavoritesController', RecipeFavoritesController);

  function RecipeFavoritesController(RecipeService) {
    const vm = this;

    vm.service = RecipeService;
  }

})();
