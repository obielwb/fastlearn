const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('public'));
app.use('/icons', express.static('./public/icons'));
app.use('/images', express.static('./public/images'));
app.use('/scripts', express.static('./public/scripts'));
app.use('/css', express.static('./public/styles/css'));

const homeRouter = require('./routes/home');
const communityRouter = require('./routes/community');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');

app.use('/', homeRouter);
app.use('/community', communityRouter);
app.use('/post', postRouter);
app.use('/user', userRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
