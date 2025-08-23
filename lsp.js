//Liskov Substitution principle. 
//👉 Definition (short): Objects of a superclass should be replaceable with objects of a subclass without breaking the functionality of the program.

/* This violates LSP */
class Bird {
  fly() {
    console.log("I can fly");
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("I can't fly");
  }
}

/* Corresponds to LSP */
class Bird {
  // general bird behavior
}

class FlyingBird extends Bird {
  fly() {
    console.log("I can fly");
  }
}

class Penguin extends Bird {
  swim() {
    console.log("I can swim");
  }
}
