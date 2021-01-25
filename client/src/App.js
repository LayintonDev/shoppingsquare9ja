import React from "react"
import data from "./data";


function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">Shoppingsquare9ja</a>
        </div>
        <div>
          <a href="/cart">cart</a>
          <a href="/signin">Sign in</a>
        </div>
      </header>
      <main>
        <div>
          <div className="row center">

            {
              data.products.map((product) => {
                return (
                  <div key={product._id} className="card">
                    <a href="/">
                      <img src={product.image} alt={product.name} />
                    </a>
                    <div className="card-body">
                      <a href={"/product/" + product._id}>
                        <h2>{product.name}</h2>
                      </a>
                      <div className="rating">
                        <span><i className="fa fa-star" /></span>
                        <span><i className="fa fa-star" /></span>
                        <span><i className="fa fa-star" /></span>
                        <span><i className="fa fa-star" /></span>
                        <span><i className="fa fa-star" /></span>
                      </div>
                      <div className="price">
                        ${product.price}
                      </div>
                    </div>
                  </div>)

              })
            }


          </div>
        </div>
      </main>
      <footer className="row center">
        All right reserved
  </footer>
    </div>



  );
}

export default App;
