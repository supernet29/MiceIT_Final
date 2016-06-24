console.log("app.js");

// memo container.
var $memo = $("#memo");

// menu buttons.
var $buttons = $(".menu > button");

var btn_new = $buttons[0];
var btn_save = $buttons[1];
var btn_about = $buttons[2];
var btn_maximize = $buttons[3];

// about window.
var $about = $(".about");
var btn_close = $(".btn_close")[0];

// full screen.
function fullScreen(element) 
{
	try
	{
		element.requestFullScreen();
	}
	catch (e)
	{
		try
		{
			element.webkitRequestFullScreen();
		}
		catch (l)
		{
			element.mozRequestFullScreen();
		}
	}
}

// event listener.
$(
	function()
	{
		var memo = localStorage.getItem("memo");
		$memo.val(memo);
	}
 );

btn_new.addEventListener("click",
	function()
	{
		$memo.val("");
	}
);

btn_save.addEventListener("click",
	function()
	{
		var memo = $memo.val();
		localStorage.setItem("memo", memo);
	}
);

btn_about.addEventListener("click",
	function() 
	{
		$about.show();
	}
);

btn_maximize.addEventListener("click",
	function()
	{
		fullScreen(document.body);
	}
);

btn_close.addEventListener("click",
	function()
	{
		$about.hide();
	}
);
