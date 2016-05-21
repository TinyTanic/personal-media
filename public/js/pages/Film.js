"use strict";

var Film = React.createClass({
   displayName: "Film",
   getInitialState: function getInitialState() {
      return {};
   },
   render: function render() {
      return React.createElement(
         "div",
         { className: "film-page" },
         'ciao'
      );
   }
});