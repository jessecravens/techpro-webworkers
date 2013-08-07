
var clients;

self.addEventListener("connect", function (e) {
        
    var port = e.ports[0];
    
    clients++;

    port.addEventListener("message", function (e) {
       port.postMessage("port #" + clients);
    }, false);

    port.start();

}, false);

