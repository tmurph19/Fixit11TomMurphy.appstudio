var dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keyline Pie','Cherry Cobbler','Chocolate Chip Cookies']

dessertVoting.onshow=function(){
    drpDesserts.clear()   
    for (i = 0; i <= dessertList.length - 1; i++)
      drpDesserts.addItem(dessertList[i])
}


drpDesserts.onclick=function(choice){
   // this 'if' kicks user out if they  just clicked on control 
 // but not on one item in the list.
    if (typeof(choice) == "object")   
      return                    
    else {  // the user picked something
        lblMessage2.value = ("You picked " + choice + " -that is a great choice!")
    }
}

btnNextForm3.onclick=function(){
  ChangeForm(describeYou)
  
}
