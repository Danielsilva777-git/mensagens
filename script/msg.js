fetch('versiculos.json')
.then(response => response.json())
.then(data =>{
    const day = "Terça"
    const versiculo = data[day]
    document.getElementById("text").textContent = versiculo
})

