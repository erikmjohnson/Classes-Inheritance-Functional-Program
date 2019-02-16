'use strict';

// These 2 should be interchangeable!
const List = require('../list');
// const List = require('../list-constructor.js');

describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('removes last item in an array', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.pop();
    expect(stuff.length).toEqual(1);
    expect(stuff.data[0]).toEqual('a');
  });

  it('removes the first item in an array', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.shift();
    expect(stuff.length).toEqual(1);
    expect(stuff.data[1]).toEqual('b');
  });

  it('adds new elements to array', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.unshift([4,5]);
    expect(stuff.length).toEqual(4);
    expect(stuff.data[2]).toEqual(4); 
  });

  it('forEach method, all elements in an object that are numbers will be multiplied by 2', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.unshift([4,5]);
    stuff.forEach();
    expect(stuff.data[2]).toEqual(8);
    expect(stuff.data[3]).toEqual(10);
  });

  it('map method, all elements in an data object values will be moved to new array', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.unshift([4,5]);
    stuff.map();
    expect(stuff.map()).toEqual([ 'a', 'b', 4, 5 ]);
  });

  it('filter method, all object values that are a number will be moved into a new array', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.unshift([4,5]);
    stuff.filter();
    expect(stuff.filter()).toEqual([ 4, 5 ]);
  });

  it('reduce method, all object values that are a number will be added together', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.unshift([4,5]);
    stuff.reduce();
    expect(stuff.reduce()).toEqual(9);
  });
});
