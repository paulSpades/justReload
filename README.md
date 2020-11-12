# justReload

A simple(stupid) and easy to use auto-reload script.

## Requirements:

_Requires jQuery_, for now.
Nothing else. This will NOT be another NPM 'project'.

## Use:

Download and include the justReload script into your development view
  
    <script src="../js/justReload.js"></script>
  
Instantiate the constructor to a new object
    
    let reload = new justReload();

The constructor takes a single parameter - 'time' in miliseconds (you can figure out what it does) - default is `4000`

    let reload = new justReload(300);
    
Remember to remove the line in the production version (however you do that for other scripts) or just comment it out


## How it works

The script just tries to find a list of script and link tags to check for changes.
For each path in the list there's a `get` request that will trigger.

It then checks the string length of the file to it's previous string length - this means that it will not detect small edits which result in the same string length.

When a file string length changes a `location.reload()` gets fired.

The current view (be it HTML or PHP or whatever dynamicly generated contraption) is also included in the list of files that are checked for changes. This may or may not apply to your whole project, depends on where you add the script.

That's all - simple and stupid. Now grab it and get back to coding!

## To Do

- change API to take a settings object 
  - a strings blacklist to exclude files from the checks
  - option to check binary files maybe (i'm thinking image files). IDK, might run too slow
  
- optimization. If you know a way to make the ckeck even faster without adding more than a hundred lines of code - let me know!

### Requests to package this for your favourite package/dependency/module mess manager will be denied.

### Cheers!
 
