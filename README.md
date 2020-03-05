# Example - launch SMS

![](extras/preview.jpg)

## Description

This plug-in illustrates how to use the intents API, in Android, to automatically compose an SMS text message and launch the default SMS app on the device. It receives a phone number and a message as parameters, and provides a button to launch the SMS app (using the number and message from the parameters).

## Features

* Supports the `text` field type, but doesn't provide an actual text input. The response that gets recorded in your form data will be based on the parameters.
* If the SMS app is successfully launched, the field's response will be stored as:  
    > The following SMS was sent to [number]: '[message]'.

## How to use

1. Download the test form [extras/test-form](extras/test-form) from this repo and upload it to your SurveyCTO server.
1. Download the [example-launch-sms.fieldplugin.zip](example-launch-sms.fieldplugin.zip) file from this repo, and attach it to the test form on your SurveyCTO server.
1. Make sure to provide the correct paramters (see below).

## Required parameters

| Key | Value |
| --- | --- |
| `number` | The phone number to which the SMS should be sent. |
| `message` | The body of the text message. |

*Note: it is suggested to use values stored in other fields for the parameters. Take a look at the test form to see how this is accomplished.

## More resources

* **Test form**  
[extras/test-form](extras/test-form)
* **Developer documentation for field plug-ins**  
More instructions for developing and using field plug-ins. [https://github.com/surveycto/Field-plug-in-resources](https://github.com/surveycto/Field-plug-in-resources)