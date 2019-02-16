'use strict';

class List {

  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Add item to the end of the list
   */
  push(item) {
    // Add an item to the end
    this.data[this.length] = item;
    this.length++;
  }

  /*
   * // Remove an item from the end of the list and return it's value
   */
  pop() {
    let returnValue = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return returnValue; 
  }

  shift () {
    let returnValue = this.data[this.length - this.length];
    delete this.data[this.length - this.length];
    this.length--;
    return returnValue;
  }

  unshift (array) {
    for(let i = 0; i < array.length; i++){
    this.data[this.length] = array[i];
    this.length++;
    }
  }

  forEach () {
    for(let i = 0; i < this.length; i++){
      if(typeof this.data[i] === 'number'){
        this.data[i] *= 2;
      }
    }
  }

  map () {
    let newArray = [];
    for(let i = 0; i < this.length; i++) {
      newArray.push(this.data[i]);
    }
    return newArray;
  }

  filter () {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
      if (typeof this.data[i] === 'number') {
        newArray.push(this.data[i]);
      }
    }
    return newArray;
  }

  reduce () {
    let total = 0;
    for (let i = 0; i < this.length; i++) {
      if (typeof this.data[i] === 'number') {
        total += this.data[i]
      }
    }
    return total;
  }

}

module.exports = List;
