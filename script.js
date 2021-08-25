function mostrarVagas(){
    fetch(`https://localhost:8080/Vagas`).then(async function (response) {
            let Vagas = await response.json();
            console.log(Vagas);
            let html = "";
            for(let i=0;i<Vagas.length;i++){ html +=` <tr>
                <td>${Vagas[i].vagaId}</td>
                <td>${Vagas[i].nomeVaga}</td>
                <td>${Vagas[i].descricaoVaga}</td>
                </tr>
                `

                }
            
            document.getElementById("tabelaVaga").innerHTML = html
        }).catch(function (err) {
            console.warn('Algo deu errado', err);
        });
}


function mostrarCandidato(){
    fetch(`https://localhost:8080/Candidatos`).then(async function (response) {
            let Candidatos = await response.json();
            console.log(Candidatos);
            let html = "";
            for(let i=0;i<Candidatos.length;i++){ html +=` <tr>
                <td>${Candidatos[i].candidatoId}</td>
                <td>${Candidatos[i].nomeCandidato}</td>
                <td>${Candidatos[i].estadoCivil}</td>
                <td>${Candidatos[i].genero}</td>
                <td>${Candidatos[i].dataNascimento}</td>
                <td>${Candidatos[i].cep}</td>
                <td>${Candidatos[i].endereco}</td>
                <td>${Candidatos[i].numero}</td>
                <td>${Candidatos[i].complemento}</td>
                <td>${Candidatos[i].bairro}</td>
                <td>${Candidatos[i].uf}</td>
                <td>${Candidatos[i].telefoneFixo}</td>
                <td>${Candidatos[i].telefoneMovel}</td>
                <td>${Candidatos[i].emailCandidato}</td>
                <td>${Candidatos[i].cpf}</td>
                <td>${Candidatos[i].rg}</td>
                <td>${Candidatos[i].possuiVeiculo}</td>
                <td>${Candidatos[i].tipoHabilitacao}</td>
                <td>${Candidatos[i].vagaId}</td>
                </tr>
                `

                }
            
            document.getElementById("tabelaCandidato").innerHTML = html
        }).catch(function (err) {
            console.warn('Algo deu errado', err);
        });
}


function adicionarVaga(){
    let Vaga = {
        vagaId: document.getElementById('id').value,
        vagaId: document.getElementById('vaga').value,
        vagaId: document.getElementById('decricao').value
    }//fim do objeto Vaga
    console.log(vaga);
}

function pegacep(){
    let cepInformado = '58401755';
    //abaixo passo o cep informado para a url para acessar os dados
    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`).then(async function (response) {
        let cep = await response.json();
        let html = "";
            html += `
            <tr>
                <td>${cep.cep}</td>
                <td>${cep.logradouro}</td>
                <td>${cep.complemento}</td>
                <td>${cep.bairro}</td>
                <td>${cep.localidade}</td>
                <td>${cep.uf}</td>
                <td>${cep.ibge}</td>
                <td>${cep.gia}</td>
                <td>${cep.ddd}</td>
                <td>${cep.siafi}</td>
            </tr>
            `
        
        document.getElementById("tbody").innerHTML = html
    }).catch(function (err) {
        console.warn('Algo deu errado', err);
    });
}

