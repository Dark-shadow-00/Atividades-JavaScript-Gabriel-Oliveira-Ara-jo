//comando para abrir a caixa de diálogo. ele importa do prompt
const digite = require('prompt-sync')();


//caixas(arrays) vazios para armazenar os produtos
let produtos = [];
let usuarios = [];
let compras = [];

// id dos produtos
let idProduto = 1; // começa com 1 porque começa a contar do um 
let idUsuario = 1;
let idCompra = 1;

//função para o menu principal
function menuPrincipal() {
  console.log('\n### MENU DE COMPRAS ###'); // '\n' serve para fazer uma quebra de linha

  console.log('1. Cadastrar Produto');
  console.log('2. Cadastrar Usuário');
  console.log('3. Realizar Compra');
  console.log('4. Sair');
  //o número da opção que o usuário escolher é armazenado na variável option logo abaixo
}

let option; // a variável option serve para armazenar o que o usuário escolher
do {
  menuPrincipal(); //chama a função para exibir o menu principal
  option = Number(digite('Escolha uma opção: ')); //("digite") = ponto de entrada de dados que pede para o usuário inserir a opção que ele quer

  switch (option) {
    //o switch será responsável pela tomada de decisões, de acordo com o número(*ou opção) que o usuário escolher
    case 1: //"cases" são as opções que o usuário pode ter
      cadastrarProduto();
      break; //serve para não continuar executando as outras cases
    case 2:
      cadastrarUsuario();
      break;
    case 3:
      realizarCompra();
      break;
    case 4:
      console.log('*Sistema encerrado...');
      break;
    default: //é como um else.  caso o usuário escolha algo que seja diferente, o programa executará o (console.log) descrito logo abaixo
      console.log('*Opção inválida!');
  }
} while (option !== 4);
//o while estará verificando se a opção é verdadeira. se não for, o loop é parado.  (option !== 4); está dizendo que o loop é diferente de 4. logo o loop para, pois o option não é diferente de 4
// e isso garante que o programa continue rodando até o usuário sair escolhendo a opção (*4). O "4" faz o loop parar.

function cadastrarProduto() {
  let nome = digite('Digite o nome do produto: ');
  let preco = Number(digite('Digite o preço do produto: '));
  let quantidade = digite('Digite a quantidade do produto: ');
  let produto = {
    id: idProduto++,
    nome: nome,
    preco: preco,
    quantidade: quantidade,
    //gera id automaticamente
    //o id do produto é gerado automaticamente, começando de 1 e incrementando a cada novo produto cadastrado
  };
  produtos.push(produto); //ele empurra a variável produto para o array produtos, por assim dizer
  console.log(`Produto ${nome} cadastrado com sucesso!`);
}

function cadastrarUsuario() {
  //praticamente a mesma lógica do anterior
  let nome = digite('Digite o nome do usuário: ');
  let email = digite('Digite o email do usuário: ');
  let usuario = {
    id: idUsuario++,
    nome: nome,
    email: email,
  };
  usuarios.push(usuario);
  console.log(`Usuário ${nome} cadastrado com sucesso!`);
}

function realizarCompra() {
  console.log('Realizar Compra');
  console.log('Produtos disponíveis:');
  produtos.forEach((produto) => {
    // o forEach percorre no array de produtos

    console.log(
      `ID: ${produto.id}, Nome: ${produto.nome}, Preço: ${produto.preco}, Quantidade: ${produto.quantidade}`
    );
  });
  idProduto = Number(digite('Digite o ID do produto que deseja comprar: '));
  quantidade = Number(digite('Digite a quantidade que deseja comprar: '));
  usuarioId = Number(digite('Digite seu ID de usuário: '));

  let produtoSelecionado = produtos.find((p) => p.id === idProduto);
  let usuarioSelecionado = usuarios.find((u) => u.id === usuarioId);
  //procura o produto específico no array

  if (produtoSelecionado && usuarioSelecionado) {
    if (quantidade <= produtoSelecionado.quantidade) {
      let compra = {
        id: idCompra++,
        produto: produtoSelecionado,
        usuario: usuarioSelecionado,
        quantidade: quantidade,
      };
      compras.push(compra);
      produtoSelecionado.quantidade -= quantidade;
      console.log(`Compra realizada com sucesso!`);
    } else {
      console.log(`Quantidade insuficiente!`);
    }
  } else {
    console.log(`Produto ou usuário inválido!`);
  }
}
