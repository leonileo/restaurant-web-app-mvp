// PROJECT POWERD BY LABA CREATIVES
// index.js
// Import necessary modules
const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db.js')
const accountRoutes = require('./routes/accountRoutes.js')
const authRoutes = require('./routes/authRoutes.js')
const foodRoutes = require('./routes/foodRoutes.js')
const eventRoutes = require('./routes/eventRoutes.js')
const specialsRoutes = require('./routes/specialsRoutes.js')
const categoryRoutes = require('./routes/categoryRoutes.js')
const uploadRoutes = require('./routes/uploadRoutes.js')
const dashboardRoutes = require('./routes/dashboardRoutes.js')
const homePageRoutes = require('./routes/homePageRoutes.js')
const { notFound, errorHandler } = require('./middleware/errorMiddleware.js')

const port = process.env.PORT || 5000
const ENV = process.env.NODE_ENV || "development"
connectDB()
// initialize app
const app = express()

// main function
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/apiv1/account', accountRoutes)
app.use('/apiv1/auth', authRoutes)
app.use('/apiv1/food', foodRoutes)
app.use('/apiv1/event', eventRoutes)
app.use('/apiv1/specials', specialsRoutes)
app.use('/apiv1/categories', categoryRoutes)
app.use('/apiv1/upload', uploadRoutes)
app.use('/apiv1/homepage', homePageRoutes)
app.use('/apiv1/dashboard', dashboardRoutes)

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use('/uploads', express.static('/uploads'));
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  const __dirname = path.resolve();
  app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

app.use(notFound);
app.use(errorHandler);

// start listening on port 6000
app.listen(port, () => {
    console.log(`Server started on port ${port}, in ${ENV} mode.`)
})

// PROJECT POWERD BY LABA CREATIVES