const express = require('express')
const projects = require('./projects-model')


const logger = (req, res, next) => {
    console.log('hello earth')
    next()
}

const count = (req, res, next) => {
    console.log(2)
    next()
}

module.exports = {
    logger,
    count
}