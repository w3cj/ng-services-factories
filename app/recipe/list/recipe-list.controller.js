(function () {

  angular
    .module('RecipeApp')
    .controller('RecipeListController', RecipeListController);

  function RecipeListController(RecipeService, $http) {
    const vm = this;

    vm.service = RecipeService;
    vm.updateMessage = updateMessage;

    $http.get('https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q=cheese')
      .then(result => {
        console.log(result);
        vm.recipes = result.data.results
      });

    function updateMessage() {
      vm.service.message = vm.message;
    }
  }

})();
