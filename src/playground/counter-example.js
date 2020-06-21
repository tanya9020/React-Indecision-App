class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.handleAddOne = this.handleAddOne.bind(this);
      this.handleMinusOne = this.handleMinusOne.bind(this);
      this.handleReset = this.handleReset.bind(this);
      this.state = {
        count: 0
      };
    }

    componentDidMount(){
      const stringCount=localStorage.getItem('count');
      const count=parseInt(stringCount,10);
      if(!isNaN(count)){
        this.setState(()=> ({count}));
      }
    }

    componentDidUpdate(prevProps,prevState){
      if(prevState.count!==this.state.count){
        localStorage.setItem('count',this.state.count);
        console.log('componentDidUpdate');

      }
    }
    
 
  
    
    handleAddOne() {
      this.setState((prevState) => {
        return {
          count: prevState.count + 1
        };
      });
    }
    handleMinusOne() {
      this.setState((prevState) => {
        return {
          count: prevState.count - 1
        };
      });
    }
    handleReset() {
      this.setState(() => {
        return {
          count: 0
        };
      });
    }
    render() {
      return (
        <div>
          <h1>Count: {this.state.count}</h1>
          <button onClick={this.handleAddOne}>+1</button>
          <button onClick={this.handleMinusOne}>-1</button>
          <button onClick={this.handleReset}>reset</button>
        </div>
      );
    }
  }


  
  ReactDOM.render(<Counter />, document.getElementById('app'));



/*
let count=0;

const minusOne = () =>{
    //console.log('minusOne');
    count--;
    renderCounterApp();
};

const reset = () => {
  //  console.log('reset');
    count=0;
    renderCounterApp();
};

const appRoot=document.getElementById('app');

const renderCounterApp = () =>{
    const templateThree=(
        <div>
            <h1>Count : {count} </h1>
           <button onClick={minusOne}>-1</button>
           <button onClick={reset}> reset</button>
        </div>
    );

    ReactDOM.render(templateThree,appRoot);

};

renderCounterApp();
*/