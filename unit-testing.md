# Unit Testing

## Why Test?
Writing tests is important to build scalable, maintanable applications that can be refactored, updated, and extended reliably.  One of the major problems in software development is regressions caused by modified code that introduce (or reintroduce) unexpected behaviors. In modern development, tests are run in automation as part of our devops process.

## Unit Tests
Unit testing is the process of testing at the 'unit' level - this is the most focused kind of testing.  Unit tests generally test public methods and ensure that with provided input and state, they produce reliably consistent output and side affects. When writing unit tests, we define an input value to the function and then assert that the return value meets our expectations. If it does, then the test passes. If it does not, then the test fails.

## Jest
Jest is our unit testing framework.  It is a framework for testing in JavaScript that has full support for unit testing, mocking, stubbing, etc. Jest can be run manually, in a pipeline, and in the cloud.  Testing should be as easy as running `npm test` in your development environment.  In the cloud, testing should be as simple as running `git clone <url>`, `npm install`, `npm test`.