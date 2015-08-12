Soundbolt.Models.Track = Backbone.Model.extend({
  urlRoot: '/api/tracks',

  comments: function(){
    if(!this._comments){
      this._comments = new Soundbolt.Collections.Comments({ track: this });
    }
    return this._comments;
  },

  parse: function(response){
    if(response.comments){
      this.comments().set(response.comments);
      delete response.comments;
    }
    return resposne;
  }
})
