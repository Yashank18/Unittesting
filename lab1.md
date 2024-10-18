# Assignment: Day 1 Unit Testing with Jest and TypeScript

## Objective

Practice writing unit tests using Jest and TypeScript by implementing and testing a simple `Character` class. This exercise will help you understand basic testing concepts, use different matchers, and learn how to test for errors.

---

## Instructions

### 1. Create a `Character` Class

- **Properties:**
  - `name` (string): The name of the character.
  - `position` (object with `x` and `y` coordinates): The current position of the character, initialized to `{ x: 0, y: 0 }`.
  - `health` (number): The health of the character, starting at `100`.
  - `ammo` (number): The amount of ammunition the character has, starting at `10`.

- **Methods:**
  - `move(direction: string, distance: number)`: Moves the character in the specified direction (`"up"`, `"down"`, `"left"`, `"right"`) by the given distance.
    - Updates the `position` accordingly.
    - Throws an error if the direction is invalid.
  - `shoot()`: Reduces `ammo` by `1` and returns the string `"Shot fired!"`.
    - If `ammo` is `0` or less, throws an error with the message `"Out of ammo!"`.
  - `takeDamage(amount: number)`: Reduces `health` by the given `amount`.
    - `health` should not fall below `0`.
  - `heal(amount: number)`: Increases `health` by the given `amount`.
    - `health` should not exceed `100`.

---

### 2. Write Unit Tests

- Create a test file named `character.test.ts`.
- **Test Cases:**
  - **`move` Method:**
    - Test moving in all valid directions.
    - Verify that the position updates correctly.
    - Test that an error is thrown when an invalid direction is provided.
  - **`shoot` Method:**
    - Test that `ammo` decreases by `1` after shooting.
    - Verify the correct message is returned.
    - Test that an error is thrown when trying to shoot with `0` ammo.
  - **`takeDamage` and `heal` Methods:**
    - Test that `health` decreases/increases by the correct amount.
    - Ensure `health` does not exceed its boundaries (`0` and `100`).
- **Use Different Matchers:**
  - Utilize Jest matchers such as `toBe`, `toEqual`, `toThrow`, `toBeLessThanOrEqual`, etc.
- **Testing Errors:**
  - Ensure that errors are properly tested and expected when invalid inputs are provided.

---

### 3. Set Up Jest and TypeScript

- **Initialize a New Node.js Project:**
  - Run `npm init -y` to create a `package.json` file.
- **Install Dependencies:**
  - Install Jest and TypeScript by running:
    ```bash
    npm install --save-dev jest ts-jest @types/jest typescript
    ```
- **Configure TypeScript:**
  - Run `npx tsc --init` to create a `tsconfig.json` file.
- **Configure Jest for TypeScript:**
  - Run `npx ts-jest config:init` to create a `jest.config.js` file configured for TypeScript.

---

### 4. Run Your Tests

- **Add Test Script to `package.json`:**
  - Modify the `"scripts"` section to include:
    ```json
    "scripts": {
      "test": "jest"
    }
    ```
- **Execute Tests:**
  - Run `npm test` to execute your test suite.
- **Ensure All Tests Pass:**
  - Verify that all your tests are passing and cover the specified scenarios.

---

## Deliverables

- **`character.ts`:** The implementation of the `Character` class with all specified properties and methods.
- **`character.test.ts`:** The unit test file containing all the test cases covering the `Character` class methods.
- **Test Results:**
  - All tests should pass when running `npm test`.

---

## Tips

- **Code Organization:**
  - Keep your code clean and well-commented for readability.
- **Error Handling:**
  - Ensure that your methods handle invalid inputs gracefully by throwing appropriate errors.
- **Test Independence:**
  - Use `beforeEach` or `beforeAll` in your tests to initialize objects to ensure tests do not affect each other.
- **Edge Cases:**
  - Consider edge cases such as moving with zero distance, taking more damage than current health, or healing beyond maximum health.

---

## Submission

- **Submit your code files (`character.ts` and `character.test.ts`) in a GitHub repository or via email as specified by your instructor.**
- **Include any additional notes or comments explaining your implementation or any challenges faced.**

---

Happy Coding!
