//?==================================================================
//?                         LIFECYCLE METOTLARI
//?          https://reactjs.org/docs/react-component.html
//?==================================================================

//* Lifecycle metotlari componetnlerin DOM'da varoldugu sure boyunca
//* uzerinde islem yapmamizi imkan saglayan ozel React mototlaridir.
//* Ornegin bir component olsuturuldugunda, DOM'a basilsiginda,
//* guncellendiginde veya DOM'dan kaldirildiginda bir seyler yapmak icin
//* lifecycle metotlari kullanilabilir.
//* En bilindik lifecycle metodu render() metodudur

//* Bir component'in olsuturulmasi (constructor,
//* Bir componentin DOM agacina eklenmesinin sonrasi(componentDidMount)
//* Bir component'in DOM'a basilmasi (render)
//* (Optional)Bir componentin guncellenmesinin sonrasi (componentDidUpdate)
//* Bir component'in DOM agacindan kaldirilmasi sonrasi(componentWillUnmount)

// 1- componentDidMount
//! It runs only when our rendered first time. We use this for usecases like fetching data from an API or provide inital value to some state

// 2- componentDidUpdate
//! Takes two arguments prevProps, prevState. With this we say react whenever the state changes do something.

// 3- componentWillUnmount
//! This runs when we remove the component from our app or just unmounting

import React from "react";

class LifeCycleMethods extends React.Component {
  // 1-) Bir componentin olusturulmasinda cagrilir.
  constructor(props) {
    console.log("Constructor running");
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleInc = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  // 3-) Bir component DOM agacina eklendiginde calistirilir.
  // (Ilk render sonrasi).
  // Her yasam dongusu icin bir kere calisir.
  componentDidMount() {
    console.log("Mounted");
  }

  // 4-) Bu metot ilk render haric diger tum render'lardan sonra cagriilir.
  // prevState ve prevProps degerlerini parametre olarak alabilir.
  componentDidUpdate(prevProps, prevState) {
    console.log("Updated");
    // console.log(prevState.count);
  }

  // 5-) Bir component DOM agacindan kaldirildiktan hemen sonra cagrilir.
  componentWillUnmount() {
    console.log("Unmounted");
  }

  render() {
    // 2-) Her bir render'da cagrilir.
    console.log("Rendered");
    return (
      <div className="container text-center">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT={this.state.count}</h3>
        <button className="btn btn-info" onClick={this.handleInc}>
          INC
        </button>
      </div>
    );
  }
}
export default LifeCycleMethods;
