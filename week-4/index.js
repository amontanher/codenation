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

function Input(props){
    return(
        <div>
            <label>{props.labelName}</label>
            <input type={props.type} className="form-control"></input>
        </div>
    )
}

function Form(){
    return(
        <div className="form-group">
            <form>
                <Input labelName="Usuario" type="text"/>
                <Input labelName="Senha" type="password"/>
            </form>
        </div>
    )
}

function NavItem(props){
    return(
        <div>
            <li className="nav-item">
                <a className={`nav-link ${props.active} href="#"`}>{props.item}</a>
            </li>
        </div>
    )
}

function Nav(){
    return(
        <ul className="nav nav-pills">
            <NavItem item="React" active="active"/>
            <NavItem item="Angular"/>
            <NavItem item="Vue.JS"/>
        </ul>
    )
}

function ListGroupItem(props){
    return(
        <a href="#" className={`list-group-item list-group-item-action ${props.active}`}>
            {props.item}
        </a>
    )
}

function ListGroup(){
    return(
        <div className="list-group">
            <ListGroupItem item="react"/>
            <ListGroupItem item="angular" active="active"/>
            <ListGroupItem item="vue.js"/>
        </div>
    )
}

function Spinner(props){
    return(
        <div className={`spinner-grow ${props.color}`} role="status">
            <span className="sr-only">
                {props.texto}
            </span>
        </div>
    )
}

function Table(props){
    return(
        <table class={`table table-${props.type}`}>
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
        </tbody>
        </table>
    )
}

function App(){
    return(
        <div>
            <Alert message="Primary" color={PRIMARY_COLOR}/>
            <Alert message="Secondary" color={SECONDARY_COLOR}/>
            <Button title="Click me" color={PRIMARY_COLOR}/>
            <Card footer="Kroton" link="www.kroton.com"/>
            <Form />
            <Nav/>
            <ListGroup/>
            <Spinner color="text-success" texto="Spinner"/>
            <Table type="dark"/>
        </div>
    )
}

ReactDOM.render(App(), document.querySelector('#root'))