var fs = require('fs')
var scandir = require('scandir').create()

var DIR = ''

var filesStorage = []
var tempFiles = []

scandir.on('file', function(file, stats) {
   var split = file.split('/')
   tempFiles.push(split[split.length-1])
});

scandir.on('error', function(err){
	console.error(err);
});

scandir.on('end', function(){
   var deleted = 0, added = 0

   filesStorage.forEach((file) => {
      if(tempFiles.indexOf(file) < 0) {
         deleted++
      }
   })
   tempFiles.forEach((file) => {
      if(filesStorage.indexOf(file) < 0) {
         added++
      }
   })
   console.log('new files: ' + tempFiles.length)
   console.log(deleted + ' cancellati')
   console.log(added + ' aggiunti')
   filesStorage = tempFiles
   tempFiles = []
});






var scan = (dir) => {
   DIR = dir
   scanDir()
}

var scanDir = () => {
   scandir.scan({
   	dir: './files_container',
   	recursive: true,
   	filter: /.*/
   });
   setTimeout(scanDir, 5000)
}

module.exports.scan = scan
