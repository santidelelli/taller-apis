document.addEventListener('DOMContentLoaded', function () {

    function tomarYMostrar(){

        let num = document.getElementById('num').value;

        let dato = document.getElementById('dato');

        if (num !== ""){

            let endpoint = 'http://numbersapi.com/'+num+'?json';

            fetch (endpoint)

            .then (Response => Response.json())

            .then (data => {

            dato.innerHTML = data.text;

        })

        } else {
            
            dato.innerHTML = "";
    
        }

    }
    
    document.getElementById('num').addEventListener('input', tomarYMostrar);

})