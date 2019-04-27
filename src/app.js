// stateless functional component


class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.addNewOption = this.addNewOption.bind(this)
    this.pickOption = this.pickOption.bind(this)
    this.deleteOptions = this.deleteOptions.bind(this)
    this.state = {
      options: []
    };
  }
  addNewOption(option) {
    if(!option) {
        return "Please enter a value first"
      } else if (this.state.options.indexOf(option) > -1) {
        return "You already listed that item!"
      }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])
      }
    });
  }
  pickOption() {
    const random = Math.floor(Math.random() * this.state.options.length);
    const selected = this.state.options[random]
    alert(selected);
  }
  deleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }
  render() {
    const title = "Indecision App";
    const subtitle = "Read more good books!";
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action
          hasOptions={this.state.options.length > 0}
          pickOption={this.pickOption} />
        <Options
          options={this.state.options}
          deleteOptions={this.deleteOptions}
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
      <h2>{props.subtitle}</h2>
    </div>
  )
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
      <button onClick={props.deleteOptions}>Remove all</button>
      {
        props.options.map((option) => <Option key={option} optionText={option} />
        )
      }
    </div>
  );
}

const Option = (props) => {
  return (
    <div>
      <ul>
        {props.optionText}
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
    this.setState(() => {
      return { error };
    });
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