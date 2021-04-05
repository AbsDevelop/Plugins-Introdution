// This is a JavaScript file

$(document).on("click", "#alerta", function(){
  function retorno(){}
  navigator.notification.alert("Minha mensagem", retorno, "Aviso", "Aceito");
});

$(document).on("click", "#confirm", function(){
  function confirma(buttonIndex){
    if(buttonIndex == 1){
      navigator.notification.alert("Escolheu opção aaaa");
    }else{
      navigator.notification.alert("Escolheu opção bbbb");
        navigator.notification.beep(3);
    }
  }
  navigator.notification.confirm("Escolha A ou B:", confirma, "Escolho:", ["A", "B"]);
});

$(document).on("click", "#beep", function(){
  navigator.notification.beep(3);
});

$(document).on("click", "#vibra", function(){
  navigator.vibrate(2500);
});