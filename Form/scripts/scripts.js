function GEEKFORGEEKS()                                    
{
    alert("Hi"); 
    var name = document.getElementById("name");               
    var email = document.getElementById("email");       
   
    if (name.value == "")                                  
    {   
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    }  
       
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
    return true; 
    
    } 
  

