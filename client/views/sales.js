Template.sales.onRendered( function() {

});

Template.sales.helpers({
  homeChecked: function() {
    return false;
  },
  loansChecked: function() {
    return true;
  },
  aboutChecked: function() {
    return false;
  }
});