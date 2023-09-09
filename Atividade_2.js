const alunos = []

function calculoMedia(media) {
  if (media >= 7) {
    return "Aluno(a) aprovado por média";
  } else if (media >= 5 && media < 7) {
    return "Aluno(a) está em recuperação";
  } else {
    return "Aluno(a) está reprovado";
  }
}

while (true) {
  console.log("\nMenu acadêmico: ");
  console.log("1. Cadastrar aluno(a) ");
  console.log("2. Cadastrar notas ");
  console.log("3. Exibir boletim (2023.2)");
  console.log("4. Fechar programa");

  const opcao = Number(prompt("Escolhe uma opção: "));

  switch (opcao) {
    case 1:
      const nomeAluno = prompt("Digite o nome do(a) aluno(a): ");
      alunos.push({ nome: nomeAluno, notas: [] });
      console.log(`Aluno(a) "${nomeAluno}" cadastrado com sucesso.`);
      break;

    case 2:
      const notasNomeAluno = prompt("Digite o nome do(a) aluno(a) para cadastrar nota: ")
      const aluno = alunos.find((a) => a.nome === notasNomeAluno);

      if (aluno) {
        const notas = [];

        for (let i = 0; i < 3; i++) {
          let nota;

          do {
            let nota = Number(prompt(`Digite a nota ${i + 1} do(a) ${notasNomeAluno}: `));
            notas.push(Math.round(nota));
          } while (nota <= 10 && nota >= 0);
        }
        aluno.notas = notas;
        console.log("As notas foram cadastradas com sucesso!" + notasNomeAluno);
      } else {
        console.log("Aluno(a) não encontrado. Por favor, digite um nome de um aluno(a) já cadastrado(a)");
        console.log("Caso não tenha cadastrado ainda, cadastre seu aluno no menu opções");
      }
      break;

    case 3:
      const exibeBoletim = prompt("Digite o nome do(a) aluno(a) para exibir o boletim: ");
      const alunoBoletim = alunos.find((a) => a.nome === exibeBoletim);

      if (exibeBoletim) {
        const media = Math.round(alunoBoletim.notas.reduce((acc, nota) => acc + nota, 0) / alunoBoletim.notas.length);
        const desempenhoAluno = calcularDesempenho(media);

        console.log(`Nome: ${alunoBoletim.nome}`);
        console.log(`Notas arrendondadas: ${alunoBoletim.notas.join(" , ")}`);
        console.log(`Média: ${media}`);
        console.log(`Dsempenho do(a) aluno(a): ${desempenhoAluno}`);

      } else {
        console.log("Aluno(a) não encontrado.");
      }
      break;
    case 4:
      console.log("Encerrando o programa. ");
      process.exit(0);

    default:
      console.log("Opção inválida. Por favor escolha somente os números presentes no menu.");

  }
}