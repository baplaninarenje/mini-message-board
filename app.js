const path = require('node:path');
const express = require('express');
const expressLayouts = require('express-ejs-layouts'); // Import express-ejs-layouts
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Use express-ejs-layouts middleware
app.use(expressLayouts); // This will automatically apply the layout to all views

// Set the default layout (optional if you want a different layout filename)
app.set('layout', 'layout'); // This tells express-ejs-layouts to use layout.ejs by default

const indexRouter = require('./routes/indexRouter');
const newMessageRouter = require('./routes/newMessageRouter');
const messageRouter = require('./routes/messageRouter');

// Set up routes
app.use('/message', messageRouter);
app.use('/new', newMessageRouter);
app.use('/', indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App - listening on port ${PORT}!`);
});
