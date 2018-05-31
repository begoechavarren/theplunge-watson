var shapes = ["round", "radiant", "princess", "pear", "oval", "marquise", "emerald", "cushion", "any"]; //unsure
var shape;
var metals = ["platinum", "yellow gold", "rose gold", "white gold", "all"]; //not sure
var metal;
var styles = ["solitaire", "halo", "three stone", "side stones", "vintage", "every"]; //don't know
var style;

var url;

function button(clicked_id) {
  var latestResponse = Api.getResponsePayload();
  var context = latestResponse.context;
  Api.sendRequest(clicked_id, context);

  if (shapes.includes(clicked_id) == true) {
    shape = clicked_id;
  } else if (metals.includes(clicked_id) == true) {
    metal = clicked_id;
  } else if (styles.includes(clicked_id) == true) {
    style = clicked_id;
  }

  //format the metal with dash
  if (metal == "yellow gold") {
    metal = "yellow-gold";
  } else if (metal == "rose gold") {
    metal = "rose-gold";
  } else if (metal == "white gold") {
    metal = "white-gold";
  } else if (metal == "all") {
    metal = "any";
  }

  //format the style with dash
  if (style == "three stone") {
    style = "three-stone";
  } else if (style == "side stones") {
    style = "side-stones";
  } else if (style == "every") {
    style = "any";
  }

  //update url
  url ="https://www.theplunge.com/shop/the-setting-finder?shape=" + shape + "&metal=" + metal + "&style=" + style;

  //disable the buttons after clicking on them
  disableButtons();

  if (styles.includes(clicked_id) == true) {
    createFinalMessage();
  }

  console.log(url);

}

function disableButtons(){
  buttons = document.getElementsByTagName('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].setAttribute('disabled', 'true');
  }
}

function createFinalMessage() {
  var latestResponse = Api.getResponsePayload();
  var context = latestResponse.context;
  var message = "Check out the rings: <a href=" + url + " target=\"_blank\">click here</a>"
  Api.sendRequest(message, context);
}
