class Stack {
  stack = [];
  upperLimit = 1000;

  constructor(upperLimit) {
    this.upperLimit = upperLimit;
  }

  push(data) {
    if (this.stack.length < this.upperLimit) {
      this.stack.push(data);
    } else {
      console.log("stack overflow");
    }
  }

  pop() {
    console.log(this.stack.length, "this.stack.length");
    if (this.stack.length === 0) {
      console.log("nothing to pop");
      return;
    }
    const dataPopped = this.stack.pop();
    console.log("popped", dataPopped);
    return dataPopped;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.stack[this.stack.length - 1];
    }
    console.log("nothing to peek");
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  clear() {
    this.stack = [];
  }
}

const stackInstance = new Stack(5);
stackInstance.peek();
stackInstance.pop();
stackInstance.push(1);
console.log(stackInstance.peek());
stackInstance.push(2);
stackInstance.push(2);
stackInstance.push(2);
stackInstance.push(2);
stackInstance.push(2);
stackInstance.push(2);

console.log(stackInstance.stack);

stackInstance.pop();
stackInstance.pop();
stackInstance.pop();
stackInstance.pop();
stackInstance.pop();
stackInstance.pop();
stackInstance.pop();
stackInstance.pop();
stackInstance.pop();
stackInstance.pop();
stackInstance.pop();
console.log(stackInstance.size());
console.log(stackInstance.stack);
stackInstance.clear()
console.log(stackInstance.stack);
