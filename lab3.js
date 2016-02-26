function passwordValidator(s1, s2)
{
	if(s1!=s2)
	{
		alert("Please enter the same password in both fields.");
	}
	else if(s1.length < 8)
	{
		alert("Please enter a password at least 8 characters in length.")
	}
	else
	{
		alert("Password Accepted!");
	}
}

function previousPicture()
{
	var img = document.getElementById("image");
	if (img.src.indexOf("red-panda-1.jpg") > -1)
	{
		img.src = "red-panda-5.jpg";
	}
	else if(img.src.indexOf("red-panda-2.jpg") > -1)
	{
		img.src = "red-panda-1.jpg";
	}
	else if(img.src.indexOf("red-panda-3.jpg") > -1)
	{
		img.src = "red-panda-2.jpg";
	}
	else if(img.src.indexOf("red-panda-4.jpg") > -1)
	{
		img.src = "red-panda-3.jpg";
	}
	else
	{
		img.src = "red-panda-4.jpg";
	}
}

function nextPicture()
{
	var img = document.getElementById("image");
	if (img.src.indexOf("red-panda-5.jpg") > -1)
	{
		img.src = "red-panda-1.jpg";
	}
	else if(img.src.indexOf("red-panda-1.jpg") > -1)
	{
		img.src = "red-panda-2.jpg";
	}
	else if(img.src.indexOf("red-panda-2.jpg") > -1)
	{
		img.src = "red-panda-3.jpg";
	}
	else if(img.src.indexOf("red-panda-3.jpg") > -1)
	{
		img.src = "red-panda-4.jpg";
	}
	else
	{
		img.src = "red-panda-5.jpg";
	}
}

function changeColor()
{
	//get border colors and width
	var border_r = document.getElementById("red-border").value;
	var border_g = document.getElementById("green-border").value;
	var border_b = document.getElementById("blue-border").value;
	var border_width = document.getElementById("width-border").value;

	//get background colors
	var background_r = document.getElementById("red-background").value;
	var background_g = document.getElementById("green-background").value;
	var background_b = document.getElementById("blue-background").value;

	document.getElementById("dummyText").style.borderColor = "rgb(" + border_r + "," + border_g + "," + border_b + ")";
	document.getElementById("dummyText").style.borderWidth = border_width + "px";
	document.getElementById("dummyText").style.backgroundColor = "rgb(" + background_r + "," + background_g + "," + background_b + ")";
}
