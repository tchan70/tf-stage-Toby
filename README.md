# Orders App Exercise

## Getting Started

Prerequisites:

- Node v18 (recommended), v10 and higher versions should also work.
- Yarn (v1 by default, v2 may work but is un-tested).
- **Note:** You can switch to npm if you want - just generate a lockfile and remove the Yarn one

Install and start:

- `yarn`
- `yarn start`
- Begin your implementation

## Exercise

Using TypeScript and React, create a small web application that displays orders. It should look something like this:

![Mockup](mockup.jpg)

Requirements:

- On the home page, a button should be displayed that takes me to /orders (nothing else on home page)
- All orders should be displayed by default on /orders
- Users can filter by Accepted/In Progress/Complete orders (one at a time)
- When on the orders page, the document's title (i.e. the text of the browser tab name) should contain a number that matches the number of orders currently being displayed (e.g. "(12) My Orders")
- The number of currently visible orders should also be displayed within the page
- Users can jump between Accepted/In Progress/Complete directly
- When users have an order filter on, it should be displayed at the top of the list, with an "X" button/icon which is used to dismiss the current filter

Please note:

- This project was created with Create React App (with TypeScript support added). You are free to add any tooling at your discretion, if you think it will help you. If you find an issue that is preventing you from doing the task, please contact Steve
- You should consume the order data directly as raw JSON. This is a purely client-side exercise.
- You are not being marked on the visual output. `antd` is included out of the box - it is recommend to use standard antd components. You may wish to write a small amount of CSS for the basic page layout.
- It's expected that the exercise will take 30-60 minutes

## Bonus

For bonus points, provide a written rationale (or implementation if you wish) for how you would cover your work with unit tests. Please note this is **not expected** as we wish to respect candidates' time. This can also be discussed at the following interview.

## Submission

Please send your solution as a .zip to Steve (stevenjchapman@gmail.com). Please don't include node_modules.
Alternatively, you can share a link to your repo. **Note:** please create a repo from scratch rather than forking the solution where possible.

## Feedback

For any clarifications or feedback on this exercise, please contact Steve (stevenjchapman@gmail.com)
