# openudid iOS module for Appcelerator Titanium Mobile

## Description

- openudid is a Javascript wrapper for [OpenUDID](https://github.com/ylechelle/OpenUDID), a drop-in replacement for the deprecated uniqueIdentifier property of the UIDevice class on iOS (UDID)

- In order to keep safe the OpenUDID across multiple app installations, **tIDs stores the OpenUDID in iOS Keychain**.

## Using the module

```js
var openudid = require('com.macasfaj.openudid');
Ti.API.info('OpenUDID is ' + openudid.getOpenUDID);
```

## Author

Miguel A. Castaño
macasfaj@gmail.com	
http://www.macasfaj.com
@macasfaj

## Feedback and Support

macasfaj@gmail.com

## License

Copyright 2012 Miguel A. Castaño <macasfaj@gmail.com>
Apache License, Version 2.0