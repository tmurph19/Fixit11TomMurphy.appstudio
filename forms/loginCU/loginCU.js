
 

btnLogin.onclick=function(){
  req1 = ""
  req1 = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptNetID.value + "&j_password=" + inptPassword.value);
    if (req1.status == 200 && req1.responseText == 1) { //everything worked.
        lblResponse.hidden = false
        lblResponse.value = "Your LDAP return code was " + req1.responseText
        // 1 good 0 bad
        ChangeForm(favFoods)
        
    } else {
        //had a problem with AJAX request. 
        lblResponse.hidden = false
        lblResponse.value = "Error: " + req1.status;
}

btnNextForm.onclick=function(){
  ChangeForm(favFoods)
}
