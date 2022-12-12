// LOGIN AND REGISTRATION 

// template1 part

const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach(wrap => {
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}

// faq part
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// Validation for registration page

  function registration()
  {
    var name= document.getElementById("fullname").value;
		var email= document.getElementById("email").value;
		var uname= document.getElementById("username").value;
		var pwd= document.getElementById("password").value;			
		var cpwd= document.getElementById("confirmpassword").value;

    //email id expression code
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(name == '')
		{
			alert('Please enter your name');
      return false;
		}
		
		else if(email == '')
		{
			alert('Please enter your user email id');
		}
		else if (!filter.test(email))
		{
			alert('Invalid email');
		}
		else if(uname == '')
		{
			alert('Please enter the user name.');
      return false;
		}
		
		else if(pwd == '')
		{
			alert('Please enter Password');
			return false;
		}
		
	    else
	    {
	      alert('Thank u for registration');
	      return true;
	    }
  }

function clearFunc()
	{
		document.getElementById("fullname").value="";
		document.getElementById("email").value="";
		document.getElementById("username").value="";
		document.getElementById("password").value="";
		document.getElementById("confirmpassword").value="";
	}