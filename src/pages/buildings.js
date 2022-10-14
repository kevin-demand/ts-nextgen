import Head from "next/head";
import { Children, useEffect, useState } from "react";
import { Card, Table, CardDeck, Container, Row } from "react-bootstrap"

export async function getServerSideProps({query}){
    var myHeaders = new Headers();
    myHeaders.append("Authorization",   "Bearer w9_JBv7J3IG06kWWc4gg0FGwlY8cSio4PimPIcmwywPPzNbjqmIeUqm5ofMCgdrvx_vBpRlugKQVnIhXGAlFcoGteoqwz5dqabs8CY2XTmEK53g41a8DJSuR8wojzU4QGC9W52Oswh8WH0X0mW3x2t7Nckf5OzWutnRGL3fi745zck3Erh-5E4AakF6nG8BsTTaB-DXifCqAOuRooNF4SlVJPFYFt3n4iJn7-NT-olE4atMtRCjWqfAXh9iYLIAKusrzjKUR9aX2G9CHFLc9KzuL5auRwhiE730boV4DIC2puRRkGMmWqAsUBrIPRzLINGynghQQuHZgnu-0SYFhuSdO9S7bZa_8MSTx9CF4GR5Kmh3zokIJT7nkKC_AK3RjSxjITOdRmiBfXPOSQ_kFt76717xA9EYxPPGT80zieJNo4nwRJgX_h4Y-pspgWfPOFYoWevPzn3_r11oRjohMkSoMgS0XFECglBGQE97LNOjM9jf72RnWqttsOx6pCQ-5X3z8SgSfCH0ddgX2Uo8VANkniUQsf2FvvLXHzfRGalJiOfQ9CiRXBv4iPo0Bg-1W2FyAKoQY7khdd4EUjgc9CQ" );
    
   var requestOptions = {
    method: 'Get',
    headers: myHeaders,
    redirect: 'follow'
    };
const res = await fetch(`https://api.tuffshed.com/api/Product?ZipCode=${query.zip}&v=1623791596069`, requestOptions)

const data = await res.json ();

//  console.log(data);

// console.log (bLength + "blength");
    return {
        props: {
            building: data
        }
    }
}

export function Buildings({building}) {
   console.log(building);
//    const buildingSizes = building.ProductSizes.BuildingSizes;

    return (
        <div className="container">
        <h2>Phoenix APP API</h2>
        <Card>
        {/* <h1>{building.Series} {building.Name}</h1>
            <p>{building.Description}</p>
            {building.WarrantyTitle} */}
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>W X L X H</th>
                    <th>Base Price</th>
                    <th>Painted Price</th>
                </tr>
            </thead>
            <tbody>
                
                
            </tbody>
        </Table>

          


            <div>{JSON.stringify(building)}</div>

            {/* <div>{JSON.stringify(results)}</div> */}


        </Card>
    </div>
    )
}

export default Buildings;