const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');

        alterarImagemPersonagemSelecionado(personagem);

        alterarNomePersonagemSelecionado(personagem);

        alterarDescricaoPersonagem(personagem);
    })
})

function alterarDescricaoPersonagem(personagem) {
    const decricaoPersonagem = document.getElementById('descricao-personagem');
    decricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagempersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    imagempersonagemGrande.src = `./src/images/${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
