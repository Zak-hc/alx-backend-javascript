export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('length must be a number');
    }
    if (Array.isArray(students)) {
      this._students = students;
    } else {
      throw new TypeError('students must be an array of sstrings');
    }
  }

  get name() {
    return this._name;
  }

  set name(a) {
    if (typeof a === 'string') {
      this._name = a;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(b) {
    if (typeof b === 'number') {
      this._length = b;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(c) {
    if (Array.isArray(c) && c.every((e) => typeof e === 'string')) {
      this._students = c;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
