const clothing =
{
	pants: ["pantsText", "pantsPic"],
	shirt: ["shirtText", "shirtPic"],
	jeans: ["jeansText", "jeansPic"],
	hoodie: ["hoodieText", "hoodiePic"]
};

window.addEventListener("DOMContentLoaded", function ()
{
	// Show/hide text and images on radio button change
	document.addEventListener("change", function (e)
	{
		if(clothing[e.target.id])
		{
			Object.values(clothing).forEach(pair =>
			{
				document.getElementById(pair[0]).style.display = "none";
				document.getElementById(pair[1]).style.display = "none";
			});
			
			const [text, pic] = clothing[e.target.id];
			document.getElementById(text).style.display = "block";
			document.getElementById(pic).style.display = "block";
		}
	});
	
	// Set default selection
	const defaultRadio = document.getElementById("pants");
	if (defaultRadio)
	{
		defaultRadio.click();
	}
	
	// Compute button click handler
	const computeButton = document.getElementById("compute");
	if (computeButton)
	{
		computeButton.addEventListener("click", function ()
		{
			const qty = Number(document.getElementById("quantity").value);
			
			if (isNaN(qty) || qty <= 0)
			{
				const error = window.open("", "errorWindow", "width=250, height=250");
				error.document.write("<h2>Error</h2>");
				error.document.write("<p>Please enter a valid number.</p>");
				return;
			}
			
			let price = 0;
			
			if (document.getElementById("pants").checked)
			{
				price = 25.95;
			}
			
			else if (document.getElementById("shirt").checked)
			{
				price = 18.09;
			}
			
			else if (document.getElementById("jeans").checked)
			{
				price = 130;
			}
			
			else if (document.getElementById("hoodie").checked)
			{
				price = 35.99;
			}
			
			const total = qty * price;
			
			const totalWindow = window.open("", "totalWindow", "width=250, height=250");
			
			totalWindow.document.write("<h2>Total Cost</h2>");
			totalWindow.document.write("<p>Your final cost is: <strong>$" + total.toFixed(2) + "</strong></p>");
			
			totalWindow.document.write(`
				<button id='continue'>Continue</button>
				<button id='cancel'>Cancel</button>
				<script>
					document.getElementById("continue").onclick = function()
					{
						const cont = window.open("", "continueWindow", "width=250 height=250");
						cont.document.write("<p>You have chosen to continue with your purchase.</p>");
						window.close();
					};
					
					document.getElementById("cancel").onclick = function()
					{
						const cancel = window.open("", "cancelWindow", "width=250 height=250");
						cancel.document.write("<p>You have chosen to cancel your purchase.</p>");
						window.close();
					};
				</script>
			`);
		});
	}
});
