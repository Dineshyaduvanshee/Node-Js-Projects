// app.js
const fs = require('fs');
const readline = require('readline');
const path = 'student.json';

// Create an interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to add a new student
const addStudent = (student) => {
  fs.readFile(path, (err, data) => {
    let students = [];
    if (!err) {
      try {
        students = JSON.parse(data);
      } catch (parseError) {
        console.error('Error parsing JSON data:', parseError);
      }
    }

    students.push(student);

    fs.writeFile(path, JSON.stringify(students, null, 2), (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Student data saved to student.json');
      }
      rl.close();
    });
  });
};

// Prompt user for input
rl.question('Enter the student name: ', (name) => {
  rl.question('Enter the student age: ', (age) => {
    rl.question('Enter the student course: ', (course) => {
      const student = {
        name: name,
        age: parseInt(age, 10),
        course: course
      };

      addStudent(student);
    });
  });
});
