app.factory('postServ', function(){
  var idCount = 2;

  var posts = [
    {
      id: 0,
      content: 'first',
      likes: 0,
      link: '',
      comments: [
        {
          content: 'hello',
          commentor: 'tomer',
          likes: 1
        }
      ]
    },
    {
      id: 1,
      content: 'second',
      likes: 5,
      link: 'http://www.google.com',
      comments: []
    }
  ];

  return {
    getPosts: function(){
      return posts;
    },

    getPost: function(id){
      for(var i = 0; i < posts.length; i++){
        if(posts[i].id === id){
          return posts[i];
        }
      }
    },

    addLike: function(id){
      var success = false;
      for(var i = 0; i < posts.length; i++){
        if(posts[i].id === id){
          posts[i].likes++;
          success = true;
          break;
        }
      }
      return success;
    },

    addPost: function(content, link){
      var newPost = {
        id: idCount,
        content: content,
        likes: 0,
        link: link,
        comments: []
      }
      posts.push(newPost);
      idCount++;
      return true;
    },

    addCommentLike: function(id, idx){
      for(var i = 0; i < posts.length; i++){
        if(posts[i].id === id){
          posts[i].comments[idx].likes++;
          return posts[i];
        }
      }
    },

    addComment: function(id, commentor, content){
      console.log(commentor);
      var newComment = {
        content: content,
        commentor: commentor,
        likes: 0
      }
      for(var i = 0; i < posts.length; i++){
        if(posts[i].id === id){
          posts[i].comments.push(newComment)
          return posts[i];
        }
      }
    }
  }
})