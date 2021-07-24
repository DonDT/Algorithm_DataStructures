// HASH TABLE

/**
 * Hash tables are used to store key-values pairsjj
 * The keys in hash tables are not ordered
 * They are fast for finding, adding, removing values
 */

// To implement a hash table, we use arrays

// IN orxer to look up values by key, we need a way to convert keys into valid array indices.

// The function that perfomrs this task is called a hash function

// A hash function makes sure, no matter what the input is the output is of fixed size

/**
 * A Good hash function needs to be fast
 * Dosen't cluster outputs at specific indices, but distributes uniformly
 * We want it to be deterministic(same input always gives out same output)
 */

// Basic string hash function

// this only hashes strings, non constant time - linear in length,could be a little more random

// Handling Collision

/**Methods
 * 1) Seperate chaining
 * 2) Linear Probbing
 */

//Seperate Chaining => If two pairs of data returns the same hash, then we can store them together in an array.
// so there is an array that holds all the data with the same hashes

// Linear probing => we only store one piece of data at a position
// So we simply look at the next empty space and store it there, we just look for the next empty spot and store there.

class HashTable {
  constructor(size = 4) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    // value that computes and store the hash value to return
    let total = 0;
    // Prime numbers makes hash tables less collusive
    let prime = 31;
    // loop through each character of value to hash and create a hash off of it
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      // we don't want to loop more than 100 times
      // pull out each character to be hashed
      let char = key[i];
      // Getting the character code and using -96 to to get it's alphanumeric position
      let value = char.charCodeAt(0) - 96;
      // The modulu is to make it base ten so as to store it in an index
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }
  // Set, accepts a key and a value and hash the key, get the number, then go to that position
  // If there is already data there, just push this all, if there was no data
  // PLACE AN ARRAY THERE first, then push the data
  set(key, value) {
    // hash the key and return the index of where to save it
    let index = this._hash(key);
    // Check if there is a key or not, you get the rest
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return index;
  }

  // Get
  // it accepts a hash key, hashes the key, retrives the key value pair in the hash table,
  // If it's not there return undefined
  get(key) {
    // hash the key, retrieve the index
    let index = this._hash(key);
    // if there is no data return undefined,
    if (this.keyMap[index]) {
      // get the data and return it
      for (let i = 0; i < this.keyMap[index].length; i++) {
        // checking the array and returning the value
        if (this.keyMap[index][i][0] === key) return this.keyMap[index][i][1];
      }
    }

    return undefined;
  }
  //Values
  values() {
    // creat a place to store all the values
    let valuesArr = [];
    // loop through the entire key value collection
    for (let i = 0; i < this.keyMap.length; i++) {
      // is there some data
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // we could retrieve only unique data (values), so we check before we push
          if (!valuesArr.includes(this.keyMap[i][j][1]))
            valuesArr.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valuesArr;
  }
  // keys
  keys() {
    // creat a place to store all the values
    let keysArr = [];
    // loop through the entire key value collection
    for (let i = 0; i < this.keyMap.length; i++) {
      // is there some data
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // we could retrieve only unique data (values), so we check before we push
          if (!keysArr.includes(this.keyMap[i][j][0]))
            keysArr.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keysArr;
  }
}

// let hashTable = new HashTable();

// console.log(hashTable.set("hello world", "goodbye!!"));
// console.log(hashTable.set("mother", "Akasha!!"));
// console.log(hashTable.set("mom", "Akasha!!"));
// console.log(hashTable.set("papa", "Asun"));
// //console.log(hashTable.get("mother"));
// console.log(hashTable.values());
// console.log(hashTable.keys());
// console.log(hashTable);

// BIG O HASH Table
/**
 * Insert: O(1)
 * Deletion: O(1)
 * Access: O(1)
 */
