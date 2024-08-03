var app = angular.module('ratingApp', []);

app.controller('RatingController', function($scope) {
    $scope.submitRating = function() {
        // Perform actions to submit ratings (e.g., send to server)
        var ratings = {
            design: $scope.designRating,
            navigation: $scope.navigationRating,
            clothes: $scope.clothesRating
        };

        // Calculate the overall average rating
        $scope.overallRating = calculateOverallRating(ratings);

        console.log("Submitted Ratings:", ratings);
        console.log("Overall Rating:", $scope.overallRating);

        // Reset ratings after submission (optional)
        $scope.designRating = null;
        $scope.navigationRating = null;
        $scope.clothesRating = null;
    };

    // Function to calculate the overall average rating
    function calculateOverallRating(ratings) {
        var total = 0;
        var count = 0;
        for (var key in ratings) {
            if (ratings.hasOwnProperty(key) && !isNaN(ratings[key])) {
                total += parseFloat(ratings[key]);
                count++;
            }
        }
        return count > 0 ? (total / count).toFixed(1) : null;
    }
});
