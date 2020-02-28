const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const PORT = config.get('port') || 5001;
const app = express();

app.use(express.json({ extended: true }));

app.use('/api/admin/', require('./routes/routes.admin'));

const start = async () => {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    app.listen(PORT, () => {
      console.log(`Server run on port ${PORT}`);
    });
  } catch (e) {
    res.status(500).json({ message: 'Что то пошло не так, попробуйте позже' });
    process.exit(1);
  }
};

start();
