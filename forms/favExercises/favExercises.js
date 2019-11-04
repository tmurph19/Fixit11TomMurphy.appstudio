var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
  selExercises.clear()
  for(i = 0; i <= exercises.length - 1; i++)
    selExercises.addItem(exercises[i])
    
}

selExercises.onfocusout=function(){
  let message = "You chose:"
  for (i = 0; i <= selExercises.text.length - 1; i++)
    message = message + " " + selExercises.text[i]
  NSB.MsgBox(message)
}




/*
selSandwiches.onchange=function(){
    NSB.MsgBox("Index of chosen item is "  +  selSandwiches.item  
               +  ", \nand the value is "  +  selSandwiches.value
               + ", and the text is " + selSandwiches.text);
}


//Uncomment below and comment onchange above
// to show how to to deal with multiple choices

btnDone.onclick=function(){
  let message = "Your favorite sandwiches are:" 
  for (i = 0; i <= selSandwiches.text.length - 1; i++)
     message = message + "<br />" + selSandwiches.text[i]
  NSB.MsgBox(message)
  
}
 
*/
btnNextForm5.onclick=function(){
  ChangeForm(mobileNav)
}
