var flags = true;
if(flags === true)
{
	var CHECK_LOG =true;
	var CHECK_MONTH =true;
	var SECOND_DELAY =true;
	var CHECK_LOG_DISPLAY = true;
	var SECOND_DELAY_DISPLAY =true;
	var DAY_DELAY = true;

}
monthName = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
var secHistory;
var secHistory2;
var dayHistory;


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
	let d = day();
	let m = month();
	let y = year();

	m = monthName[m-1];


	if(CHECK_MONTH && DAY_DELAY)
	{
		console.log(d+ ' : ' + m + ' : ' + y);
		dayHistory = d;
		DAY_DELAY = false;
	}
	if(d != dayHistory)
	{
		DAY_DELAY = true;

	}



	if(CHECK_LOG && SECOND_DELAY)
	{
		console.log((hr%12)+ ' : ' + min + ' : ' + sec);
		secHistory = sec;
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
		hr = '0' + hr%12;
    }
    if(min<10)
    {
		min =  '0' +  min ;
    }
    if(sec<10)
    {
		sec =  '0' +  sec;
    }
    
	text(hr + ' : ' + min + ' : ' + sec, 10, 200);
	if(CHECK_LOG_DISPLAY && SECOND_DELAY_DISPLAY)
	{
		console.log('Display format: ' + hr + ' : ' + min + ' : ' + sec);
		secHistory2 = sec
		SECOND_DELAY_DISPLAY = false;
	}
	if(sec != secHistory)
	{
		SECOND_DELAY_DISPLAY = true;

	}
}




