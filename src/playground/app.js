class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.addNewOption = this.addNewOption.bind(this);
    this.pickOption = this.pickOption.bind(this);
    this.deleteAllOptions = this.deleteAllOptions.bind(this);
    this.deleteOneOption = this.deleteOneOption.bind(this);
    this.state = {
      options: []
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("options")
      const options = JSON.parse(json);
      if(options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem("options", json)
      console.log("Save data");
    }
  }
  componentWillUnmount() {
    console.log("Component Will Unmount");
  }
  addNewOption(option) {
    if(!option) {
        return "Please enter a value first"
      } else if (this.state.options.indexOf(option) > -1) {
        return "You already listed that item!"
      }
    this.setState((prevState) => ({
        options: prevState.options.concat([option])
    }));
  }
  pickOption() {
    const random = Math.floor(Math.random() * this.state.options.length);
    const selected = this.state.options[random]
    alert(selected);
  }
  deleteAllOptions() {
    this.setState(() => ({
      options: []
    }))
  }
  deleteOneOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  render() {
    const subtitle = "Read more good books!";
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action
          hasOptions={this.state.options.length > 0}
          pickOption={this.pickOption} />
        <Options
          options={this.state.options}
          deleteAllOptions={this.deleteAllOptions}
          deleteOneOption={this.deleteOneOption}
        />
        <AddOption
          addNewOption={this.addNewOption}
        />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: "Indecision App"
}

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.pickOption}
        disabled={!props.hasOptions}
      >
        What should I read?
      </button>
    </div>
  );
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.deleteAllOptions}>Remove all</button>
      {props.options.length === 0 && <p>Please add an option</p>}
      {
        props.options.map((option) => (
          <Option key={option} optionText={option} deleteOneOption={props.deleteOneOption}/>
        ))
      }
    </div>
  );
}

const Option = (props) => {
  return (
    <div>
      <ul>
        {props.optionText}
        <button
          onClick={(e) => {
            props.deleteOneOption(props.optionText)
          }
        }>Remove</button>
      </ul>
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.addNewOption = this.addNewOption.bind(this)
    this.state = {
      error: undefined
    };
  }
  addNewOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.addNewOption(option);
    this.setState(() => ({ error }));
    if(!error) {
      e.target.elements.option.value = "";
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.addNewOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));