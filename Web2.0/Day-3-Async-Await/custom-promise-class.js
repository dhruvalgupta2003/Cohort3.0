/**
 * Creating your own `Promise` class is an advanced topic that involves understanding how promises work under the hood. Here, I'll walk you through a basic implementation of a custom `Promise` class with the core functionality like `then`, `catch`, and `resolve`.

### Basic Implementation of a Custom Promise Class

```javascript

```

### Explanation

- The custom `MyPromise` class allows chaining `.then()` and handling errors with `.catch()`, much like the native `Promise`.
- It handles asynchronous operations and executes handlers based on the state of the promise.
- This is a simplified version and lacks advanced features like `Promise.all`, `Promise.race`, and proper handling of async values, but it covers the basics of promise functionality.
 */

class MyPromise {
    constructor(executor) {
        this.state = 'pending'; // The initial state of the promise
        this.value = undefined; // The resolved value or rejection reason
        this.handlers = []; // Handlers for then and catch

        const resolve = (value) => {
            if (this.state !== 'pending') return;

            this.state = 'fulfilled';
            this.value = value;
            this.handlers.forEach((handler) => this.handle(handler));
        };

        const reject = (reason) => {
            if (this.state !== 'pending') return;

            this.state = 'rejected';
            this.value = reason;
            this.handlers.forEach((handler) => this.handle(handler));
        };

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    handle(handler) {
        if (this.state === 'fulfilled') {
            if (handler.onFulfilled) {
                handler.onFulfilled(this.value);
            }
        } else if (this.state === 'rejected') {
            if (handler.onRejected) {
                handler.onRejected(this.value);
            }
        } else {
            this.handlers.push(handler);
        }
    }

    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            this.handle({
                onFulfilled: (value) => {
                    if (onFulfilled) {
                        try {
                            resolve(onFulfilled(value));
                        } catch (error) {
                            reject(error);
                        }
                    } else {
                        resolve(value);
                    }
                },
                onRejected: (reason) => {
                    if (onRejected) {
                        try {
                            resolve(onRejected(reason));
                        } catch (error) {
                            reject(error);
                        }
                    } else {
                        reject(reason);
                    }
                }
            });
        });
    }

    catch(onRejected) {
        return this.then(null, onRejected);
    }

    static resolve(value) {
        return new MyPromise((resolve) => resolve(value));
    }

    static reject(reason) {
        return new MyPromise((_, reject) => reject(reason));
    }
}
    
/**```

### Key Components

1. **Constructor**:
   - Takes an `executor` function that receives `resolve` and `reject` functions.
   - Initializes the state to `'pending'`, stores the value, and creates an array for handlers.

2. **Resolve & Reject**:
   - These functions change the state of the promise and call any handlers with the resolved value or rejection reason.

3. **Handle**:
   - This method processes the `onFulfilled` and `onRejected` functions based on the current state.

4. **Then**:
   - Registers a new handler and returns a new `MyPromise` for chaining.

5. **Catch**:
   - A shorthand for handling errors, internally calls `then` with `null` for the success handler.

6. **Static Methods**:
   - `resolve` and `reject` provide shortcuts to create a promise in the resolved or rejected state.

### Example Usage

```javascript */


const myPromise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello from MyPromise!");
    }, 1000);
});

myPromise
    .then((message) => {
        console.log(message); // Logs after 1 second
        return "Chaining MyPromise!";
    })
    .then((message) => {
        console.log(message); // Logs the chained message
    })
    .catch((error) => {
        console.error("Error:", error);
    });