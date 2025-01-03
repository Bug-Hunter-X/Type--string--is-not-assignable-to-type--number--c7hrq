# Type 'string' is not assignable to type 'number' in TypeScript
This repo demonstrates a common type error in TypeScript, where a string is passed to a function expecting a number.  The error message is clear: 'Type 'string' is not assignable to type 'number'.

The `bug.ts` file showcases the error. The `bugSolution.ts` file presents a solution using type guards or input validation.  This example highlights TypeScript's strong typing and how it helps catch potential runtime errors at compile time.

## How to reproduce
1. Clone the repository.
2. Navigate to the project directory.
3. Compile and run the `bug.ts` file using TypeScript compiler. You'll see the error reported by the compiler.
4. Run the `bugSolution.ts` file to observe how the error can be handled.