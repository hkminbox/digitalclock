var flags = false;
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
  	font2 = loadFont('assets/Orbitron-VariableFont_wght.ttf');
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
	let ampm;

	if(hr>=12)
	{
		ampm = 'PM';
	}
	else
	{
		ampm = 'AM';
	}
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
	textAlign(LEFT);
    textSize(50);

/*	METHOD 1 for 24hr format.
    hr = hr%12;
	if((hr)<10)
    {
		hr = '0' + hr;
    }*/
    let h=hr;
	if((hr%12)<10)
    {
    	if(h!=12)
    	{
			hr = '0' + hr%12;
    	}
    }
    else
    {	
    		hr = hr%12;
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

	textFont(font);
	textSize(30);
	text(ampm, 220, 240);

	textFont(font2);
    textSize(30);
    textAlign(RIGHT);
	text(d, 850, 150);
	text(m, 850, 190);
	text(y, 850, 230);

	if(CHECK_LOG_DISPLAY && SECOND_DELAY_DISPLAY)
	{
		console.log('Display format: ' + hr + ' : ' + min + ' : ' + sec +' '+ ampm);
		secHistory2 = sec
		SECOND_DELAY_DISPLAY = false;
	}
	if(sec != secHistory2)
	{
		SECOND_DELAY_DISPLAY = true;

	}
}




