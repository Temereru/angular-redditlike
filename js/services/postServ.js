app.factory('postServ', function(){
  var idCount = 2;

  var posts = [
    {
      id: 0,
      content: 'first',
      likes: 0,
      link: ''
    },
    {
      id: 1,
      content: 'second',
      likes: 5,
      link: 'http://www.google.com'
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
        link: link
      }
      posts.push(newPost);
      idCount++;
      return true;
    }
  }
})