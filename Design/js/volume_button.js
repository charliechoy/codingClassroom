
//index.php: volume button on off 
$('.player').click(function () {
	var offed=$(this).find('i').hasClass('fa-volume-off');
	$('.player').find('i').removeClass('fa-volume-up');

	$('.player').find('i').addClass('fa-volume-off');

	if(offed)
	{	
    	$(this).find('i').toggleClass('fa-volume-off fa-3x fa-volume-up fa-3x');
    	document.getElementById('background_audio').src = "Design/bgm/village10.ogg";
    }
	else
	{
		document.getElementById('background_audio').src = " ";
		document.getElementById('background_audio').src = " ";
	}
});

