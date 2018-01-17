//Hamburger Menu
$(function()
{
    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".hamburger" ).click(function()
    {
        $( ".menu" ).slideToggle( "slow", function()
        {
            $( ".hamburger" ).hide();
            $( ".cross" ).show();
        });
    });

    $( ".cross" ).click(function()
    {
        $( ".menu" ).slideToggle( "slow", function()
        {
            $( ".cross" ).hide();
        $( ".hamburger" ).show();
        });
    });
});

//Contact Form Validation
function validate()
{
    var form = document.querySelector('.contact');
    form.addEventListener("submit", contactValidate);
}

function contactValidate()
{
    var myForm = document.querySelector('.contact');
    
    if (myForm.name.value == "")
        {
            formValid = false;
            
            document.querySelector('.errName').style.border = "solid 1px red";
            event.preventDefault();
        }
    else
        {
            document.querySelector('.errName').style.border = "none";
        }
    
    if (myForm.email.value == "")
        {
            formValid = false;
            
            document.querySelector('.errEmail').style.border = "solid 1px red";
            event.preventDefault();
        }
    else
        {
            document.querySelector('.errEmail').style.border = "none";
        }
    
    if (myForm.message.value == "")
        {
            formValid = false;
            
            document.querySelector('.errMessage').style.border = "solid 1px red";
            event.preventDefault();
        }
    else
        {
            document.querySelector('.errMessage').style.border = "none";
        }
}