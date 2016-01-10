Template.landings.onRendered( function () {


})

Template.landings.helpers({
  homeChecked: function() {
    return true;
  },
  loansChecked: function() {
    return false;
  },
  aboutChecked: function() {
    return false;
  }
});

// function bottomNav() {
//   $("#footer-home").css("background", "black");
//   $("#footer-loans").css("background", "#3a4349");
//   $("#footer-about").css("background", "#3a4349");
// }

// function hoverBtmNav () {
//   $("#footer-loans").mouseover(function(){
//     $(this).css("background", "#517fa4");
//     $("#footer-home").css("background", "black");
//   }).mouseout(function(){
//     $(this).css("background", "#3a4349");
//     $("#footer-home").css("background", "black");
//   });

//   $("#footer-about").mouseover(function(){
//     $(this).css("background", "#517fa4");
//     $("#footer-home").css("background", "black");
//   }).mouseout(function(){
//     $(this).css("background", "#3a4349");
//     $("#footer-home").css("background", "black");
//   });
// }