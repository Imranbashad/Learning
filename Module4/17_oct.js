// when ever an event occurs browser creates an object and send it to the function that handles that action.
// handler functioin is we create to handle and event (click or dbclik or submit etc)

/* 

Event Propagation: is a process in which an event moves through the DOM tree

capturing Phase: when event starts from root of dom tree and traverse to the target element is called the capturing phase

Target phase: as soon as event reaches the target node it called target phase

bubling phase: is when event goes from target to root.

when event occurs on child elements it propagates back to the parent element.

event delegation: attach one event listener to parent to all child is called e delegation

*/