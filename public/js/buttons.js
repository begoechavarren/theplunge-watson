function button(clicked_id) {
  var latestResponse = Api.getResponsePayload();
  var context = latestResponse.context;
  Api.sendRequest(clicked_id, context);
  //disable the buttons after clicking on them
  disableButtons();
}

function disableButtons(){
  buttons = document.getElementsByTagName('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].setAttribute('disabled', 'true');
  }
}
