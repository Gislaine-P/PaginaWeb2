import { createContext, useState,useEffect } from "react";

export const ProductoContext = createContext();

export function ProductoProvider({children}) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    fetch("http://demo8730279.mockable.io/productos")
      .then((response) => response.json())
      .then((data) => {setProductos(data);
                        setLoading(false);
      })
      .catch(err => {console.error(err),
        setLoading(false);
      });
  }, []);

  return(
    <ProductoContext.Provider value={{productos,loading}}>
        {children}
    </ProductoContext.Provider>
  )

}