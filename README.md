# _<p align="center">Basalt Design System</p>_

## PLANNING

- [x] Add readme with notes on planning and ideas
- [x] Update props in all the files, and organize files
- [x] Add eslint and prettier to project
- [x] Install node-sass
- [x] Create Stylesheets for all components that need styles
- [x] Organize all svgs and images into assets folder
- [] Identify and create reusable components and add all the different states to them
- [] Build from mobile first
- [x] Look up react carousels
- [x] Add states for loading - for a better UX Experience
- [] Note to self: I can use any react library to add to the app
- [] Verify that the app is responsive in Chrome, Firefox, and Safari
- [] Add util function to update px to em

## RESEARCH/DISCOVER:

- Animations are pulled from the AOS - Animate on scroll library: https://www.npmjs.com/package/aos
- The spinner for the loading page UX is from React Bootstrap - https://react-bootstrap.github.io/

## THOUGHT PROCESS/ADJUSTMENTS:

- Navbar - I added a hover effect on the navigation items and wrapped them in a <Link> tag from the React-Router-Dom library so essentially they would be updated and contain a link to route the user to a different page.
- Carousel - I noticed that the background image from the designs of the carousel was a little grainy and harsh on the eyes. It made me think that there may possibly be accessablility issues since the H1 font was also designed to be #fffff (white). I decided to opt out of the banner image all together and created a similar UI for 3 differnet slides on the carousel. 
- 

## COLOR PALETTE
- White #FFFFFF
- Black #000000
- Subtle Black #191919
- Grey #7E8896
- Lime Green #D4CB02

resource: https://coolors.co/

## TECHNOLOGIES USED

| Development Tools & Technologies |
| :------------ |
| Create React App |
| Node Sass |
| AOS, React Bootstrap, React-Router-Dom |
| ES5/ES6/ES7 JavaScript |
| Prettier & Eslint |

## SET UP:

* Clone repository on your local computer.
* Install application
### `npm install`
* In the project directory, you can run:
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### License

Copyright (c) 2019 ****_Julia Sheremet_****

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.