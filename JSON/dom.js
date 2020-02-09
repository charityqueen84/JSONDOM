//DOM is just a fancy was of saying HTML document. 

//Installing a web server

//You want to see the results exactly as your eventual audience will. This can only be accomplished w/ a web server.
//Many free web servers that are simple. We're using node to run JS code outside of browser. There is a component of
//node called npm that installs automatically when you install node. It serves as a manager for all the different
//parts when you start working w/ JS frameworks. 
//in terminal, npm -v for version number
//We'll be using live server and have npm install for us. 
//in terminal, npm install -g live-server (this tells npm that i'm going to install software and to configure it globally (from all
//directories on computer)). Then live-server -v to check it installed. 
//


//put script tag right before closing html. HTML file loads from top to bottom. In some cases JS code could look for html elements 
//before they've loaded, which could cause errors. JS regards html doc as the DOM, which means JS is looking at entire HTML doc as
//one big object called document. 
