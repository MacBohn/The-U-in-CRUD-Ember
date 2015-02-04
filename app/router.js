import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('posts', { path: '/'}, function() {
    this.route('new');
  this.resource('post', { path: '/:post_id'}, function() {
    this.route('edit', {path: '/edit'});
    });
  });
});

// /posts
// /posts/new
// /post/:post_id
// /post/1/edit

export default Router;
