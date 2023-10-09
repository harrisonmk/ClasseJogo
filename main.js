// Classe Heroi
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
      default:
        ataque = 'não possui ataque definido';
    }
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criação de um herói
const meuHeroi = new Heroi('Gandalf', 60, 'mago');

// Chamada do método atacar
meuHeroi.atacar(); // Exibe "O mago atacou usando magia"