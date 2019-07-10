$(window).scroll(function()
{
	if($(window).scrollTop()>200)
	{
		$("button").fadeIn();
	}
	else
	{
		$("button").fadeOut();
	}
});

$("button").click(function()
{
	$("html").animate({scrollTop:0},2000)
});