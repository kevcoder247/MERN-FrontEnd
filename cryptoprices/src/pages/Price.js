import {useState, useEffect} from 'react'


const Price = ({match}) => {
  // set a local variable to hold our api key
  const apiKey = '34368D3D-2DC7-4E69-A167-139A1DFB0E29'
  
  // capture the coin symbol from route props
  const symbol = match.params.symbol;
  
  //set a local variable for our api URL
  const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`
  //initialize state tp hold our coin data once recieved from the api
  
  const[coin, setCoin] = useState(null);
   //define a function to perform the ajax (aka use javascript to make http request)
   const getCoin = async () => {
    const response = await fetch(url);//get data from api
    const data = await response.json();//convert json data into js
    setCoin(data);
   }
  //invoke a call to useEffect to run an effect once the component loads (make the ajax )

  useEffect(() => {
    getCoin();
  }, [])
  
  //define some funcationality to show a loading message until the data is ready
  const loading = () => {
    return <h1>Loading...</h1>
  } 
  const loaded = () => {
    return (
      <div>
        <h1>{coin.asset_id_base}/{coin.asset_id_quote}</h1>
        <h2>{coin.rate}</h2>
      </div>
    )
  }


  return coin ? loaded() : loading();


}

export default Price;