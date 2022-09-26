//*========================================
//*             3- FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH");
// let userData;
fetch("https://api.github.com/users")
  .then((res) => {
    // console.log(res);
    //! error handling
    if (!res.ok) {
      throw new Error("Something went wrong");
    } else return res.json();
  })
  .then((data) => updateDOM(data))
  .catch((err) => console.log(err));

// console.log(userData);
const updateDOM = (users) => {
  const userDiv = document.querySelector(".users");
  console.log(users);
  users.forEach((user) => {
    const { login, avatar_url, following_url } = user;
    // console.log(object);
    userDiv.innerHTML += `<h2>${login}</h2>
    <img src="${avatar_url}" width="300px" alt="" />
    `;
  });
};
