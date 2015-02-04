import Ember from 'ember'

export default Ember.ObjectController.extend({
  actions: {
    createPosts: function(){
     var post = this.store.createRecord('post',{
       title: this.get('title'),
       body: this.get('body')
     });
       post.save().then(function () {
         this.transitionToRoute('posts');
       }.bind(this));
    }
  }
});
