import { createContext } from "react";

const productoContext = createContext();

function productoProvider({children}) {
  const [productos, setProductos] = useState([]);

  
  useEffect(() => {
    fetch("https://demo8730279.mockable.io/productos")
      .then((response) => response.json)
      .then((data) => setProductos(data))
      .catch((err) => console.error(err));
  }, []);

  return(
    <productoContext.Provider value={productos}>
        {children}
    </productoContext.Provider>
  )

}

export default { productoContext,productoProvider }