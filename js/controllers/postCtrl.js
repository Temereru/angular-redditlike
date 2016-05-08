app.controller('postCtrl', function postCtrl($scope, postServ, $location){

  $scope.posts = postServ.getPosts();

  $scope.postInput = {
    content: '',
    Link: ''
  }
  $scope.commentInput = {
    content: '',
    commentor: ''
  }

  $scope.addLike = function(post){
    if(postServ.addLike(post.id)){
      post = postServ.getPost(post.id);
    }
  };

  $scope.addPost = function(){
    if(postServ.addPost($scope.postInput.content, $scope.postInput.link)){
      $scope.posts = postServ.getPosts();
      $scope.postInput.content = '';
      $scope.postInput.link = '';
    }
  };

  $scope.setCurrentPost = function(post){
    $scope.currentPost = post;
    $location.url('/post');
  };

  $scope.addCommentLike = function(idx){
    $scope.currentPost = postServ.addCommentLike($scope.currentPost.id, idx);
  };

  $scope.addComment = function(){
    $scope.currentPost = postServ.addComment($scope.currentPost.id, $scope.commentInput.commentor, $scope.commentInput.content);
    $scope.commentInput.content = '';
    $scope.commentInput.commentor = '';
  };
});