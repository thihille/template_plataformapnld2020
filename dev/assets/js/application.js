// FINAL CONFIG ///////////////////////////////////////////////////////////////
let userAgent = navigator.userAgent.toLowerCase();

let loader_content = ()=>{
    document.querySelector("#loader").outerHTML = "";
}
let colecao_n = (colecao, disciplina)=> {
    if(colecao == "tempo"){
        return colecao+'-'+disciplina
    }else{
        return colecao;
    }  
}
let webfont_colecao = (fonts)=> {
    let pathcss = './assets/css/';
    if(fonts == "apoema"){
        return pathcss+'neutra-text-tf-lightalt.css';
    }else if(fonts == "aprendendo"){
        return pathcss+'rubik.css';
    }else if(fonts == "connections"){
        return pathcss+'varela-round.css';
    }else if(fonts == "praticando"){
        return pathcss+'indulta-semi-sefif.css';
    }else if(fonts == "tempo"){
        return pathcss+'blogger-sans.css';
    }else{
        return '';
    }   
}
let disciplina_n = (nome)=> {
    switch (nome) {
        case 'arte':
            return 'Arte';
            break;

        case 'ciencias':
            return 'Ciências';
            break;

        case 'geografia':
            return 'Geografia';
            break;

        case 'historia':
            return 'História';
            break;

        case 'matematica':
            return 'Matemática';
            break;

        case 'portugues':
            return 'Português';
            break;

        case 'ingles':
            return 'Língua Inglesa';
            break;

        default:
            return '';
            break;
    }
}

let headerBuild = (colecao, disciplina, ano)=>{
    return `
        <div class="logo_colecao col-${colecao_n(colecao,disciplina)}">
            <span class="sr_only">${colecao}</span>
        </div>
        <div class="disciplina-ano dis-${colecao}">
            <p>${disciplina_n(disciplina)} | ${ano}º Ano</p>
        </div>
        ${caracterizado ? `<div class="logo-ebsa"><span class="sr_only">Editora do Brasil S/A</span></div>` : ``}
    `;
}

let menuBuild = (el)=>{
    let tipo_midia = typeof el.video !== 'undefined' ? "#" : "./manual_digital/"+el.arquivo+".odt";
    let icone = typeof el.video !== 'undefined' ? "icone-play" : "icone-documento";
    let file_url = el.arquivo == "#" ? el.arquivo : tipo_midia;
    let metodo = typeof el.video !== 'undefined' ? "data-video="+"./media/"+el.arquivo+".html" : "download";
    let class_metodo = typeof el.video !== 'undefined' ? "carregar_video" : "download_material";

    return `
        <li>
            <a href='${file_url}' ${metodo} class='${class_metodo} ${icone}'>
                 ${el.rotulo}
            </a>
        </li>
            
    `;
}
let li_menu = document.querySelectorAll("#menu_principal ul li");
let cabecalho = document.querySelector("#cabecalho");
let conteudo = document.querySelector(".linha");
let capa_oed = document.querySelectorAll(".linha .coluna");
let guia_de_usuario = document.querySelector("#guia");
let loadMenu = ()=>{
    cabecalho.classList.add(colecao+'-'+disciplina);
    cabecalho.classList.add(colecao+'-'+ano_colecao);
    conteudo.classList.add(colecao);
    capa_oed[0].classList.add('capa-'+colecao+'-'+disciplina+'-'+ano_colecao);
    cabecalho.innerHTML = headerBuild(colecao, disciplina, ano_colecao);
    guia_de_usuario.innerHTML = txt_guia_de_usuario;
    platform['inicio'].forEach(item => {
        li_menu[0].children[0].innerHTML = 'Início';
        li_menu[0].children[1].innerHTML += menuBuild(item); 
    });
    platform['primeiro_bimestre'].forEach(item => {
        li_menu[1].children[0].innerHTML = '1º Bimestre';
        li_menu[1].children[1].innerHTML += menuBuild(item); 
    });
    platform['segundo_bimestre'].forEach(item => {
        li_menu[2].children[0].innerHTML = '2º Bimestre';
        li_menu[2].children[1].innerHTML += menuBuild(item); 
    });
    platform['terceiro_bimestre'].forEach(item => {
        li_menu[3].children[0].innerHTML = '3º Bimestre';
        li_menu[3].children[1].innerHTML += menuBuild(item); 
    });
    platform['quarto_bimestre'].forEach(item => {
        li_menu[4].children[0].innerHTML = '4º Bimestre';
        li_menu[4].children[1].innerHTML += menuBuild(item); 
    });
    document.getElementsByTagName('head')[0].innerHTML += "<link rel='stylesheet' href='"+webfont_colecao(colecao)+"'>";
}
loadMenu();

let botao_download = document.querySelectorAll(".download_material");
let janela_download = document.querySelector(".janelaDownload");
let timer;
botao_download.forEach(btn => {
    btn.addEventListener("click",function(){
        if(typeof timer !== "undefined"){
            clearTimeout(timer);
        }
        janela_download.classList.remove("animate-out");
        janela_download.classList.add("animate-in");
        document.querySelector(".text_download").innerHTML = btn.textContent;
        timer = setTimeout(function(){
            janela_download.classList.remove("animate-in");
            janela_download.classList.add("animate-out");
        },3000);
    });
});

let botao_video = document.querySelectorAll(".carregar_video");
let botao_fecharvideo = document.querySelector(".btn_fechar_video");
let janela_fecharvideo = document.querySelector("#video_background");
let janela_video = document.querySelector("#video_background");
botao_video.forEach((btn,index) => {
    btn.addEventListener("click",function(e){
        e.preventDefault();
        let srcvideo = btn.getAttribute("data-video");
        let videocontent = document.querySelector("iframe");
        videocontent.src = srcvideo;
        janela_video.style.display = "block";
    });
});
botao_fecharvideo.addEventListener("click",function(e){
    e.stopPropagation();
    e.preventDefault();
    fecharJanela();
});
janela_fecharvideo.addEventListener("click",function(e){
    e.stopPropagation();
    e.preventDefault();
    fecharJanela();
});

let fecharJanela = ()=>{
    let videocontent = document.querySelector("iframe");
        videocontent.src = "";
    document.querySelector("#video_background").style.display = "none";
}

$(".has-sub").on("click",function(){
    $(this).children(".submenu-button").trigger("click");
});
window.onload = function(){
    setTimeout(function(){
        loader_content();
        let guia = document.querySelector("#guia");
        guia.classList.add('animate');
    },500);
}
