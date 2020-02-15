# launch-sms-app

![](extras/preview.jpg)

## Description

This plug-in illustrates how to use the intents API, in Android, to communicate with external apps. It receives a phone number as parameter and provides a button to send a SMS to that number.

## Features

* Supports the `text` field type but doesn't provide any data collection capability.

## How to use

**To use this plug-in as-is**, just download the [launch-sms.fieldplugin.zip](launch-sms.fieldplugin.zip) file from this repo, and attach it to your form. Set the `number` parameter for the field plug-in.

To create your own field plug-in using this as a template, follow these steps:

1. Fork this repo
1. Make changes to the files in the `source` directory.

    * **Note:** be sure to update the `manifest.json` file as well.

1. Zip the updated contents of the `source` directory.
1. Rename the .zip file to *yourpluginname*.fieldplugin.zip (replace *yourpluginname* with the name you want to use for your plug-in).
1. You may then attach your new .fieldplugin.zip file to your form as normal.

## More resources
More instructions for developing and using field plug-ins can be found here: [https://github.com/surveycto/Field-plug-in-resources](https://github.com/surveycto/Field-plug-in-resources)
