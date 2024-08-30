import Pagina from"./componentes/layouts/Pagina";
function App() {

  return (
    <div className="App">
      <Pagina>
        <h1>Essa é a página de cadastro de cliente</h1>
      </Pagina>

      <Pagina>
        <h2>Essa é a página de cadastro de produto</h2>
      </Pagina>

      <Pagina>
        <h2>Essa é a página de cadastro de fornecedores</h2>
      </Pagina>
    </div>
  );
}

export default App;
