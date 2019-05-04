function parseRootCommand(command) //a large function that parses user commands. might want to clean this up later.
{

	crypto5 = function()
	{
		$('span.output').last().text("Think you know crypto? this isnt your babys first crypto. Ill even give you the");
		Typer.write('</br><span id="d" class="output">password and source code. Good luck, you will need it!</span>');
		Typer.write("</br>");
		Typer.write('</br><span id="d" class="output">files:</span>');
		Typer.write('</br><span id="d" class="output"><a href="challenges/crypto/crypto5/evenwiththepassword.txt" target="_blank">bash_history</a></span>');
		Typer.write('</br><span id="d" class="output"><a href="challenges/crypto/crypto5/evenwiththesourcecode.cpp" target="_blank">unbreakable.cpp</a></span>');
		Typer.write('</br><span id="d" class="output"><a href="challenges/crypto/crypto5/thisisUNBREAKABLE" target="_blank">unbreakable</a></span>');
		Typer.write('</br><span id="d" class="output"><a href="challenges/crypto/crypto5/a7j4Ajufa1oololyoucantwin.txt" target="_blank">encrypted.txt</a></span>');
		Typer.write("</br>");
	}


	var files = {};
	files["steg1.png"] = "challenges/steg/as8dkaabasdlai1.png";
	files["steg2.gif"] = "challenges/steg/1Uja92jlaiisj8ah.gif";
	files["web2.html"] = "challenges/web/not_here.html";
    files["crypto5.txt"] = crypto5;

	if(!command) //if they press enter with out a command, just return a new line and do nothing.
	{
		Typer.write("</br>");
		return false;
	}

	Typer.write('</br><span id="d" class="output"></span>'); //we have a command, make our first line of output.
	
	if(cleanArray(command.split(" "))[0] == "ls")// command = ls
	{
		if(cleanArray(command.split(" ")).length == 1)//no added arguments, just do the basic ls.
		{
			Object.keys(files).forEach(function(index) 
			{ 
				$('span.output').last().text($('span.output').last().text() + index + " ");
			});
			Typer.write("</br>");
		}
		else if(cleanArray(command.split(" ")).length == 2)//theres a second param. handle it.
		{
			if(cleanArray(command.split(" "))[1] == "-l")//added long flag, just line split them.
			{	
				Object.keys(files).forEach(function(index) 
				{ 
					$('span.output').last().text($('span.output').last().text() + index);
					Typer.write('</br><span id="d" class="output"></span>');
				});
			}
			else if(cleanArray(command.split(" "))[1] == "-a")//add dot files
			{
				$('span.output').last().text(". .. ");
				Object.keys(files).forEach(function(index) 
				{ 
					$('span.output').last().text($('span.output').last().text() + index + " ");
				});
				Typer.write("</br>");
			}
			else if(cleanArray(command.split(" "))[1] == "-la" || command.split(" ")[1] == "-al")//output list with dot files.
			{
				$('span.output').last().text(".");
				Typer.write('</br><span id="d" class="output">..</span>');
				Typer.write('</br><span id="d" class="output"></span>');

				Object.keys(files).forEach(function(index) 
				{ 
					$('span.output').last().text($('span.output').last().text() + index);
					Typer.write('</br><span id="d" class="output"></span>');
				});
			}
			else//some unknown flag.
			{
				$('span.output').last().text("Error: ls: unknown flags. use help ls for more info.");
				Typer.write("</br>");
			}
		}
		else//too many args.
		{
			$('span.output').last().text("Error: ls: too many arguments for ls. use help ls for more info.");
			Typer.write("</br>");
		}
	}
	
	else if(command.split(" ")[0] == "clear")//command = clear
	{
		if(command.split(" ").length == 1)//no params, clear screen.
		{
			var myNode = document.getElementById("console");
			while (myNode.firstChild) 
			{
				myNode.removeChild(myNode.firstChild);
			}
		}
		else//display error.
		{
			$('span.output').last().text("Error: clear: too many arguments for clear. use help clear for more info.");
			Typer.write("</br>");
		}
	}


	else if(command.split(" ")[0] == "help")//command = help
	{
		if(command.split(" ").length == 1) //no params, show commands.
		{
			$('span.output').last().text("Current commands:");
			Typer.write('</br><span id="d" class="output">&nbsp;&nbsp;&nbsp;ls</span>');
			Typer.write('</br><span id="d" class="output">&nbsp;&nbsp;&nbsp;clear</span>');
			Typer.write('</br><span id="d" class="output">&nbsp;&nbsp;&nbsp;open</span>');
			Typer.write('</br><span id="d" class="output">&nbsp;&nbsp;&nbsp;su</span>');
			Typer.write('</br><span id="d" class="output">&nbsp;&nbsp;&nbsp;help</span>');
			Typer.write('</br><span id="d" class="output"> to see command usage, type help &lt;command&gt;.</span>');
			Typer.write("</br>");
		}
		else if(command.split(" ").length == 2) //second arg, someone asking for help on a command.
		{
			if(command.split(" ")[1] == "ls")//show ls usage.
			{
				$('span.output').last().text("ls usage:");
				Typer.write('</br><span id="d" class="output">ls &lt;-flags&gt; | lists current directory contents.</span>');
				Typer.write('</br><span id="d" class="output">&nbsp;&nbsp;flags:</span>');
				Typer.write('</br><span id="d" class="output">&nbsp;&nbsp;&nbsp;&nbsp;a - list all files, including hidden files.</span>');
				Typer.write('</br><span id="d" class="output">&nbsp;&nbsp;&nbsp;&nbsp;l - list files on new lines.</span>');
				Typer.write("</br>");
			}
			else if(command.split(" ")[1] == "clear")//show clear usage
			{
				$('span.output').last().text("clear | clears current screen.");
				Typer.write('</br><span id="d" class="output">&nbsp;&nbsp;clear takes no parameters.</span>');
				Typer.write("</br>");
			}
			else if(command.split(" ")[1] == "help")//show help usage
			{
				$('span.output').last().text("help usage:");
				Typer.write('</br><span id="d" class="output">help &lt;command&gt; | shows usage for command, if specified. otherwise shows avalible commands.</span>');
				Typer.write("</br>");
			}
			else if(command.split(" ")[1] == "open" || command.split(" ")[1] == "cat" )//show open usage
			{
				$('span.output').last().text("open [file | url]| opens file or url.");
				Typer.write('</br><span id="d" class="output"></span>');
				Typer.write('</br><span id="d" class="output">&nbsp;&nbsp;note:url MUST begin with http or https.</span>');
				Typer.write("</br>");
			}
			else if(command.split(" ")[1] == "su")//show open usage
			{
				$('span.output').last().text("su [user]| substitute user identity");
				Typer.write('</br><span id="d" class="output">&nbsp;&nbsp;Use su to switch user accounts. su takes in a user name, and then prompts for a password.</span>');
				Typer.write("</br>");
			}
			else//unknown command.
			{
				$('span.output').last().text("Error: help: unknown command to fetch help for.");
				Typer.write("</br>");
			}
		}
		else//too many args.
		{
			$('span.output').last().text("Error: help: too many arguments for help. use help help for more info.");
			Typer.write("</br>");
		}
	}
	
	
	else if(cleanArray(command.split(" "))[0] == "open" || command.split(" ")[0] == "cat")//command = open
	{
		if(cleanArray(command.split(" ")).length == 1)//nothing to open. error that shit!
		{
			$('span.output').last().text("Error: open: enter a file or url to open.");
			Typer.write("</br>");
		}
		else if(cleanArray(command.split(" ")).length == 2)//ah, just right... lets process the url or file
		{
			if(cleanArray(command.split(" "))[1].split("://")[0] == "http" || command.split(" ")[1].split("://")[0] == "https")//url found, redirect there
			{
				window.location = cleanArray(command.split(" "))[1];
			}
			else if(files.hasOwnProperty(cleanArray(command.split(" "))[1]))//open the file
			{
				if(typeof files[cleanArray(command.split(" "))[1]] === "string")
				{
					window.open(files[cleanArray(command.split(" "))[1]],'_blank');
				}
				else
				{
					files[cleanArray(command.split(" "))[1]](); //call the function in the object array.
				}
			}
			else
			{
				$('span.output').last().text("Error: open: unknown file or url.");//something went wrong.
				Typer.write("</br>");
			}
		}
		else//too many args
		{
			$('span.output').last().text("Error: open: too many arguments for open. use help open for more info.");
			Typer.write("</br><!-- " + cleanArray(command.split(" ")).length + "-->");
		}
	}

	else if(command.split(" ")[0] == "su")
	{
		if(command.split(" ").length == 1)
		{
			$('span.output').last().text("Error: su: not enough arguments for su. use help su for more info.");
			Typer.write("</br>");
		}
		else if(command.split(" ").length == 2)
		{
			if(command.split(" ")[1] == "user")
			{
				//do stuff to priv downgrade.
			}
			else
			{
				$('span.output').last().text("Error: su: unknown user.");//unknown command
				Typer.write("</br>");
			}
		}
		else
		{
			$('span.output').last().text("Error: su: too many arguments for su. use help su for more info.");//something went wrong.
			Typer.write("</br>");
		}
	}

	else if(command == "exit")
	{
		typer.stage = 1;
	}
	else if(command == "im a noob")
	{
		window.location = "https://www.youtube.com/watch?v=SXmv8quf_xM";
	}
	
	else//command isnt found
	{
		$('span.output').last().text("-bash: "+command.split(" ")[0]+": command not found. type help for a list of commands");
		Typer.write("</br>");
	}

	return false;
}
