
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
win.add(label);
win.open();

// TODO: write your module tests here
var openudid = require('com.macasfaj.openudid');
Ti.API.info('OpenUDID is ' + openudid.getOpenUDID);