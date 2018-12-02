"use strict"

const Task = require('../models/Task')
const User = require('../models/User')

module.exports = {
    create: (req, res) => {
        Task.create( {
            name: req.body.name,
            details: req.body.details,
            due_date: req.body.date,
            status: req.body.status,
            userId: req.result._id
        }, (err, task) => {
            if (err) {
                
                res.status(501).json( {
                    error: err,
                    msg: "Please try again later"
                })
            } else {
                res.status(201).json( {
                    task:task
                })
            }
        })
    },

    getAll: (req, res) => {
        User.findOne({ email: req.result.email})
        .populate('taskList')
        .exec(function (err, user) {
          if (err)  {
              console.log(err)
          } else {
              console.log(user)
          }
        })
    }
}