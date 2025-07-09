const digite = require('prompt-sync')(); 
const axios = require('axios');
const cep = digite('Digite o CEP: ');

async function buscarEndereco(cep) {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        if (response.data.erro) {
            console.log('CEP não encontrado.');
        } else {
            const dados = response.data;

            console.log(" Resultado da busca:");
            console.log(`Logradouro: ${dados.logradouro}`);
            console.log(`Bairro: ${dados.bairro}`);
            console.log(`Cidade: ${dados.localidade}`);
            console.log(`Estado: ${dados.uf}`);
            console.log(`CEP: ${dados.cep}`);
        }
    } catch (erro) {
        console.log(" Erro ao procurar esse CEP. Verifique sua conexão ou o formato do CEP.");
    }
}

buscarEndereco(cep);


