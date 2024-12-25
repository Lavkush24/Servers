const mongoose = require("mongoose");
const Todo = require("./Todo.js");

main()
    .then(() => {
        console.log("database is connected");
    }).catch((e) => {
        console.log(e)
    });

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/todoApp');
}

const todos = [
    { title: "Learn JavaScript Basics", description: "Study variables, loops, and functions.", completed: false },
    { title: "Set Up Node.js", description: "Install Node.js and configure environment variables.", completed: true },
    { title: "Create Portfolio Website", description: "Design a portfolio using HTML, CSS, and JavaScript.", completed: false },
    { title: "Learn Express.js", description: "Build a simple API using Express.js and test with Postman.", completed: true },
    { title: "Database Integration", description: "Connect MongoDB to a Node.js application.", completed: false },
    { title: "Play Badminton", description: "Spend an hour playing badminton with friends.", completed: false },
    { title: "Cybersecurity Basics", description: "Learn about common security threats and best practices.", completed: true },
    { title: "Work on Heart Disease Model", description: "Refine the classification model for predicting heart disease.", completed: false },
    { title: "Deploy Application", description: "Deploy the project on a cloud platform like Heroku or AWS.", completed: true },
    { title: "Improve UI Design", description: "Enhance the styling of the login and signup pages.", completed: false },
    { title: "Research AI Trends", description: "Read about the latest advancements in AI and ML.", completed: true },
    { title: "Optimize Website Performance", description: "Reduce image sizes and implement lazy loading for better performance.", completed: false },
    { title: "Attend Coding Workshop", description: "Participate in a workshop to improve coding skills.", completed: true },
    { title: "Fix Bugs in API", description: "Debug and fix issues in the API endpoints.", completed: false },
    { title: "Create Presentation Slides", description: "Prepare slides for the upcoming project presentation.", completed: true },
    { title: "Write Blog on Cybersecurity", description: "Draft an article on ethical hacking for beginners.", completed: false },
    { title: "Prepare for Coding Interview", description: "Practice common data structures and algorithms.", completed: true },
    { title: "Build a Chat Application", description: "Develop a real-time chat app using Socket.IO.", completed: false },
    { title: "Update GitHub Repositories", description: "Push latest project changes to GitHub and improve documentation.", completed: true },
    { title: "Read ML Book", description: "Study two chapters from a book on machine learning basics.", completed: false },
    { title: "Refactor JavaScript Code", description: "Refactor the current project code to make it more efficient.", completed: true },
    { title: "Learn Python", description: "Complete the Python basics course on Codecademy.", completed: false },
    { title: "Research Web Scraping", description: "Learn about web scraping with Python using BeautifulSoup.", completed: true },
    { title: "Test Website Responsiveness", description: "Ensure the website is fully responsive across all devices.", completed: false },
    { title: "Learn Docker", description: "Set up Docker for a project to learn containerization.", completed: true },
    { title: "Create REST API", description: "Build a RESTful API for a project using Node.js and Express.", completed: false },
    { title: "Write Unit Tests", description: "Write unit tests for the functions in the application.", completed: true },
    { title: "Practice Data Structures", description: "Review and solve problems related to arrays, stacks, and queues.", completed: false },
    { title: "Build a Weather App", description: "Create a weather app using an API to fetch weather data.", completed: true },
    { title: "Learn Version Control", description: "Learn how to use Git and GitHub for version control.", completed: false },
    { title: "Study Advanced SQL", description: "Learn complex queries, joins, and optimization in SQL.", completed: true },
    { title: "Optimize Mobile App", description: "Work on optimizing the mobile app performance.", completed: false },
    { title: "Setup CI/CD Pipeline", description: "Set up continuous integration and continuous deployment for a project.", completed: true },
    { title: "Explore TensorFlow", description: "Begin exploring TensorFlow for machine learning.", completed: false },
    { title: "Attend AI Meetup", description: "Attend a local or virtual AI meetup to network and learn.", completed: true },
    { title: "Learn React.js", description: "Start learning React.js through tutorials and build a sample project.", completed: false },
    { title: "Debug Frontend Issue", description: "Identify and fix the bug causing layout issues in the frontend.", completed: true },
    { title: "Understand Cloud Computing", description: "Research cloud services like AWS, Azure, and GCP.", completed: false },
    { title: "Implement Authentication", description: "Integrate user authentication using JWT for an app.", completed: true },
    { title: "Create a Portfolio Blog", description: "Set up a personal blog using WordPress or Gatsby.", completed: false },
    { title: "Learn about Cyber Threats", description: "Read about ransomware, phishing, and other common cyber threats.", completed: true },
    { title: "Study Data Science", description: "Learn the basics of data science and Python libraries like Pandas and NumPy.", completed: false },
    { title: "Create GraphQL API", description: "Build a GraphQL API to understand its concepts and advantages.", completed: true },
    { title: "Participate in Hackathon", description: "Join an upcoming hackathon to build a project in 48 hours.", completed: false },
    { title: "Attend Online Course", description: "Take a free online course on algorithms and problem-solving.", completed: true },
    { title: "Set Up Firebase", description: "Learn how to set up Firebase authentication for a project.", completed: false },
    { title: "Create an API with Python", description: "Develop a REST API using Flask in Python.", completed: true },
    { title: "Test Python Code", description: "Test the Python code and ensure that all unit tests are passing.", completed: false },
    { title: "Learn Data Visualization", description: "Learn how to visualize data using Matplotlib and Seaborn.", completed: true },
    { title: "Build a Personal Assistant", description: "Start building a personal assistant using Python and AI tools.", completed: false },
    { title: "Prepare for Technical Interview", description: "Review common interview questions and algorithms.", completed: true },
    { title: "Update LinkedIn Profile", description: "Update your LinkedIn profile with recent projects and skills.", completed: false },
    { title: "Create a Social Media App", description: "Develop a simple social media app using Node.js, Express, and MongoDB.", completed: true },
    { title: "Refactor React Code", description: "Refactor the React code to improve readability and structure.", completed: false },
    { title: "Learn about Blockchain", description: "Understand the basic principles of blockchain and how it works.", completed: true },
    { title: "Debug JavaScript Errors", description: "Fix errors in the JavaScript code related to async functions.", completed: false },
    { title: "Set Up Local Development Environment", description: "Set up a local environment for development with the necessary tools.", completed: true },
    { title: "Explore WebAssembly", description: "Learn about WebAssembly and how to use it for faster web performance.", completed: false },
    { title: "Write Technical Blog Post", description: "Write a blog post about building a Node.js API with Express.", completed: true },
    { title: "Learn about Ethical Hacking", description: "Study ethical hacking techniques and how to secure systems.", completed: false },
    { title: "Update Personal Projects", description: "Update personal projects on GitHub and improve README files.", completed: true },
    { title: "Build a Calculator App", description: "Create a simple calculator app using JavaScript and HTML.", completed: false },
    { title: "Understand Data Privacy", description: "Research data privacy regulations and how to protect user data.", completed: true },
    { title: "Master Git Commands", description: "Learn Git commands for branching, merging, and resolving conflicts.", completed: false },
    { title: "Create a Movie Review App", description: "Build an app where users can submit and view movie reviews.", completed: true },
    { title: "Explore Kubernetes", description: "Learn how Kubernetes works for container orchestration.", completed: false },
    { title: "Study Machine Learning Algorithms", description: "Understand how algorithms like KNN, SVM, and Decision Trees work.", completed: true },
    { title: "Build a Task Manager App", description: "Develop a task manager application with CRUD operations using MongoDB.", completed: false },
    { title: "Start a Coding Blog", description: "Create a blog where you share coding tutorials and tips.", completed: true },
    { title: "Learn About AI Ethics", description: "Study ethical concerns related to AI and machine learning technologies.", completed: false },
    { title: "Complete Data Structures Course", description: "Finish the online data structures course to strengthen coding skills.", completed: true },
    { title: "Host a Webinar", description: "Host a webinar about cybersecurity for students and professionals.", completed: false },
    { title: "Write Code Documentation", description: "Document the code for your latest project to improve readability.", completed: true },
    { title: "Join a Developer Community", description: "Join a developer community like StackOverflow or GitHub to collaborate.", completed: false },
    { title: "Test API Endpoints", description: "Test the REST API endpoints to check for any bugs or issues.", completed: true },
    { title: "Build a Budget Tracker", description: "Create a budget tracker application with a simple UI to track expenses.", completed: false },
    { title: "Learn SQL Joins", description: "Master SQL joins such as INNER JOIN, LEFT JOIN, and RIGHT JOIN.", completed: true },
    { title: "Build a Video Streaming App", description: "Create a basic video streaming app with features like play, pause, and stop.", completed: false },
    { title: "Understand Neural Networks", description: "Learn the basics of neural networks and how they work in deep learning.", completed: true },
    { title: "Fix UI Layout", description: "Resolve layout issues on the homepage of the web app.", completed: false },
    { title: "Explore Augmented Reality", description: "Learn about augmented reality and develop a simple AR app.", completed: true },
    { title: "Participate in Open Source", description: "Contribute to an open-source project on GitHub.", completed: false },
    { title: "Write Test Cases", description: "Write unit tests for the backend API to ensure code reliability.", completed: true },
    { title: "Learn About Natural Language Processing", description: "Understand NLP concepts and use Python to process text data.", completed: false },
    { title: "Build a Blogging Platform", description: "Create a blogging platform where users can write and share posts.", completed: true },
    { title: "Improve SEO for Website", description: "Implement SEO strategies to improve the website's search engine ranking.", completed: false },
    { title: "Learn Advanced React", description: "Study advanced React features like hooks, context API, and memoization.", completed: true },
    { title: "Work on Personal Brand", description: "Develop and promote your personal brand as a developer.", completed: false },
    { title: "Create a To-Do List App", description: "Build a simple to-do list app with the ability to add, remove, and mark tasks as complete.", completed: true },
    { title: "Learn about Quantum Computing", description: "Explore the basics of quantum computing and its potential applications.", completed: false },
    { title: "Learn About Cloud Security", description: "Study security measures and best practices for cloud environments.", completed: true }
  ];

let id = 1;
const insertDB = async () => {
    // await Todo.insertMany(todos);
    
    //delete the current data 
    await Todo.deleteMany({});
    //update the data by adding id to every object
    const updatedData = todos.map((todo) => ({...todo, _id: id++}));
    
    // insert new data
    await Todo.insertMany(updatedData);
    console.log("data is inserted");
};

insertDB();