
// import { createContext, useContext, useEffect, useState } from 'react';

// const PRODUCT_CONTEXT = createContext();
// const ProductProviders = ({Children}) => {
//     const [data ,setData]=useState([]);
//     useEffect(() => {
//         fetch("http://localhost:5000/products")
//         .then((res) => res.json())
//         .then((data) => setData(data.data));
//     },[]);
//     const value = {
//         data,
//     };
//     return (
//         <PRODUCT_CONTEXT.Provider value={value}>
//             {Children}
//         </PRODUCT_CONTEXT.Provider>
//     )
// };
// export const useProductss = () => {
//   const context = useContext(PRODUCT_CONTEXT);
//   return context
// };

// export default ProductProviders;