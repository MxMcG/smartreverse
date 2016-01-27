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
    var emailAddress = $('input[name=email]').val();
    var emailMessage = $('input[name=message]').val();
    Meteor.call('sendEmail', 'dmcgee@c2financialcorp.com', 'dmcgee@c2financialcorp.com', 'New Email Submission', 'From: ' + emailAddress + ' Message: ' + emailMessage );
  }
})