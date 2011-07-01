
VVVV.Core.MainLoop = function(graph) {
  
  var fps = 60;
  var framecount = 0;
  var dom = new VVVV.Core.DOMInterface(graph);
  var run = true;
  
  function update() {
    framecount ++;
    var start = new Date().getTime();
    dom.populateInputConnectors();
    graph.evaluate();
    dom.processOutputConnectors();
    var elapsed = new Date().getTime()-start;
    window.status = elapsed;
    if (run)
      window.setTimeout(update, Math.max(0, Math.round(1000/fps-elapsed)));
  }
  
  this.stop = function() {
    run = false;
  }
  
  this.start = function() {
    run = true;
    update();
  }
  
  this.isRunning = function() {
    return run;
  }
  
  update();
  

}