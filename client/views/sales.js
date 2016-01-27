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

Template.sales.events({
  'submit .email-form': function (e) {
    e.preventDefault();
    var emailInput = $('input[type=text]').val();
    Meteor.call('sendEmail', 'david@bluefriendly.com', 'david@bluefriendly.com', 'New Email Submission', emailInput);
  }

})