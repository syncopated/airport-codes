var Backbone = require('backbone');
var markdown = require('markdown').markdown;

var Airport = Backbone.Model.extend({

  defaults: {
    code: 'aaa',
    name: 'Default Airport',
    city: 'City',
    state: 'State',
    country: 'Country',
    description: 'Description',
    imageCredit: 'Photographer',
    visible: true
  },

  initialize: function(options) {
    var md = markdown.toHTML(options.description);
    this.set('description', md);
  }

});

module.exports = Airport;