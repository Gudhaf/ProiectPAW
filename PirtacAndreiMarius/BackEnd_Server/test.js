async function ceva() {
    const urlGET = "http://localhost:3000/database";

    fetch(urlGET, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json()).then(data => { document.getElementById("test").innerHTML = JSON.stringify(data); }).catch(err => { console.log(err)});

    fetch("http://localhost:3000/database/1/altceva", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        
    }).then(response => response.json()).then(data => { console.log(data) }).catch(err => { console.log(err)});

    const text="asa";
    
    document.getElementById("test").innerHTML = text;
}