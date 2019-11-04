





btnNextForm4.onclick=function(){
  ChangeForm(favExercises)
}



btnSubmit.onclick=function(){
  if (rdoPersonType.value == 0)
    lblPrompt2.value = "I would agree that you are a ' " + rdoPersonType.value " ' person too!"
  if (rdoPersonType.value == 1)
    lblPrompt2.value = "I would agree that you are a ' " + rdoPersonType.value " ' person too!"
  if (rdoPersonType.value == 2)
    lblPrompt2.value = "I would agree that you are a ' " + rdoPersonType.value " ' person too!"
  if (rdoPersonType.value == 3)
    lblPrompt2.value = "I would agree that you are a ' " + rdoPersonType.value " ' person too!"
}
