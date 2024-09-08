const fs = require('fs');

// Write to a file named welcome.txt
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('File created and saved!');
});

// Read from hello.txt and log the content
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
