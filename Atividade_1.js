const biblioteca = [];

function cadastrarLivro() {
    const id = prompt("Por favor digite o id do livro: ");
    const titulo = prompt("Por favor digite um título para o livro: ");
    const autor = prompt("Por favor insira um nome de autor");
    const emprestado = false;
    biblioteca.push({ id, titulo, autor, emprestado });
    console.log(`O livro "${titulo}" foi cadastrado com sucesso!`);
}

function alterarLivro() {
    const id = prompt("Insira o ID do livro que você quer alterar: ");
    const livroCadastrado = biblioteca.find((livro) => livro.id === id);

    if (livroCadastrado) {
        const novoTitulo = prompt(`Digite um novo título para o livro ${id}:`);
        const novoAutor = prompt(`Digite o novo nome do autor do livro ${id}:`);

        if (novoTitulo) {
            livroCadastrado.titulo = novoTitulo;
        }
        if (novoAutor) {
            livroCadastrado.autor = novoAutor;
        }

        console.log(` O titulo do livro "${id}" foi alterado para um "${novoTitulo}" com sucesso!`);
        console.log(` O autor do livro "${id}" foi alterado para "${novoAutor}" com sucesso!`);
    } else {
        console.log(`O livro "${id}" não foi encontrado em nosso banco de dados, por favor insira um id de livro válido.`);
    }
}

function deletarLivro() {
    const id = prompt("Digite o id do livro que você deseja deletar: ");
    const livroCadastrado = biblioteca.find((livro) => livro.id === id);

    if (livroCadastrado) {
        const index = biblioteca.indexOf(livroCadastrado);
        biblioteca.splice(index, 1);
        console.log(`O livro "${id}" foi deletado com sucesso!`);
    } else {
        console.log(`O livro com id "${id}" não foi encontrado. Por favor, digite um id válido.`);

    }
}

function realizarEmprestimo() {
    const id = prompt("Por favor digite o ID do livro que deseja realizar o empréstimo: ");
    const livroCadastrado = biblioteca.find((livro) => livro.id === id);
    if (livroCadastrado) {
        if (livroCadastrado.emprestado) {
            console.log(`O livro "${id}" já foi emprestado. Por favor digite um id de livro ainda não cadastrado`);
        } else {
            livroCadastrado.emprestado = true;
            console.log(`O  livro "${id}" foi emprestado com sucesso!`);
        }
    } else {
        console.log(`O livro "${id}" não foi encontrado. Por favor, insira um id de livro válido.`);
    }
}

function realizarDevoluçao() {
    const id = prompt("Digite o Id do livro que você irá devolver: ");
    const livroCadastrado = biblioteca.find((livro) => livro.id === id);
    if (livroCadastrado) {
        if (livroCadastrado.emprestado) {
            livroCadastrado.emprestado = false;
            console.log(`O livro "${id}" foi devolvido com sucesso!`);
        } else {
            console.log(`O  livro "${id}" não foi emprestado ainda. Por favor, insira outro ID que eu verifique se o livro foi emprestrado ou não.`);
        }
    } else {
        console.log(`O livro "${id}" não foi encontrado. Por favor, insira um id de livro válido.`);
    }
}

while (true) {
    console.log("\nMenu de opções do sistema de gerenciamento da biblioteca");
    console.log("1) Cadastrar livro");
    console.log("2) Alterar livro");
    console.log("3) Deletar livro");
    console.log("4) Realizar empréstimo do livro");
    console.log("5) Realizar a devolução de um livro");
    console.log("6) Sair");

    const opcao = Number(prompt("Escolha uma opção: "));

    switch (opcao) {
        case 1:
            cadastrarLivro();
            break;

        case 2:
            alterarLivro();
            break;

        case 3:
            deletarLivro();
            break;

        case 4:
            realizarEmprestimo();
            break;

        case 5:
            realizarDevoluçao();
            break;

        case 6:
            console.log("Encerrando programa :) ");
            process.exit(0);
            break;

        default:
            console.log("Opção inválida, por favor escolha uma opção entre ( 1, 2, 3, 4, 5, 6)");
    }
}