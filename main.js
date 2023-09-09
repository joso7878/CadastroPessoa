let pessoas = [];
let proximoID = 1;

function cadastrarPessoa() {
  const nome = document.getElementById("nome").value;
  const idade = parseInt(document.getElementById("idade").value);
  const cidade = document.getElementById("cidade").value;

  const pessoa = { nome, idade, cidade };
  pessoa.id = proximoID++;
  pessoas.push(pessoa);

  document.getElementById("resultado").innerHTML = `Pessoa ${nome} cadastrada com sucesso.`;
}

function listarPessoas() {
    const lista = pessoas.map(pessoa => `ID: ${pessoa.id}, Nome: ${pessoa.nome}, Idade: ${pessoa.idade} anos, Cidade: ${pessoa.cidade}`).join("<br>");
    document.getElementById("resultado").innerHTML = `Pessoas cadastradas:<br>${lista}`;
  }
  
function atualizarPessoa() {
  const id = parseInt(prompt("Digite o novo ID da pessoa:"));
  const pessoa = pessoas.find(p => p.id === id);

  if (pessoa) {
    const novosDados = {};
    novosDados.idade = parseInt(prompt("Digite a idade da pessoa atualizada:") || pessoa.idade);
    novosDados.cidade = prompt("Digite a nova cidade da pessoa:") || pessoa.cidade;

    Object.assign(pessoa, novosDados);
    document.getElementById("resultado").innerHTML = `Pessoa com ID ${id} atualizada com sucesso.`;
  } else {
    alert("Pessoa não encontrada.");
  }
}

function deletarPessoa() {
  const id = parseInt(prompt("Digite o ID da pessoa para deletar:"));
  const pessoaIndex = pessoas.findIndex(p => p.id === id);

  if (pessoaIndex !== -1) {
    pessoas.splice(pessoaIndex, 1);


    for (let i = 0; i < pessoas.length; i++) {
      pessoas[i].id = i + 1;
    }

    document.getElementById("resultado").innerHTML = `Pessoa com ID ${id} deletada com sucesso.`;
  } else {
    alert("Pessoa não encontrada.");
  }
}
