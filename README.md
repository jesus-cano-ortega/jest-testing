# <img src="https://github.com/jesus-cano-ortega/js-introduction-exercises/blob/main/assets/resources/img/face.png" width="45" alt="Personal Logo"> Jest Testing

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://orange-harrier-neg781kt.ws-eu18.gitpod.io/)

Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly.

### Getting started 

Install Jest using NPM

```
npm install --save-dev jest

```

Let's get started by writing a test for a hypothetical function that adds two numbers. First, create a sum.js file:
```
function sum(a, b) {
  return a + b;
}
module.exports = {sum};
```

Then, create a file named test.js. This will contain our actual test:
```
const sum = require('./sum.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```
Add the following section to your package.json:
```
{
  "scripts": {
    "test": "jest"
  }
}
```

Finally, use npm run test and Jest will print this message:
```
PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)
```

##### REMEMBER: 

Once the progress and flow of the project is finished, you must commit and push the repository remotely, using the following command:

```

$ git add . 
$ git commit -m "Message"
$ git push origin repo-remote

```