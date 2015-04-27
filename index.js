'use strict';

/**
 * Simple queue ADT.
 * @module nano-queue
 */


var slice = Array.prototype.slice;

/**
 * Creates a Queue, with optional initial elements.
 * @static
 * @param {...*} [element] - optional initial elements
 * @returns {Queue}
 */
function create() {
    return slice.call(arguments);
}


/**
 * Adds one or more elements to *queue*.\
 * If no elements are passed *queue* is returned unmodified.<br>
 * `undefined` must be passed explicitly to be *enqueued*.
 * @static
 * @param {Queue} queue
 * @param {...*} [element] - Elements to enqueue
 * @returns {Queue}
 */

function enqueue(queue) {
    if (arguments.length > 1) {
        queue.push(slice.call(arguments, 1));
    }
    return queue;
}


/**
 * Returns the next element in the Queue.
 * Passing an optional position returns the element at that position.
 * Positions start at 0.
 * Negative positions start from the end.
 * @static
 * @param {Queue} queue
 * @param {number} [pos=0] - Element at `pos`
 * @return {*} element
 */

function peek(queue, pos) {
    if (pos) { pos = pos < 0 ? queue.length - pos : pos; }
    else { pos = 0; }
    return queue[pos];
}


/**
 * Removes the next element from the queue.
 * Passing an optional count removes that many elements.
 * @static
 * @param {Queue} queue
 * @param {number} [count=1] - Number of elements to remove
 * @return {Queue}
 */

function dequeue(queue, count) {
    count = count || 1;
    return queue.slice(0, count);
}


module.exports = {
    create: create,
    enqueue: enqueue,
    peek: peek,
    dequeue: dequeue
};
