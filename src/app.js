class IndecisionApp extends React.Component {
  render() {
    const titleVar = "Indecision App";
    const subtitleVar = "Read more good books!";
    const optionsVar = ["Thing 1", "Thing 2", "Thing 3"]
    return (
      <div>
        <Header title={titleVar} subtitle={subtitleVar}/>
        <Action />
        <Options options={optionsVar}/>
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.titleVar}</h1>
        <h2>{this.props.subtitleVar}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  handlePick() {
    alert("You clicked!")
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I read?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.removeAll = this.removeAll.bind(this);
  }
  removeAll() {
    console.log(this.props.options)
  }
  render() {
    return (
      <div>
        <button onClick={this.removeAll}>Remove all</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />
          )
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.optionText}
        </ul>
      </div>
    )
  }
}

class AddOption extends React.Component {
  addOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    console.log(e.target.elements.option.value);
    if(option) {
      alert(option)
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.addOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));