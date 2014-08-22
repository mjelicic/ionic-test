Ionic Test App
==========

Building Test App
---------
prereq: 
    
    nodejs (http://nodejs.org/)
    compass (http://compass-style.org/install/)
    npm install -g cordova ionic bower grunt-cli

when you have all dependencies run:

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
