Router.configure({
  layoutTemplate: 'main'
})

Router.route('/', function () {
  this.render('landings');
});

Router.route('/loans', function () {
  this.render('sales');
});

Router.route('/about', function () {
  this.render('abouts');
});

Router.route('/blog', function () {
  this.render('blogs');
});