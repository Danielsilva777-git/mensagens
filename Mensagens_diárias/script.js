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


const dias_da_semana  = {
    Quarta: "Deitar-me faz em verdes pastos, guia-me mansamente a águas tranqüilas ",
    Quinta: "Refrigera a minha alma; guia-me pelas veredas da justiça, por amor do seu nome   Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam.",
    Sexta: "",
}

let day = dias[hoje]
res.innerHTML = dias_da_semana[day]

