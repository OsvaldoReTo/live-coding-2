// API
const API_ENDPOINT = 'https://yesno.wtf/api';
const btnResponse = document.getElementById("button");
const question = document.getElementById("input");
const Respuesta = document.getElementById("answer");


btnResponse.addEventListener("click", function (e) {
    e.preventDefault();
    getResponse();
})

function getResponse() {
    let promise = fetch(API_ENDPOINT,{
        method: "GET"});
        promise.then((response)=>{
            response.json().then( (data)=>{
                console.log(data);
                Respuesta.innerHTML+=`${data.answer}`
                setTimeout(() => {
                     Respuesta.innerHTML=""
                }, 3000);
            }).catch((error) =>{
                console.error(error);
            })//catch
        }).catch( (error) =>{
            alert("Error"+error)

        })
        //promesa1
};

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
