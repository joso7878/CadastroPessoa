let pessoas = [];
let proximoID = 1;

// Funcao para cadastrar uma nova pessoa
function cadastrarPessoa(pessoa) {
    pessoa.id = proximoID++;
    pessoas.push(pessoa);
}

// Funcao para atualizar pessoa de acordo com seu ID
function atualizarPessoa(id, camposAtualizados) {
    const pessoaIndex = pessoas.findIndex(pessoa => pessoa.id === id);

    if (pessoaIndex !== -1) {
        pessoas[pessoaIndex] = { ...pessoas[pessoaIndex], ...camposAtualizados };
    }
}

// Funcao para deletar pessoa
function deletarPessoa(id) {
    pessoas = pessoas.filter(pessoa => pessoa.id !== id);
}

function listarPessoas() {
    return pessoas;
}

function excluirPessoa(id) {
    const pessoaIndex = pessoas.findIndex(pessoa => pessoa.id === id);

    if (pessoaIndex !== -1) {
        pessoas.splice(pessoaIndex, 1); // Remove a pessoa da lista
        document.getElementById("resultado").innerHTML = `Pessoa com ID ${id} excluída.`;
    } else {
        document.getElementById("resultado").innerHTML = `Pessoa com ID ${id} não encontrada.`;
    }
}

function atualizarPessoaPorId(id, camposAtualizados) {
    const pessoaIndex = pessoas.findIndex(pessoa => pessoa.id === id);

    if (pessoaIndex !== -1) {
        pessoas[pessoaIndex] = { ...pessoas[pessoaIndex], ...camposAtualizados };
        document.getElementById("resultado").innerHTML = `Pessoa com ID ${id} atualizada.`;
    } else {
        document.getElementById("resultado").innerHTML = `Pessoa com ID ${id} não encontrada.`;
    }
}


// Cadastrar uma pessoa
cadastrarPessoa({ nome: 'João', idade: 30, cidade: 'São Paulo' });

// Atualizar os dados de uma pessoa com ID 1
atualizarPessoa(1, { idade: 31 });

// Deletar uma pessoa com ID 1
deletarPessoa(1);

// Listar todas as pessoas cadastradas
const lista = listarPessoas();
console.log(lista);


