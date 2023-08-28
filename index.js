const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
// const Joi = require('joi');
const groceriesRoute = require('./routes/groceries');
const marketsRoute = require('./routes/markets');

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

const PORT = 3001;

app.use((req,res, next) => {
    console.log(`${req.method}:${req.url}`);
    next();
})

app.use('/api/v1/groceries', groceriesRoute);
app.use('/api/v1/markets', marketsRoute);

app.listen(PORT, () => console.log(`Running Express Server on Port ${PORT}!`));







/*
app.get();
app.post();
app.put();
app.delete(); */

/*
const courses = [
    {id:1, name: 'Maths'},
    {id:2, name: 'Physics'},
    {id:3, name: 'English'}

]

app.get('/api/courses', (req,res) => {
    res.send(courses);
});

app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    }

    const result = Joi.validate(req.body, schema);


    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const course = {
        id: courses.length +1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
})

app.get('/api/courses/:id', (req, res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with given ID was not found');
    res.send(course);
});

app.put('./api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('The course with the given ID was not found');
    res.send(course)};

    const schema = {
        name: Joi.string().min(3).required()
    }

    const result = Joi.validate(req.body, schema);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    course.name = req.body.name;
    res.send(course);

    app.delete('/app/courses/:id', (req, res) => {
        const course = courses.find(c => c.id === parseInt(req.params.id));
        if (!course) {
            return res.status(404).send('The course with the given ID was not found')};

        const index = courses.indexOf(course);
        courses.splice(index, 1);

        res.send(course)
    })

});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening to port ${port}...`)
}); */

