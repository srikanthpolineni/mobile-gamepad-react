# React Mobile browser gamepad

This is a sample mobile browser gamepad developed using React and Material UI.

## Prerequisite softwares

`node version >= 12.16.3`

`npm version >= 6.14.4`

## Build React UI

In the project directory, you can run:

### `npm install`

### `npm run build`

After react ui build is successful, run the nodejs server app.

## Run the Server App

### `npm run server`

This will run the nodejs application on localhost, on port 3000. This server includes both http and websocket server. \
Http serves the react ui and react ui communicates the websocket.

## Behind the scenes

React UI uses socket.io-client library for making persistance websocket connection with server.\
UI supports multi touch on mobile devices. Each time when some action is performed the consolidated keys state will be sent to to server over websocket.\
Currently it supports 6 keys i.e. Up, Down, Left, Right, A and B. Each key press is stored in byte array and sent to server as decimal.

## Access the React UI

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

## Notes

**_UI supports ONLY touch actions. Mouse clicks are not implemented by design. To test on laptop use device emulation in browser developer tools._**\
**_This is a proof of concept may contains dirty code._**
