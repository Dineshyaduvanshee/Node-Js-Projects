// server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;
const filePath = path.join(__dirname, 'student.json');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve the HTML form
app.get('/', (req, res) => {
  res.send(`
    <form action="/submit" method="POST">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required><br>
      <label for="age">Age:</label>
      <input type="number" id="age" name="age" required><br>
      <label for="course">Course:</label>
      <input type="text" id="course" name="course" required><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

// Handle form submission
app.post('/submit', (req, res) => {
  const { name, age, course } = req.body;

  const student = {
    name: name,
    age: parseInt(age, 10),
    course: course
  };

  fs.readFile(filePath, (err, data) => {
    let students = [];
    if (!err) {
      try {
        students = JSON.parse(data);
      } catch (parseError) {
        console.error('Error parsing JSON data:', parseError);
      }
    }

    students.push(student);

    fs.writeFile(filePath, JSON.stringify(students, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error writing to file');
      }
      res.send('Student data saved to student.json');
    });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
