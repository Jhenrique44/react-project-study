import React from "react";

export const UserContext = React.createContext();

export const UserStorage = (children) => {
  const [dados, setDados] = React.useState(null);
  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/`)
      .then((res) => res.json())
      .then((json) => setDados(json));
  }, []);

  //for clean the context 

  function clearData() {
    setDados(null);
  }
  return (
    <UserContext.Provider value={{ dados, clearData }}>
      {" "}
      {children.children}
    </UserContext.Provider>
  );
};
