(function () {

  angular
    .module('RecipeApp')
    .config(config);

  function config($stateProvider, $locationProvider, $urlServiceProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html'
      }).state('recipes', {
        url: '/recipes',
        component: 'recipeList'
      }).state('favorites', {
        url: '/recipe-favorites',
        component: 'recipeFavorites'
      });

    $urlServiceProvider.rules.otherwise({ state: 'home' });
  }

})();
