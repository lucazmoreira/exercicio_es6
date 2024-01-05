// Define a classe Aluno
class Aluno {
  constructor(nomeAluno, notaAluno) {
    this.nome = nomeAluno;
    this.nota = notaAluno;
  }
}

// Cria um array de alunos
const alunos = [
  new Aluno("Lucas", 10),
  new Aluno("Cláudia", 9),
  new Aluno("José", 8),
  new Aluno("Sara", 6),
  new Aluno("Amanda", 3),
];

// Função para checar alunos aprovados
function checarAlunos(alunos) {
  return alunos.filter((aluno) => aluno.nota >= 6);
}

// Chama a função checarAlunos com o array de alunos e exibe o resultado no console
const alunosAprovados = checarAlunos(alunos);
console.log(alunosAprovados);
