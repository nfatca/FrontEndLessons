import axios from "axios";

const BASE_URL = "https://14148.fullstack.clarusway.com/";

//* Token'siz api istekleri icin bir instance olustur.
export const axiosPublic = axios.create({
  baseURL: BASE_URL,
});

//* local storage'dan token'ı oku
const escapedToken = JSON.parse(localStorage.getItem("persist:root"))?.token;
const token = escapedToken && JSON.parse(escapedToken);

//* Token gerektiren istekler icin bir baska instance olusutur.
export const axiosWithToken = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Token ${token}` },
});

//* Instance, token'nın ilk degirini okuyarak istekte bulunur.
//* Dolayisiyla bazen localSotrage'Dan token alinmadan ilk degeri (null) ile istek yapilmis olabilir.
//* Bunun cozumu icin axios interceptors kullanilabilir.
//* interceptor belirtilen her axios instance calismadan once calisan bir metodtur.
//* Dolayısıyla once yeni token okunmasini saglar.

axiosWithToken.interceptors.request.use((config) => {
  console.log("interceptor run");

  if (!config.headers["Authorization"]) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  return config;
});

//! ------------------------------------------------------
//! Bunlara alternatif olarak eger axios instance kullanimini
//! custom hook icerisinde yaparsak daha kolay bir sekilde token'a
//! erismek mumkun olur.
//! ------------------------------------------------------
