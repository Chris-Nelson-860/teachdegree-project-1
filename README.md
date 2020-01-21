# Techdegree-project-1
This is the first project in the full stack JavaScript program.  The goal of the project was to create a random quote generator.

**Below is a description of my approach**
1. First I created the data structure to hold the quotes.  Each quote is an object containing two properties- "quote" and "source".  Optionally, the quotes can contain a property "citation" and "year".  The quote objects are stored in an array.
    - *This task was easy for me to accomplish.*

2. Next I needed to create a function that would generate a random number and get the quote object with the corresponding index number in the quote array.  Knowing that this is where I was going to start running into trouble, I branched off of the master branch to start working on this step.
    - *Using git checkout -b, I created another branch to complete this step.*
    - *After completing and testing the function, I committed it and then merged it into the master branch.*
    - *I created a new branch to work on each step of the project and then merged it back into master once it was complete and functioning.*
    - *I used git from the command line to do this because I have been told that it is very important to know how to use git from the command line if you want to become a professional developer.*

3. Next I created a function that would print out the appropriate quote.  The tricky part of this was that some of the quotes had more properties than others.  I had to use an if statement that would not print out properties that were undefined.
