---
sidebar_position: 1
---

# Installation

Let's discover how to **clone, install and run** the backend server.

## Repository Cloning

Clone the main repository from: [Github](https://github.com/gerzon-everneat/Neatlist/tree/pietro-Backend).

## Select Directory

Go to the server folder:

`Neatlist/server`

```bash
cd server
```

The `cd` command changes the directory you're working with.

## Server Installation

Inside the server folder install the dependencies with:

```bash
npm i
```

The `npm i` command installs the necessary dependencies to start the server.

## Server Run

Run the server with:

```bash
npm run devStart
```

The `npm run start` command builds the backend locally and serves it through a development server, ready for you to use/view at <http://localhost:3000/>.

### Verifications

If everything works fine, you should see a message in the console similar to this one:

```bash
> devStart
> nodemon index.js

[nodemon] 3.0.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js`
Neatlist express server started on port: 3000
```
