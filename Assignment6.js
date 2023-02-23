const fs = require('fs');
const readline = require('readline');

// Create a readline interface for reading user input from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for a number to generate multiplication table for
rl.question('Enter a number: ', (number) => {
  // Convert the user input to a number
  number = parseInt(number);

  // Create a string to store the multiplication table
  let table = '';
  for (let i = 1; i <= 10; i++) {
    table += `${number} x ${i} = ${number * i}\n`;
  }

  // Write the multiplication table to a file
  fs.writeFile(`multiplication-table-${number}.txt`, table, (err) => {
    if (err) throw err;
    console.log(`Multiplication table for ${number} saved to multiplication-table-${number}.txt`);
    rl.close();
  });
});
