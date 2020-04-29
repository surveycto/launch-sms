/* global getPluginParameter, fieldProperties, launchIntent, setAnswer */

var isAndroid = (document.body.className.indexOf('android-collect') >= 0)
var smsNumber = getPluginParameter('number')
var smsMessage = getPluginParameter('message')
var buttonLabel = getPluginParameter('button_label')
var previewNumberContainer = document.getElementById('sms-preview-number-container')
var previewMessageContainer = document.getElementById('sms-preview-message-container')
var btnSendSMS = document.getElementById('btn-send-sms')
var statusContainer = document.getElementById('status-container')

// Set up the UI with all the values from the parameters.
previewNumberContainer.innerHTML = smsNumber
previewMessageContainer.innerHTML = smsMessage
btnSendSMS.innerText = buttonLabel || 'Send SMS'

// Define what the "Send SMS" button does when the field is not marked readonly.
if (!fieldProperties.READONLY) {
  if (isAndroid) {
    btnSendSMS.onclick = function () {
      launchSMSUsingAndroidIntent()
    }
  } else {
    btnSendSMS.setAttribute('href', 'sms:' + smsNumber + '&body=' + smsMessage)
    btnSendSMS.onclick = function () {
      saveResponse('success')
    }
  }
} else {
  btnSendSMS.classList.add('disabled')
}

// Define how to store the response
function saveResponse (result) {
  if (result === 'success') {
    var successResponse = 'SMS created. Recipient: ' + smsNumber + '. Message: "' + smsMessage + '".'
    setAnswer(successResponse)
  } else {
    var failResponse = 'There was an error creating the SMS: ' + result
    setAnswer(failResponse)
  }
}

// The following code sets up and launches the Android intent
function launchSMSUsingAndroidIntent () {
  // set the parameters for the intent
  var params = {
    uri_data: 'smsto:' + smsNumber,
    sms_body: smsMessage
  }
  // Launches the "android.intent.action.SENDTO" intent using the parameters above.
  launchIntent('android.intent.action.SENDTO', params, function (error, result) {
    // Something went wrong while launching the intent.
    if (error) {
      saveResponse(error)
      statusContainer.innerHTML = error
    } else {
      saveResponse('success')
      statusContainer.innerHTML = 'Success!'
    }
  })
}
