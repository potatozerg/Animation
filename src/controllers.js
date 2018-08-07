const app = angular.module('mainApp', []);

app.controller('mainCtrl', ['$scope', '$timeout', function($scope, $timeout){

  $scope.questions = [
    'For decades, Mr. Gates was right-hand man to Mr. Manafort, the former Trump campaign chairman who is accused of tax and bank fraud. He began testifying in federal court on Monday.',
    'Asked by prosecutors whether he was involved in any criminal activity with Mr. Manafort, Mr. Gates responded, Yes',
    'The move to reimpose sanctions that had been lifted under the 2015 nuclear accord that the Trump administration abandoned will increase pressure on Iran and deepen a divide with Europe.',
    'An Ohio congressional special election has revealed the plan Republicans intend to employ nationwide to defend their hold on the House.',
  ];

  $scope.solved = [];

  $scope.submit = () => {

    $scope.anim = 'animation';
    $timeout(() => {
      $scope.solved.unshift($scope.questions.shift());
      $scope.anim = '';
    }, 500);
  };

}]);
