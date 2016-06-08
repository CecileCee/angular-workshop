app.controller('MainCtrl', ['$scope', function($scope) {
  $scope.services = [
    {
      'name': "Web Development",
      'price': 300,
      'active': true
    },{
      'name': "Design",
      'price': 400,
      'active': false
    },{
      'name': "Integration",
      'price': 250,
      'active': false
    },{
      'name': "Formation",
      'price': 200,
      'active': false
    }
  ];
  $scope.nbServices = 1;
  $scope.toggleActive = function(service) {
    service.active = !service.active;       // au clic : variable devra tjs valoir le contraire de sa valeur initiale qui était soit true, soit false.

    if (service.active === true) {          // incrémente les var nbServices et total pour l'affichage
      $scope.nbServices++;
      $scope.total += service.price;
    } else if (service.active === false) {
      $scope.nbServices--;
      $scope.total -= service.price;
    }
  };
  $scope.total = 300;
}]);
