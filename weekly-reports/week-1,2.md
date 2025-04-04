# Week 1,2 - Internship Report

## ✅ Tasks Completed
- Set up development environment
- Learned Git basics: `clone`, `commit`, `push`
- Explored company project structure
- Studied **SOLID Principles** for writing better code
- OOps Concepts
- Git and version control
- HTML- Structure of a webpage,semantic elements,forms and tables
- JavaScript - Variables,datatypes,functions,DOM manipulations and events

## ❗ Challenges Faced
- Understanding object-oriented design principles 
- Refactoring code to follow best practices
- By troubleshooting step-by-step and learning more about GitHub authentication and SSH configuration, I was able to successfully resolve the issue and gained valuable hands-on experience with Git internals, access management, and SSH-based authentication.


## 🎯 Learnings

### **SOLID Principles
SOLID principles are essential for writing maintainable and scalable object-oriented code.

#### **SRP – Single Responsibility Principle
A class should have **one and only one reason to change**.  
By keeping responsibilities separate, we increase code **reusability**

#### **OCP – Open Closed Principle
Software entities should be open for extension but closed for modification.

#### **LSP – Liskov Substitution Principle
Subtypes must be substitutable for their base types.

#### **ISP – Interface Segregation Principle
"A class should not be forced to implement interfaces it does not use."

#### **DIP – Dependency Inversion Principle
"High-level modules should not depend on low-level modules. Both should depend on abstractions."



### **OOP Concepts

Encapsulation - hiding the internal details of a class and only exposing what is necessary. It helps keep the data safe and organized.

Inheritance - allows one class to use the properties and methods of another class. It promotes code reuse.

Polymorphism - means the same method can behave differently depending on the object that is calling it. It helps in writing flexible and reusable code.

Abstraction - means hiding the complex logic and showing only the essential features. It simplifies the use of complex systems.



### **Git and Version Control
Version control tracks changes in files over time.

# *Types:

Local VCS

Centralized VCS (e.g., SVN)

Distributed VCS (e.g., Git)

# *Basic Git Commands

git init

git status

git add filename / git add .

git commit -m "message"

git log

git branch <name>

git checkout <name> / git switch <name>

git checkout -b <name> / git switch -c <name>

git merge <branch>

git remote add origin <url>

git push origin <branch>

git pull origin <branch>

git branch -d <name>

git push origin --delete <name>


# *Pull Request Workflow

Clone repo

Create new branch

Make changes

Push changes

Create pull request

Review & merge


### **HTML - Structure of a webpage,semantic elements,forms and tables

# *HTML - is used to create the structure of a webpage.

<!DOCTYPE html>
<html>
<head>
    <title>Health catalyst </title>
</head>
<body>
    <header>
        <h1>HC_DOC</h1>
        <nav>
            <ul>
                <li><a href="#">Weekly Report</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Progress</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section>
            <h2>Intro</h2>
            <p>This is the Kundana Full Stack Intern Mentro Sanjay</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Interns Page</p>
    </footer>
</body>
</html>

# *Semantic Elements - **clearly define the meaning of the content for both browsers and developers.** 
1)Document Structure Elements- <header>,<nav>,<main>,<section>,<article>,<aside>,<footer>
2)Text & Content Elements - <h1> to <h6> ,<p>,<blockquote>,<cite>,<figcaption>,<figure>
3)Table & List Elements - <table>,<thead>,<tbody>,<tfoot>,<ul>,<ol>,<li>
4)Forms & Input Elements - <form>,<fieldset>,<legend>,<label>,<input>,<textarea>,<select>,<option>
5)Multimedia Elements - <audio>,<video>,<source>,<track>,<img>,<svg>,<canvas>


# *Forms -**HTML forms are used to collect user input. They contain form elements like text fields, checkboxes, radio buttons, submit buttons, etc.**
Ex:-
!DOCTYPE html>
<html>
  <body>
    <h2>Health Catalyst Attendance Form</h2>
    <form action="#" method="post">
        <label for="role">Select Role:</label>
        <select id="role" name="role" required>
            <option value="Mentor">Mentor</option>
            <option value="Intern">Intern</option>
        </select>

        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="domain">Select Domain:</label>
        <select id="domain" name="domain" required>
            <option value="Full Stack">Full Stack</option>
            <option value="Testing">Testing</option>
            <option value="DevOps">DevOps</option>
        </select>

        <label for="review">Review Selections:</label>
        <textarea id="review" name="review" rows="3" placeholder="Enter any comments..." required></textarea>

        <label for="date">Select Date:</label>
        <input type="date" id="date" name="date" required>

        <button type="submit">Submit</button>
    </form>
</body>
</html>

# *Tables - **HTML tables are used to display data in rows and columns format.Used To organize and present structured information like schedules, lists, or reports.**
EX:-
<table border="1">
  <thead>
    <tr>
      <th>Role</th>
      <th>Name</th>
      <th>Domain</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mentor</td>
      <td>Sanjay</td>
      <td>Full Stack</td>
    </tr>
    <tr>
      <td>Intern</td>
      <td>Kundana</td>
      <td>Full Stack</td>
    </tr>
    <tr>
      <td>Intern</td>
      <td>Shashi</td>
      <td>Full Stack</td>
    </tr>
  </tbody>
</table>



### **JavaScript - Variables,datatypes,functions,DOM manipulations and events
->Variables are containers used to store data values.Declared using var, let, or const.

# *JavaScript has two types of data:
->Primitive (Stores single values): String, Number, Boolean, Null, Undefined, Symbol, BigInt
->Non-Primitive (Stores collections): Object, Array, Function

->Functions are blocks of reusable code that perform specific tasks.
->DOM (Document Object Model) allows JavaScript to manipulate HTML elements dynamically.

# *JavaScript Events -**Events are actions that happen in the browser (clicks, typing, scrolling, etc.)**

# *Common Events
onclick	-Triggered when an element is clicked
onmouseover-Triggered when the mouse hovers over an element
onmouseout-Triggered when the mouse leaves an element
onkeyup-Triggered when a key is released
onsubmit-Triggered when a form is submitted
