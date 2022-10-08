const chalk = require('chalk')
const validator = require('validator')

const getNotes = require('./notes')
const notes = getNotes()
const lg = console.log
lg(notes)
lg(validator.isEmail("jamshu.mkd@gmail.com"))
lg(chalk.red.inverse.bold("How it"))
lg(process.argv)
// const fs = require("fs")
// fs.appendFileSync("notes.txt","\nThis second line append text is created by node.js")