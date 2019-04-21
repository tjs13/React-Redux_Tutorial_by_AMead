let visibility = false;

const appRoot = document.getElementById("app");

const toggle = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggle}>{visibility ? "Hide details" : "Show details"}</button>
      {visibility && (
        <div>
         <p>Look at these details</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(template, appRoot)
}

render();