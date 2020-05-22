var flags = true;
if(flags === true)
{
	var CHECK_LOG =true;
	var SECOND_DELAY =true;
}

var secHistory;

function setup()
{
	createCanvas(900,300);
	font = loadFont('assets/Monoton-Regular.ttf');
  	font2 = loadFont('assets/SourceSansPro-Regular.ttf');
}

function draw()
{
	background(51);

	let hr = hour();
	let min = minute();
	let sec = second();
	if(CHECK_LOG && SECOND_DELAY)
	{
		console.log((hr%12)+ ' : ' + min + ' : ' + sec);
		secHistory = sec
		SECOND_DELAY = false;
	}
	if(sec != secHistory)
	{
		SECOND_DELAY = true;

	}


	fill(255);
	noStroke();
	textFont(font);
    textSize(50);
    if((hr%12)<10)
    {
		text('0' + (hr%12)+ ' : ' + min + ' : ' + sec, 10, 200);
    }
    else if(min<10)
    {
		text((hr%12)+ ' : ' + '0' +  min + ' : ' + sec , 10, 200);
    }
    else if(sec<10)
    {
		text((hr%12)+ ' : ' + min + ' : ' + '0' +  sec, 10, 200);
    }
    else
    {
		text((hr%12)+ ' : ' + min + ' : ' + sec, 10, 200);
    }
}