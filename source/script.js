var btnSendSMS = document.getElementById('btn-send-sms');
var statusContainer = document.getElementById('status-container');

btnSendSMS.onclick = function() {

    // "number" is a field plug-in parameter.
    var params = {
        uri_data: 'smsto:' + getPluginParameter('number'),
        sms_body: 'Some text message...'
    };

    // Launches the "android.intent.action.SENDTO" intent using the parameters above.
    launchIntent('android.intent.action.SENDTO', params, function(error, result) {

        // Something went wrong while launching the intent.
        if (error) {
            statusContainer.innerHTML = error;
            return;
        }
    });
}
