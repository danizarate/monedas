class ServicioDatos {
  apiUSD;
  
  constructor() {
    this.apiUSD = "https://api.sbif.cl/api-sbifv3/recursos_api/dolar?apikey=382190361a31afc0e83f1282bc6daab9ca3da1a0&formato=json";
    this.apiEuro = "https://api.sbif.cl/api-sbifv3/recursos_api/euro?apikey=382190361a31afc0e83f1282bc6daab9ca3da1a0&formato=json";
    this.apiGLP ="https://api.cambio.today/v1/quotes/GBP/CLP/json?quantity=1&key=7832|7Kh77cFHKGFqF411c8r~wwumURSMxS34";
    this.apiGBP ="https://morningstar1.p.rapidapi.com/fundamentals/yearly/cashflow-statement/restated?Mic=XNAS&Ticker=MSFT", {"method": "GET",	"headers": {"accept": "string",	"x-rapidapi-key": "20d0e9d9c3msh6040ac797df06dap1f14d7jsn6cc0124443b3",	"x-rapidapi-host": "morningstar1.p.rapidapi.com"}};
  }
  getAll() {
    return fetch(this.apiUSD)
      
  }
  getEuro(){
    return fetch(this.apiEuro)
  }
  getGLP(){
    return fetch(this.apiGLP)
  }

  getGBP(){
    return fetch(this.apiGBP)
  }
  /* getForUid(uid){
        let url = this.apiUrlAves + "/" + uid;
        return fetch(url);
    } */
}
export default ServicioDatos;
