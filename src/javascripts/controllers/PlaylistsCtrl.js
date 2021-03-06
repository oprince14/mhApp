// VIEW CONTROLLER
'use strict';

angular.module('mhApp')
  .controller('PlaylistsCtrl', function($scope) {
    const playlists = this;
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    $scope.playlistArray = [];
    playlists.createNewPlaylist = function(name) {
      var pushPlaylist = playlists.name;
      firebase.database().ref('users/' + uid + '/playlists').push(pushPlaylist);
    };
    playlists.removePlaylist = function(index) {
      $scope.playlistArray.splice(index, 1);
      console.log($scope.playlistArray);
    };
    playlists.updatePlaylist = (function() {
      var dbRef = firebase.database().ref('users/' + uid).child('playlists');
      dbRef.on('child_added', function(snap) {
        $scope.playlistArray.push(snap.val());
      });
      return user;
    })();

  });
