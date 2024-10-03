// Seletores de datas
let data = new Date();
let dia = data.getDate();
let mes = data.getMonth();
let hoje = data.getDay();

 // Seletores de Elementos HTMML
const res = document.getElementById("res");
const h2 = document.getElementById("h2");
const h4 = document.getElementById("h4");

            // arrays 
const  dias = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado",]

const meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Desembro",]
      
    // adicionadno a data no elemento h4
   h4.innerText = `${dia} de ${meses[mes]}`    

//Condição
if(hoje >=1 && hoje <= 5){
h2.innerText = `Hoje é ${dias[hoje]}-feira`}else{
    h2.innerText = `Hoje é ${dias[hoje]}`
}


fetch("script/versiculos.json")
.then(response => response.json())
.then(data =>{
    const day = dias[hoje]
    const versiculo = data[day] || "Versículo não encoontrado";
    document.getElementById("res").textContent = versiculo
})
.catch(error =>{
    res.innerHTML = "Arquivo JSON não encontrado"
})

/*let day = dias[hoje]
res.innerHTML = dias_da_semana[day]









*/
