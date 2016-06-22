console.log('my-note app.js');
console.log('woochan start');

var btn_new = $('.btn-newnote');
var btn_save = $('.btn-savenote');
var btn_about = $('.btn-about');
var btn_maximize = $('.btn-maximize');
var btn_close = $('.btn_close');

var div_about = $('.about');

btn_close.on ('click', function() {
	console.log('click : ' + this.text);
	div_about.show();
});

