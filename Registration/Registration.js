function formValidation()
{
    var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/; 
    var pwdRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    var posRegex=/^[A-Za-z]\d[A-Za-z][-]?\d[A-Za-z]\d/; 
    var fname = document.registration.fname.value;
    var lname = document.registration.lname.value;
    var uadd = document.registration.address.value;
    var city = document.registration.city.value;
    var postalcode = document.registration.postalcode.value;
    var provience = document.registration.provience.value;   
    var passid = document.registration.passid.value;
    var uage = document.registration.age.value;
    var uconfirm = document.registration.confirm.value;   
    var uemail = document.registration.email.value;
    /*if( fname == "" )
    {  document.registration.fname.focus() ;
        alert("enter the first name!");
        return false;
    }
    
    if( lname == "" )
    {document.registration.lname.focus() ;

        alert("enter the last name!");
        return false;
    }

    if( uadd =="" )
    {document.registration.address.focus() ;
        alert("enter the address!") ;
        return false;
    }
    if( city == "" )
    { document.registration.city.focus() ;
        alert("enter the City!");
        return false;
    }
    if( postalcode == "" )
    { document.registration.postalcode.focus() ;
    alert("enter the postalcode!");
    return false;
    }*/
     if(!posRegex.test(postalcode))
    {
        document.registration.postalcode.focus() ;
        alert("The postal code should be in the a0a0a0 format !");
        return false;
    }
    if(provience.value == "Default")
    { document.registration.provience.focus() ;
        alert("Select your provience from the list");
        return false;
    }

    /*if( uage == "" )
    { document.registration.age.focus() ;
        alert('enter the age!');
        return false;
    }*/

     if(uage<"18"){
        document.registration.age.focus() ;
        alert('Age should be more than 18 years!');
        return false;   
    }

    /*if( passid == "" )
    {
        document.registration.passid.focus() ;
        alert('enter the password!');
        return false;

    }*/
   
     if(!pwdRegex.test(passid))
    { document.registration.passid.focus() ;
        alert('Passwords must have at least 6 characters and must contain at least one digit and one upper-case character!');
        return false;
    }
    /*if( uconfirm == "" )
    { document.registration.confirm.focus() ;
    alert('enter the confirm password!');
    return false;
    }*/

     if(uconfirm !=passid)
    {
        document.registration.confirm.focus() ;
        alert('Re-enter the confirm password!');
        return false;
    }

    /*if( uemail == "" )
    {
        document.registration.email.focus() ;
        alert('enter the email!');
        return false;
    }*/
     if(!emailRegex.test(uemail)){
        alert('Re-enter the valid email!');
        document.registration.email.focus();
        return false;
    }

    if(fname != '' && lname != '' && uadd != '' && city != '' && postalcode != '' && provience != '' && uage != ''&& passid != '' &&uconfirm != '' && uemail !='')
    {alert('Thanks for registering with our website, your customer record was created successfully.');}
}