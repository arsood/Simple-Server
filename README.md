# Simple Server

This package allows you to run a simple Node server. This is useful in case you need a server running on a certain port to perform tasks such as setting up an SSL certificate.

## Commands Available

### `yarn start`

This will use PM2 to start a server on port 3000 by default. Pass the PORT environment variable to use another port.

### `yarn stop`

This will stop and delete the PM2 process for the server instance.

### `yarn monitor`

This command will print out the status of the PM2 server instance.

### `yarn log`

This command will print out the PM2 log for the server instance.
