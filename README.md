# simple-svg-imagemap

![](extras/preview.jpg)

## Description

This plug-in adds a clickable SVG image below a text field (specifically, an image of a truck). Clicking on a region fills in the text field with the ID of that region.

## Features

* Supports the `text` field type.
* Supports the following SurveyCTO field properties:

    * Default values
    * Read only

## How to use

**To use this plug-in as-is**, just download the [simple-svg-imagemap.fieldplugin.zip](simple-svg-imagemap.fieldplugin.zip) file from this repo, and attach it to your form.

To create your own field plug-in using this as a template, follow these steps:

1. Fork this repo
1. Make changes to the files in the `source` directory.

    * **Note:** be sure to update the `manifest.json` file as well.

1. Zip the updated contents of the `source` directory.
1. Rename the .zip file to *yourpluginname*.fieldplugin.zip (replace *yourpluginname* with the name you want to use for your plug-in).
1. You may then attach your new .fieldplugin.zip file to your form as normal.

## More resources
More instructions for developing and using field plug-ins can be found here: [https://github.com/surveycto/Field-plug-in-resources](https://github.com/surveycto/Field-plug-in-resources)