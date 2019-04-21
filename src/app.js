console.log("App.js is running");

// if statements
// ternary operators
// logical and operator

const app = {
  title: "Indecision App",
  subtitle: "Let programmers who code computers control your life!",
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if(option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderJSXApp();
  }
}

const onMakeDecision = () => {
  const random = Math.floor(Math.random() * app.options.length);
  const option = app.options[random];
  alert(option);
}

const onReset = (e) => {
  e.preventDefault();
  app.options = [];
  renderJSXApp();
}

// JSX - JavaScript XML

const appRoot = document.getElementById("app");

const renderJSXApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {/* If app.subtitle exists, then show app.subtile in <p></p> */}
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>{app.options.length}</p>

      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>

      <button onClick={onReset}>Reset</button>
    
      <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

renderJSXApp();


