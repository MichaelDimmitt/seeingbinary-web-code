 

	//start off by clearing the screen.
	function clearscreen()
	{
		var myNode = document.getElementById("console");
		while (myNode.firstChild) 
		{
			myNode.removeChild(myNode.firstChild);
		}
	}

	//root versions of display functions.
	function newRootCmdLine() //writes a new command line for after input.
	{
		Typer.write('<span id="r">root@SeeingBinary</span><span id="d">:</span><span id="b">~</span><span id="c">#</span><span id="d" class="input"></span>');
	}

	//key press handler for stage 2.
	
	
	$.getScript('includes/rootfunctions.js', function()
	{
		$(document).on("keypress", function (e)
		{
			if(Typer.stage == 2)
			{
				var cont=Typer.content(); // get the console content
				if(cont.substring(cont.length-1,cont.length)=="|") // if the last char is the blinking cursor
				$("#console").html($("#console").html().substring(0,cont.length-1)); // remove it before adding the text

			
				if(e.keyCode == 13)//if enter key is pressed, submit the command.
				{
					parseRootCommand(Typer.command);
					Typer.command = "";
					
					var cont=Typer.content(); // get the console content
					if(cont.substring(cont.length-1,cont.length)=="|") // if the last char is the blinking cursor
						$("#console").html($("#console").html().substring(0,cont.length-1)); // remove it before adding the text
					
					newRootCmdLine();
				}
				else if(e.keyCode == 8)
				{
					//do nothing! backspace handled elsewhere
				}
				else if(e.keyCode == 32)
				{
					//do nothing! space handled elsewhere
				}
				else//add the letter to the screen.
				{
					$('span.input').last().text( $('span.input').last().text()+ String.fromCharCode(e.charCode));
					Typer.command += (String.fromCharCode(e.charCode));
				}
			}
		});
	});

	/////////////////////////////
	//  The run once functions //
	/////////////////////////////
	Typer.stage = 2;
	clearscreen();
	newRootCmdLine();


	////////////////
	//  glitches  //
	////////////////

	//glitch function called by typer below:
	function doGlitch()
	{

		// switch for first glitch.
		switcher = (Math.ceil(Math.random() * 20)); 
		if( switcher <= 10 )
		{
			glitchText();
		}
		else if( switcher <= 15 )
		{
			glitchTextCorrupt();
		}
		
		// switch for second glitch.
		switch_no = Math.ceil(Math.random() * 5);

		switch(switch_no)
		{
			//shift way left and up.
			case 1:
				$("#console").css( "margin-left", "0" );
				$("#console").css( "top", "100" );
				setTimeout(function()
				{
					$("#console").css( "margin-left", "auto" );
					$("#console").css( "top", "0" );
				},40);
				break;

			//nudge left
			case 2:
				$("#console").css( "left", "30px" );
				setTimeout(function()
				{
					$("#console").css( "left", "0px" );
				},90);
				break;
			
			//nudge down
			case 3:
				$("#console").css( "top", "-30px" );
				setTimeout(function()
				{
					$("#console").css( "top", "0px" );
				},90);
				break;

			default:
				break;
		}

	}
	
	function glitchText()
	{
		if ( !($("#console") != null ))
		{
			return false;
		}


		var holder = $("#console").html();
		$("#console").glitch(
		{
    		amount: 8,
    		complete: function(canvas)
			{
				$("#console").html(canvas);
    		}
		});	
		setTimeout(function()
		{ 
			$("canvas").replaceWith(holder); 
			$("span.input").last().text(Typer.command); 
			

			var cont=Typer.content(); // get the console content
			if(cont.substring(cont.length-1,cont.length)=="|") // if the last char is the blinking cursor
				$("#console").html($("#console").html().substring(0,cont.length-1)); // remove it before adding the text
		
		} , Math.round(Math.random() * (1750 - 250)) + 250); //random .25 second to 1.75 seconds before restoring text

	}



	function randomString(len, bits)
	{
	    bits = bits || 36;
		var outStr = "", newStr;
		while (outStr.length < len)
		{
			newStr = Math.random().toString(bits).slice(2);
			outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
		}
		return outStr;
	};

	function glitchTextCorrupt()
	{
		if ( !($("#console") != null ))
		{
			return false;
		}

		var holder = $("#console").html();
		
		$("span.input").last().text(randomString(64,36)); 
			
		$("#console").glitch(
		{
    		amount: 8,
    		complete: function(canvas)
			{
				$("#console").html(canvas);
    		}
		});	
		setTimeout(function()
		{ 
			$("canvas").replaceWith(holder); 
			$("span.input").last().text(Typer.command); 
			

			var cont=Typer.content(); // get the console content
			if(cont.substring(cont.length-1,cont.length)=="|") // if the last char is the blinking cursor
				$("#console").html($("#console").html().substring(0,cont.length-1)); // remove it before adding the text
		
		} , Math.round(Math.random() * (1750 - 250)) + 250); //random .25 second to 1.75 seconds before restoring text

	}

	//random timer:
	(function loop() {
	    var rand = Math.round(Math.random() * (8000 - 3000)) + 3000; // random .2 to 5 seconds per glitch.
		setTimeout(function() {
			doGlitch();
			loop();  
		}, rand);
	}());


