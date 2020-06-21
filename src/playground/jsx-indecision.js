console.log("hiii");
//JSX

const obj={
    title:'Indecision App',
    subtitle:'Put your life in the hands of the computer',
    options:[]
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option=e.target.option.value;
    if(option){
        obj.options.push(option);
        e.target.option.value='';
        render();
    }
};

const removeAll = () => {
    obj.options=[];
    render();
};

const makeDecision = () => {
    const randomNum= Math.floor(Math.random() * obj.options.length);
    alert(obj.options[randomNum]);
};

const render=()=>{
    const template=(
        <div>
        <h1>{obj.title}</h1>
        { obj.subtitle && <p>{obj.subtitle}</p> }
        <p>{obj.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <p>{obj.options.length}</p>
        <ol>
        {
            obj.options.map((option) =>{
                return <li key={option}>{option}</li>;
            } )
        }
        </ol>

        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add option</button>
            <button onClick={removeAll}>Remove All</button>
            <button disabled={obj.options.length===0} onClick={makeDecision} >What should i do?</button>
        </form>
        {/* obj.options.length > 0 ? "Here are your options" : "No options" */}
        </div>
    );

    ReactDOM.render(template,appRoot);

};

const templateTwo=(
    <div>
    <h1>Tanya</h1>
    <p>Age:21</p>
    <p>Location:India</p>
    </div>
);

const appRoot=document.getElementById('app');
render();
