function Container(props){
    return <div className="container">{props.children}</div>
}

function Button(props){
    return(
        <button className="btn btn-info">{props.title}</button>
    )
}

function Input(props){
    return(
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <input
                name={props.name}
                value={props.value}
                onChange={props.change}
                type={props.type}
                className="form-control"/>
        </div>
    )
}

function Title(props){
    return <h1>{props.title}</h1>
}

function Form(props){

}

function Table(props){

}

function App(){
    return(
        <Container>
            <section>
                <Title title="Insira um produto"/>
                {/* <Form/> */}
            </section>

            <section>
            <Title title="Produtos cadastrados"/>
                {/* <Table/> */}
            </section>
        </Container>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));