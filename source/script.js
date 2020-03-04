var smsNumber = getPluginParameter('number');
var smsMessage = getPluginParameter('message');
var previewNumberContainer = document.getElementById('sms-preview-number-container');
var previewMessageContainer = document.getElementById('sms-preview-message-container');
var btnSendSMS = document.getElementById('btn-send-sms');
var statusContainer = document.getElementById('status-container');

// set the preview values to show what has been passed from the parameters
previewNumberContainer.innerHTML = smsNumber;
previewMessageContainer.innerHTML = smsMessage;

// define what the "Send SMS" button does
btnSendSMS.onclick = function() {
    // set the parameters for the intent
    var params = {
        uri_data: 'smsto:' + smsNumber,
        sms_body: smsMessage
    };
    // Launches the "android.intent.action.SENDTO" intent using the parameters above.
    launchIntent('android.intent.action.SENDTO', params, function(error, result) {
        // Something went wrong while launching the intent.
        if (error) {
            statusContainer.innerHTML = error;
            return;
        }
        else {
            var successResponse = "The following SMS was sent to " + smsNumber + ": '" + smsMessage + "'.";
            setAnswer(successResponse);
            statusContainer.innerHTML = "Success!";
        }
    });
}
