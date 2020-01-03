# Getting started

To start this app, you will need to:

## Step 1: Install depenedencies

- `cd` into your new folder and run:

  Then run this step needs to be run for the fist time only:

- `npm install`

## Step 2: Set API credentials

This is done by:

- Creating a new file in the project directory with the name '.env'
- add 2 lines in the file as follows:
- API_ID=your-api-id
- API_KEY=your-api-key

## Step 3: Build the Project (client app)

To build for production:

- `npm run build`

To build for development:

- `npm run build-dev`

To start development Server:

- `npm run dev-serve`

## Step 4: Start the local server

You can start the local server as by running the following command

- `npm run start`

## Step 5: Open the client app

Open the your web explorer app and navigate to `localhost:8080`. You will get the app homepage in the exlorer.

## After the Aylien API

Once you are hooked up to the Aylien API, you are most of the way there! Along with making sure you are following all the requirements in the project rubric in the classroom, here are a few other steps to make sure you take.

- Parse the response body to dynamically fill content on the page.
- Test that the server and form submission work, making sure to also handle error responses if the user input does not match API requirements.
- Go back to the web pack config and add the setup for service workers.
- Test that the site is now available even when you stop your local server

## Deploying

A great step to take with your finished project would be to deploy it! Unfortunately its a bit out of scope for me to explain too much about how to do that here, but checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.
