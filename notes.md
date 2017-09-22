#Notes

##Data Structures

data structure - container for data
pseudoclassical method - one way to make classes, there are others.
    -using class constructors (factory) to make instances of our data structures    
until ES6, js didn't have a formal way of creating classes.
Defining a class:
1. what is it
2. what does it have
3. what does it do
objects are like nouns, functions are like verbs

F1 - "open in browser" opens html in browser from VS code.
F1 - "show side preview" opens html in side preview.
F5 - execute code (need node to compile js on computer)

##Stacks

Last In First Out (LIFO)
"push" items in and "pop" them off
can only add to the end and take from the end

Ex:
function A () {
    function B ()
}
function B() {
    function C ()
}
function A();

Call Stack:
3. function C ()
2. function B ()
1. function A ()

each of these lines is called a stack frame.

Create a new blank object:
this.storage = {};

reference count then increment it:
this.storage[this.count++]
decrement count then reference it:
this.storage[--this.count]

##Queues

First in First Out (FIFO)
Similar to line at a store.
adding in - enqueued
taking out - dequeued
can only add to the end and take from the beginning