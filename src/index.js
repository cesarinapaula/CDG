const React = require("react");
const ReactDom = require("react-dom");

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      prefAnimal: ""
    };
  }

  handleRadioChange = e => {
    // using es6 computed property name
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { prefAnimal } = this.state;

    return (
      <div>
        <p> Do you prefer cats, dogs, giraffes or bunnies? </p>
        <div>
          Cats
          <input
            type="radio"
            name="prefAnimal"
            value={"cats"}
            checked={prefAnimal === "cats"}
            onChange={this.handleRadioChange}
          />
        </div>
        <div>
          Dogs
          <input
            type="radio"
            name="prefAnimal"
            value={"dogs"}
            checked={prefAnimal === "dogs"}
            onChange={this.handleRadioChange}
          />
        </div>
        <div>
          Giraffes
          <input
            type="radio"
            name="prefAnimal"
            value={"giraffes"}
            checked={prefAnimal === "giraffes"}
            onChange={this.handleRadioChange}
          />
        </div>
        <div>
          Bunnies
          <input
            type="radio"
            name='prefAnimal'
            value={"bunnies"}
            checked={prefAnimal === 'bunnies'}
            onChange={this.handleRadioChange}
          />
        </div>
        <p>
          <button disabled={!prefAnimal}> submit </button>
        </p>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
