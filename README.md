Ionic Test App
==========

Building Test App
---------
prereq: 

    npm install -g cordova ionic bower grunt

just run:

    bower install
    npm install
    grunt
    
Running Test App
----------

on ios: 

    cordova platform add ios
    ionic emulate ios

for dev in browser:

    grunt serve
