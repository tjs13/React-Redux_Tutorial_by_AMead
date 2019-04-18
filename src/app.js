console.log("App.js is running");

// if statements
// ternary operators
// logical and operator

const app = {
  title: "Indecision App",
  subtitle: "Let programmers who code computers control your life!",
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
const appRoot = document.getElementById("app");
