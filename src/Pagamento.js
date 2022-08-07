import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Pagamento(props) {
    const [url, setUrl] = useState(null);
    
    const mercadopago = process.env.REACT_APP_ACCESS_TOKEN;


    useEffect(() => {

        axios.post("https://api.mercadopago.com/checkout/preferences?access_token=" + mercadopago, {
            "items": [
                {
                    "id": "ID do produto",
                    "title": "Teste",
                    "quantity": 1,
                    "currency_id": "BRL",
                    "unit_price": 10.00
                }
            ],
            "payer": {
                "name": "Teste",
                "surname": "Teste",
                "email": "kaiokodesu@gmail.com",
                "phone": {
                    "area_code": "33",
                    "number": "99999999"
                },
                "address": {    
                    "street_name": "Teste",
                    "street_number": "Teste",
                    "zip_code": "Teste"
                }
                        },
            "back_urls": {
                "success": "http://localhost:3000/success",
                "failure": "http://localhost:3000/failure",
                "pending": "http://localhost:3000/pending"
            },
            "shipments": {
                "receiver_address": {
                    "zip_code": "35190-000",
                    "street_name": "Rua Leopoldo Teixeira",
                    "street_number": "100",
                    "floor": "0",
                    "apartment": "0",
        
                }
            },
            "id": "ID da venda",

             "auto_return": "all",
             "external_reference": "Teste",
            "expires": true

        }).then(response => {
            console.log(response.data.init_point)
            setUrl(response.data.init_point)

        }   ).catch(error => {
            console.log(error)
        })


       
    }, [])

    function redirect(){
        window.location.href = url;
    }

    return (
        <div>
           {url && redirect()}
        </div>
    )
}