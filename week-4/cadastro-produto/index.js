function Container(props) {
  return <div className="container">{props.children}</div>;
}

function Button(props) {
  return (
    <button onClick={props.onClick} className="btn btn-info" type={props.type}>
      {props.title}
    </button>
  );
}

function Input(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        className="form-control"
      />
    </div>
  );
}

function Title(props) {
  return <h1>{props.title}</h1>;
}

function Form(props) {
  return (
    <form onSubmit={props.onSubmit}>
      {props.inputs.map((input, index) => {
        return (
          <Input
            key={index}
            name={input.name}
            value={input.value}
            onChange={input.onChange}
            type={input.type}
            label={input.label}
          />
        );
      })}
      <Button type="submit" title="Cadastrar" />
    </form>
  );
}

function Table(props) {
  return (
    <span>
      <Button title="Deletar produtos" onClick={props.onClickDeleteAll} />
      <table className="table">
        <thead>
          <tr>
            {props.head.map((item, index) => {
              return <th key={index}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.rows.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.produto}</td>
                <td>{item.valor}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </span>
  );
}

function App() {
  const [produto, setProduto] = React.useState('');
  const [valor, setValor] = React.useState(0);
  const [produtos, setProdutos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const handleProduto = onChangeEvent => {
    setProduto(onChangeEvent.target.value);
  };

  const handleValor = onChangeEvent => {
    setValor(onChangeEvent.target.valor);
  };

  const handleClickDeleteAll = () => {
    setProdutos([]);
  };

  //unico lugar para chamar uma funcao assincrona
  //usa quando componente monta
  React.useEffect(() => {}, []); //isso é para rodar apenas uma vez

  const handleSubmit = event => {
    event.preventDefault();

    const newProduto = {
      produto: produto,
      valor: valor
    };

    setProdutos(...produtos, produto);
    // setProdutos(produtos.concat(produto));
  };

  const inputs = [
    {
      name: 'produto',
      value: produto,
      onChange: handleProduto,
      type: 'text',
      label: 'Produto'
    },
    {
      name: 'valor',
      value: valor,
      onChange: handleValor,
      type: 'text',
      label: 'Valor'
    }
  ];

  const head = ['Produto', 'Valor'];

  return (
    <Container>
      <section>
        <Title title="Insira um produto" />
        <Form inputs={inputs} onSubmit={handleSubmit} />
      </section>

      <section>
        <Title title="Produtos cadastrados" />
        <Table
          head={head}
          rows={produtos}
          onClickDeleteAll={handleClickDeleteAll}
        />
      </section>
    </Container>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
