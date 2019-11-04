let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]

favFoods.onshow=function(){
  lsgFood.clear()
  for (i = 0; i<= goodFoods.length - 1; i++)
    lsgFood.addItem(goodFoods[i])
    
}



lsgFood.onclick=function(choice){
  if (typeof(choice) == "object")   // user clicked the control
  return
  lblMessage.value = ("You picked " + choice + " -that is a great choice!")
}



btnNextForm2.onclick=function(){
  ChangeForm(dessertVoting)
}








/*
lstNames.onclick=function(choice){  // notice the 'choice' parameter
  if (typeof(choice) == "object")   // user clicked the control
    return
    
  // otherwise get user selection (second click) which is the index 
  // of the item chosen
  NSB.MsgBox("The choice is " + choice)
  
  // how to change text of an item already on the list
  // change Teddy, at location 2, to Esmerelda
  let newPlace = 2   //index where you want replacement to go
  NSB.$("lstNames_" + newPlace).textContent = "Esmerelda"
  
    // add a new item just for fun. It will go onto the end of the list
  lstNames.addItem("Garbanzo","active","default")
}
*/



