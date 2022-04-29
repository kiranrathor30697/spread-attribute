import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Spread Attribute</h1>
        {/* {console.log(props)} */}
        {props.name}<br/>
        {props.surname}<br />
        {props.mob}
      </header>
    </div>
  );
}

export default App;
