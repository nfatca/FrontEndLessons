//?===============================================
//?                USEEFFECT HOOK
//?===============================================
//! UseEffect Hook'u fonksiyonel componenler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

import { useState, useEffect } from "react";

//! useEffect(() => {
//*   /* ComponentDidMount code */
//! }, []);

//! useEffect(() => {
//*   */ ComponentDidMount + componentDidUpdate code */
//! }, [var1, var2]);

//! useEffect(() => {
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [var1, var2]);

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  //? componentDidMount
  //! fetch, asyn-await, localStorage, setTimeout, setInterval();
  //   useEffect(() => {
  //     console.log("Mounting");
  //     setTimeout(() => {
  //       alert("Data Fetched");
  //     }, 3000);
  //   }, []);

  //? ComponentDidMount + componentDidUpdate code */
  useEffect(() => {
    console.log("Mounting + Updating");
    setTimeout(() => {
      alert("Data Fetched");
    }, 1000);
  }, [count]);

  console.log("Rendering");

  return (
    <div className="container text-center">
      <h1 className="text-danger">USE Effect</h1>
      <h3>COUNT={count}</h3>
      <button className="btn btn-info" onClick={() => setCount(count + 1)}>
        INC
      </button>
    </div>
  );
};

export default UseEffectHook;
