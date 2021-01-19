const chalk = require('chalk')
const fs = require('fs')

const addNote = function(title,body){
    dataList = readData('notes.json')
    newDataList = dataList.filter(function(item){
        if(title != item.title){
            return true
        }else{
            return false
        }
    })
    if(dataList.length == newDataList.length){
        dataList.push({title:title,body:body})
        dataString = JSON.stringify(dataList)
        fs.writeFileSync('notes.json',dataString)
        return true
    }else{
        return false
    }
}


const removeNote = function(title,body){
    dataList = readData('notes.json')
    newDataList = dataList.filter(function(item){
        if(title != item.title){
            return true
        }else{
            return false
        }
    })
    if(dataList.length == newDataList.length){
        
        return false
    }else{
        dataString = JSON.stringify(newDataList)
        fs.writeFileSync('notes.json',dataString)
        return true
    }
}

const listNotes = function () {
    dataList = readData('notes.json')
    console.log(chalk.inverse('Your notes'))

    dataList.forEach(function(note){
        console.log(note.title)
    })
}

const readNotes = function(title){
    dataList = readData('notes.json')
    newDataList = dataList.find(function(item){
        if(title == item.title){
            return true
        }else{
            return false
        }
    })
    if(newDataList !={}){
        console.log(chalk.inverse(newDataList.title))
        console.log(newDataList.body)
    }else{
        console.log(chalk.red.inverse('Note not found'))
    }
}
   

const readData = function(filename){
    bufferData = fs.readFileSync(filename)
    dataString = bufferData.toString()
    return JSON.parse(dataString)
}
module.exports = {
    addNote : addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes : readNotes
}