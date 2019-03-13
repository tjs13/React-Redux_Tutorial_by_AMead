console.log("App.js is running");

// if statements
// ternary operators
// logical and operator

const app = {
  title: "Indecision App",
  subtitle: "Let programmers who code computers control your life",
  options: ["One", "Two"]
}

// JSX - JavaScript XML
const template = (
  <div>
    <h1>{app.title}</h1>
    {/* If app.subtitle exists, then show app.subtile in <p></p> */}
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>

    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </div>
);

const user = {
  name: "Ryu",
  age: 19,
  location: "Honshu"
}

function getLocation(location) {
  // if location exists, return location; else return "unknown"
  if(location) {
    return <p>Location: {location}</p>;
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);