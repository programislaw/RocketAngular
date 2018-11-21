mainApp.controller('rocketController', function($scope, $http) {
            $scope.attendee = {
               nickName: "",
               score:0,
               

			   
			   full: function() {
                  var attendeeObject;
                  attendeeObject = $scope.attendee;
                  return attendeeObject.nickName + " " + attendeeObject.score;
               }
            };

				
			$scope.attendees = {
			    list:[
                  {nickName:'Adrian',score:22},
                  {nickName:'Lukasz',score:21},
                  {nickName:'Slawek',score:11}
               ],
			   
			   addAttendee: function(pNickName, pScore) {

				   var index = -1;
				   for(count = 0; count < $scope.attendees.list.length; count++){
					   if($scope.attendees.list[count].nickName == pNickName) {
						   index = count;
						   break;
					   }
					}
				   if (index >= 0) {
					   $scope.attendees.list[index].score = pScore;
				   } else {
					   $scope.attendees.list.push({nickName:pNickName,score:pScore});
				   }
				   $scope.greeting = "------";
				   			
					$http.get('http://localhost:8080/players').
						then(function(response) {
							$scope.greeting = response.data[0].nickName;
						});
				   
               }
			};
         });