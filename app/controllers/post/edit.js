import Ember from "ember";

export default Ember.ObjectController.extend({
  actions: {
    editPosts: function(post){
      var title = this.get('title');

      var body = this.get('body');

      post.set('title', title);
      post.set('body', body);
      post.save().then(function(){
        this.transitionToRoute('posts');
      }.bind(this));
    },

  deletePosts: function(post){
    post.destroyRecord();
    this.transitionToRoute('posts');
  },

  }
});
