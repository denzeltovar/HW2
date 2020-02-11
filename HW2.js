//validate form
function validate() {
    //first name
    var firstN = document.getElementById('txtFirstN').value;
    //last name
    var lastN  = document.getElementById('txtlastN').value;
    //email
    var email = document.getElementById('txtemail').value;
    // method to check if expression contains ABC's
    var abc = /^[A-Za-z]+$/;
    //email expression
    //http://rick.measham.id.au/paste/explain.pl?regex=/%5E%5Cw%2b%28%5B%5C.-%5D?%5Cw%2b%29%2a@%5Cw%2b%28%5B%5C.-%5D?%5Cw%2b%29%2a%28%5C.%5Cw%7B2,3%7D%29%2b%24/
    var emailEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //checking for empty values
    if (firstN === '' || lastN === '' || email === '' ) 
    {
    // if fields is empty then
        alert('Fields should not be empty');
        return false;
    }
    else if(!abc.test(firstN)) 
    {
        // if name has number
        alert("Name should not have numbers");
        return false; 
    }
    else if(!abc.test(lastN)) 
    {
        // if name has number
        alert("Name should not have numbers");
        return false; 
    }
    else if(!emailEx.test(email)) 
    {
        alert('Enter a valid email');
        return false;
    }
    else 
    {
        // if everthing is correct then
        alert('All feilds are correct :)');
    }
}