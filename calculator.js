const express = require('express');
const ExpressError = require('./expressError');

const app = express();

const { findMode, findMean, findMedian } = require('/.functions');

app.get("/mean", (req, res, next) => {
    try {
        if (!req.query.nums) {
            throw new ExpressError('You must pass a list of numbers seperated by commas', 400)
        }
        let result = {
            operation: "mean",
            result: findMean(nums)
        }
        return res.send(result);
    } catch (e) {
        next(e)
    }
});

app.get("/median", (req, res, next) => {
    try {
        if (!req.query.nums) {
            throw new ExpressError('You must pass a list of numbers seperated by commas', 400)
        }
        let result = {
            operation: "median",
            result: findMedian(nums)
        }
        return res.send(result);
    } catch (e) {
        next(e)
    }
});

app.get("/mode", (req, res, next) => {
    try {
        if (!req.query.nums) {
            throw new ExpressError('You must pass a list of numbers seperated by commas', 400)
        }
        let result = {
            operation: "mode",
            result: findMode(arr)
        }
        return res.send(result);
    } catch (e) {
        next(e)
    }
});

// error handlers

app.use((req, res, next) => {
    const err = new ExpressError("Not Found", 404);

    // pass onto the next error
    return next(err);
});

app.use((err, req, res, next) => {
    // setting status default to 500
    res.status(err.status || 500);

    // returning error as json 
    return res.json({
        error: err,
        message: err.message
    })
})

app.listen(3000, function () {
    console.log(`Server starting on port 3000`);
})