const yargs = require('yargs')
const notes = require('./note.js')
const chalk = require('chalk')

yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder : {
        title : {
            describe : 'Title for adding a new note',
            demandOption : true,
            type : 'string'
        },
        body :{
            describe : 'Note of body',
            type : 'string'
        }
    },
    handler:function(argv){
        if(argv.title === ''){
            console.log('Title is empty')
        }else if(notes.addNote(argv.title,argv.body)){
            console.log('Note added Successfully...')
        }else{
            console.log('Title already exists')
        }
    }
})



yargs.command({
    command : 'remove',
    describe : 'Remove a new note',
    builder : {
        title : {
            describe : 'Title for removing a  note',
            demandOption : true,
            type : 'string'
        }
    },
    handler:function(argv){
        if(argv.title === ''){
            console.log('Title is empty')
        }else if(notes.removeNote(argv.title)){
            console.log('Note removed Successfully....')
        }else{
            console.log('Title doesnot exists')
        }
    }
})

yargs.command({
    command : 'list',
    describe : 'List your notes',
    handler:function(){
        notes.listNotes()
    }
})

yargs.command({
    command : 'read',
    describe : 'Read a note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        }
    },
    handler : function (argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse()
