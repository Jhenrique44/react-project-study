import React from "react";
import { UserContext } from "./UserContext";

const Product = (product) => {
  const global = React.useContext(UserContext);
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    if (product.product !== null)
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${product.product}`)
        .then((res) => res.json())
        .then((json) => setData(json));
  }, [product.product]);
  console.log("global", global);

  if (global.dados === null) return null;
  return (
    <div>
      <h1>{data.nome}</h1>
      <p> R$ {data.preco}</p>
      <img src="" alt="" />

      <div>
        Produtos:{" "}
        {global.dados.map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </div>
    </div>
  );
};

export default Product;
