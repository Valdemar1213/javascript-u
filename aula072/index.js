class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if(this.ligado) {
      console.log(this.nome + ' já ligado')
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if(!this.ligado) {
      console.log(this.nome + ' já desligado')
      return;
    }

    this.ligado = false;
  }
}

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome); // Necessita do super ao usar extends

    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi) {
    super(nome);

    this.temWifi = temWifi;
  }

  ligar() {
    console.log('Olha, você alterou o método ligar!')
  }
}

const s1 =  new Smartphone('Samsung', 'Preto', 'Galaxy S10');

const t1 = new Tablet('ipad', true);
console.log(t1);
