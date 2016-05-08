app.controller('postCtrl', function postCtrl($scope, postServ){

  $scope.posts = postServ.getPosts();

  $scope.postInput = '';
  $scope.postLink = '';

  $scope.addLike = function(post){
    if(postServ.addLike(post.id)){
      post = postServ.getPost(post.id);
    }
  }

  $scope.addPost = function(){
    if(postServ.addPost($scope.postInput, $scope.postLink)){
      $scope.posts = postServ.getPosts();
      $scope.postInput = '';
      $scope.postLink = '';
    }
  }
});