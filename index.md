# justReload

A simple(stupid) and easy to use auto-reload script.

[DOWNLOAD](https://github.com/paulSpades/justReload.git)

## Requirements:

_Requires jQuery_, for now.
Requires that you run an HTTP server.

## Use:

Download, copy in your js assets folder and include the justReload script into your development root view
  
    <script src="/js/justReload.js"></script>
  
Instantiate the constructor to a new object. It starts on its own when jQuery triggers document load.
    
     let reload = new justReload(); 
     // or 
     window.reload = new justReload();

The constructor has 2 optional parameters:
- 'time' NUMBER/miliseconds (timeout between request loops) - default is `4000`;
- 'log' BOOLEAN (turns on console logging) - default is false;

      // sets the request loop to 300 miliseconds timeout and logging on
      let reload = new justReload(300, true); 
      
The resulting object has two methods:
      
      reload.stop(); // stops the request loop
      reload.start(); // starts or restarts the request loop 
    
Remember to remove the script and initialization code in your app/project production version (however you do that for other scripts) or just comment it out.

## Tests

Client - Works on Firefox and Chromium browsers.

Servers - Only tested on the PHP dev server, but it should work with any basic HTTP server.

Very probably crashes when you have other JS errors.


## How it works

The script just tries to find a list of script and link tags to check for changes.
For each path in the list there's a `get` request that will trigger.

It then checks the string length of the file to its previous string length - this means that it will not detect small file edits which result in the same string length. This also means that it doesn't try to create blobs for every file and get the size; and that it doesn't do full file or line comparisons. It's not ideal, but it's light and fast and responsive enough for me.

When a file string length changes a `location.reload()` gets fired.

The current view (be it HTML or PHP or whatever dynamicly generated contraption) is also included in the list of files that are checked for changes. This may or may not apply to your whole project, depends on where you decide to add the script.

That's all - simple and stupid. Now grab it and get back to coding!

## Changes 

- 19/05/2021 Added github pages page; added minified version and a download link to docs; tweaks to docs.
- 11/12/2020 Initial commit, initial documentation, tweaks to both 

## To Do

- change API to take a settings object 
  - a strings blacklist to exclude files from the checks
  - option to check binary files maybe (I'm thinking image files). IDK, might run too slowly
  
- rewrite to remove jQuery dependency
  
- optimization. If you know a way to make the ckeck even faster without adding more than a hundred lines of code - let me know! I'd like to keep this light and short, though.


## Requests for various bugs and tweaks will be aproved if they are aligned with the project goals and based on donations.
## Requests to package this for your favourite package/dependency/module mess manager will be denied.

## Cheers!
 
