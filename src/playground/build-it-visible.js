class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.toggleVisibilty=this.toggleVisibilty.bind(this);
        this.state={
            visibility : false
        };
    }

    toggleVisibilty(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
          });
        }

    render(){
        return(
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick = {this.toggleVisibilty}>
                {this.state.visibility ? 'Hide secret' : 'Show secret'}
            </button>
            {this.state.visibility && (<p>hahaha</p>)}
        </div>
        );
    }
}


ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));



/*
let visibility = false;

const toggleVisibilty = () => {
    visibility = !visibility;
    render();
};

const render = () => {
const jsx=(
    <div>
        <h1>Visibility Toggle</h1>
        <button onClick = {toggleVisibilty}>
            {visibility ? 'Hide secret' : 'Show secret'}
        </button>
        {visibility && (<p>hahaha</p>)}
    </div>
);

ReactDOM.render(jsx,document.getElementById('app'));

};

render();
*/