const Sacola = () =>{
    return(
      <div className="container">
        <header>
          <nav className="flex">
            <li>Sacola</li>
            <li>Pagamento</li>
            <li>Confirmação</li>
          </nav>
        </header>
        <section className="container-section">
          <div className="flex justify-between">
            <img src="" alt="" />
            <p>AAAAAA</p>
            <span>243</span>
          </div>
          <div className="flex justify-between">
            <img src="" alt="" />
            <p>BBBBBB</p>
            <span>243</span>
          </div>
          <div className="flex justify-between">
            <img src="" alt="" />
            <p>CCCCCCC</p>
            <span>243</span>
          </div>
        </section>
        <div className="">
          <div>
            <p>Produto</p>
            <p>Frete:</p>
            <p>desconto:</p>
            <p>Subtotal</p>
          </div>
          <button>
            Seguir para o Pagamento
          </button>
        </div>
      </div>   
    )
}

export default Sacola;