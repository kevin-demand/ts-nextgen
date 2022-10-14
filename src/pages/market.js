
import Head from "next/head";


export function Market({results}) {
    console.log (results);
    return (
        <>
         <h2>Help Me</h2>

       
            <p>{results.StoreName}</p> 
            <p>Home Depot Store: {results.HDStoreNumber}</p>
            </>
    )
       
       
}

export async function getServerSideProps({query}){
const res = await fetch(`https://ts-marketlookup-prd-usnc-func.azurewebsites.net/api/marketInfo/${query.zip}?code=${process.env.MARKET_KEY}`)
const data = await res.json ();

console.log(data);

    return {
        props: {
            results: data
        }
    }
}

export default Market;