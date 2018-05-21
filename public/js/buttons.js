// function button1() {
//   var latestResponse = Api.getResponsePayload();
//   var context = latestResponse.context;
//   Api.sendRequest("round", context);
// }
//
// function button2() {
//   var latestResponse = Api.getResponsePayload();
//   var context = latestResponse.context;
//   Api.sendRequest("radiant", context);
// }
//
// function button3() {
//   var latestResponse = Api.getResponsePayload();
//   var context = latestResponse.context;
//   Api.sendRequest("princess", context);
// }
//
// function button4() {
//   var latestResponse = Api.getResponsePayload();
//   var context = latestResponse.context;
//   Api.sendRequest("pear", context);
// }
//
// function button5() {
//   var latestResponse = Api.getResponsePayload();
//   var context = latestResponse.context;
//   Api.sendRequest("oval", context);
// }
//
// function button6() {
//   var latestResponse = Api.getResponsePayload();
//   var context = latestResponse.context;
//   Api.sendRequest("marquise", context);
// }
//
// function button7() {
//   var latestResponse = Api.getResponsePayload();
//   var context = latestResponse.context;
//   Api.sendRequest("heart", context);
// }
//
// function button8() {
//   var latestResponse = Api.getResponsePayload();
//   var context = latestResponse.context;
//   Api.sendRequest("emerald", context);
// }
//
// function button9() {
//   var latestResponse = Api.getResponsePayload();
//   var context = latestResponse.context;
//   Api.sendRequest("cushion", context);
// }

function button(clicked_id) {
  var latestResponse = Api.getResponsePayload();
  var context = latestResponse.context;
  Api.sendRequest(clicked_id, context);
}
