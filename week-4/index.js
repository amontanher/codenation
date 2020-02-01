const PRIMARY_COLOR = 'primary'
const SECONDARY_COLOR = 'secondary'

function Alert(props){
    return(
        <div className={`alert alert-${props.color}`} role="alert">
            {props.message}
        </div>
    )
}

function Button(props){
    return(
    <button type="button" className={`btn btn-${props.color}`}>{props.title}</button>
    )
}

function CardHeader(){
    return(
        <div className="card-header">
            <img src="kroton.png"/>
        </div>
    )
}

function CardBody(props){
    return(
        <div className="card-body">
            <p>Acesse:</p>
            <a href="#">{props.link}</a>
        </div>
    )
}

function CardFooter(props){
    return(
        <div className="card-footer bg-transparent border-success">{props.footer}</div>
    )
}

function Card(props){
    return(
        <div className="card">
            <CardHeader/>
            <CardBody link={props.link}/>
            <CardFooter footer={props.footer}/>
        </div>
    )
}

function App(){
    return(
        <div>
            <Alert message="Primary" color={PRIMARY_COLOR}/>
            <Alert message="Secondary" color={SECONDARY_COLOR}/>
            <Button title="Click me" color={PRIMARY_COLOR}/>
            <Card footer="Kroton" link="www.kroton.com"/>
            {/* <Form/>
            <Nav/>
            <ListGroup/>
            <Spinner/>
            <Table/> */}
        </div>
    )
}

ReactDOM.render(App(), document.querySelector('#root'))