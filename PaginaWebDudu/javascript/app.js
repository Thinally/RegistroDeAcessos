


const Acessos = document.querySelector("#recebe-acessos")



fetch('http://188.166.31.66:8080/access').then((x)=>x.text()).then((data)=>{
    Acessos.textContent = data
})

