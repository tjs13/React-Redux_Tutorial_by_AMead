class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.pickOption}
          disabled={!this.props.hasOptions}
        >
          What should I read?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.deleteOptions}>Remove all</button>
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