# React Mobile browser gamepad

This is a sample mobile browser gamepad developed using ReactJs and Material UI.

## Prerequisite softwares

`node version >= 12.16.3`

`npm version >= 6.14.4`

## Build React UI

In the project directory, you can run:

### `npm run build`

After react ui build is successful, run the nodejs server app.

## Run the Server App

### `npm run server`

This will run the nodejs application on localhost, on port 3000. This server includes both http and websocket server. \
Http serves the react ui and react ui communicates the websocket.

## Access the ReactUI

Get the current system IP address (using `ipconfig` command in windows or from network preferences in mac)\
In the mobile open the browser and access the application [http://{SystemIp}:3000](http://SystemIp:3000).

**_Note: Make sure both Computer and Mobile connected to save Wifi._**

## Test

In the mobile change the mobile display mode to landscape and click on the maximize icon (top right).\
Start playing with controller and verify console log in the nodejs terminal.

## Sample mobile UI

![Alt text](/screenshots/client.jpg?raw=true)

## Sample server log.

```Client Id=J8aZz_fICxmOQUG-AAAB, Up: 0, Down: 0, Left: 1, Right:0, A: 1, B:
Client Id=J8aZz_fICxmOQUG-AAAB, Up: 0, Down: 0, Left: 0, Right:0, A: 1, B: 0
Client Id=J8aZz_fICxmOQUG-AAAB, Up: 0, Down: 0, Left: 0, Right:0, A: 0, B: 0
Client Id=J8aZz_fICxmOQUG-AAAB, Up: 0, Down: 1, Left: 0, Right:0, A: 0, B: 0
Client Id=J8aZz_fICxmOQUG-AAAB, Up: 0, Down: 1, Left: 0, Right:0, A: 0, B: 1
Client Id=J8aZz_fICxmOQUG-AAAB, Up: 0, Down: 0, Left: 0, Right:0, A: 0, B: 1
Client Id=J8aZz_fICxmOQUG-AAAB, Up: 0, Down: 0, Left: 0, Right:0, A: 0, B: 0
Client Id=J8aZz_fICxmOQUG-AAAB, Up: 0, Down: 0, Left: 0, Right:1, A: 0, B: 0
Client Id=J8aZz_fICxmOQUG-AAAB, Up: 0, Down: 0, Left: 0, Right:1, A: 0, B: 1
```

**_Note: This is a proof of concept and don't include any unit tests. May contains dirty code._**
