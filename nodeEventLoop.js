//Let's say we create a file name myFile.js
// We ask Node to run the same file
//Node then takes the files and almost immediately execute it and then create these three arrays below

//List of Pending Timer Task like SetTimeout setInterval setImmediate
const pendingTimers = []
//List of pending OS Task which can be related to networking
const pendingOSTask = []
//List of pending operations like callbacks functions, thread pools or fs module
const pendingOperations = []

//Now here when the node runs this file, new timers, tasks, operations are recorded from myFile
myFile.runContents()

function shouldContinue() {
  //Check one: Any pending timer
  //Check two: Any pending os operations like listening to PORT
  //Check three: Any pending long running operation like fs module
  return (
    pendingTimers.length || pendingOSTask.length || pendingOperations.length
  )
}

while (shouldContinue()) {
  //keep running the checks until shouldContinue returns false
  //Node look at pending timers and sees if any function are ready to be called
  //Node looks at pending OS tasks and pending operations and calls the relevant callbacks
  /*
    ***important => Pause Execution. Continue when...
    -a new pending OS task is done
    -a new pendingOperation is done
    -a timer is about to complete
  */
  //Look at pending Timers and call if any setImmediate
  // Handle any close events or some cleanup processes
}

//exit back to terminal
