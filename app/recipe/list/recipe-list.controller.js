(function () {

  angular
    .module('RecipeApp')
    .controller('RecipeListController', RecipeListController);

  function RecipeListController(RecipeService, $http) {
    const vm = this;

    vm.addFavorite = addFavorite;
    vm.removeFavorite = removeFavorite;
    vm.service = RecipeService;

    $http.get('https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q=cheese')
      .then(result => {
        console.log(result);
        vm.recipes = result.data.results
      });

    function addFavorite(favorite) {
      RecipeService.addFavorite(favorite);
    }

    function removeFavorite(favorite) {
      RecipeService.removeFavorite(favorite);
    }

  }

})();
