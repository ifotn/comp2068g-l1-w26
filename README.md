# COMP2068G Lesson 1 - Winter 2026
These are our first Node.js files with TypeScript.
## Restoring Dependencies
If you download and unzip this repo, you will be missing the dependencies as <strong>node_modules</strong> is excluded from GitHub.  To restore the dependencies in the terminal, use:
`npm i`
## Transpiling from TypeScript to JavaScript in the Terminal
`npm run build`
## Running a JavaScript file using Node
`node dist/{fileName}.js`
## Lesson 2 Commands
`npm i express`

`npm i ts-node --save-dev` - Dev dependency, not needed for runtime

`npm i nodemon -g` - global install, not part of specific project

`npm i @types/express --save-dev` - Run express TS directly in dev mode

`npm run dev` - run TS in dev mode w/nodemon watching for changes and auto-restarting
