(function () {

  angular
    .module('RecipeApp')
    .factory('RecipeService', RecipeService);

  function RecipeService() {
    return {
      message: 'Hello from the Recipe Service'
    };
  }

})();
