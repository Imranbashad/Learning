// call stack - data structure - keeep trach of function execution, and removes from stack when execution is done.
/*
Micro task(task queue)(tasks which are to be executed at later time)

-settimeout
-setInterval
-input/output Operations (press a key, mouse click etc,.)
-Ui rendering (darkmode , showing a pop up etc,.)

*/

/*
Macrotask (High Priority task that need to be executed befor rendering phase)

-Promise(.then .catch .finally)
-mutationObserver
-queueMicrotask

*/
// Event loop(consists of microtask macrotask callstack)

//  setTimeout is always asynchronus in nature even if delay is 0

/* even if there are 100 items are there in micro task stilll all are completed first and then macro task is executed
 if there are infinte loop in micro by mistake it will cause the app to freeze. */