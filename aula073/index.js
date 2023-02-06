function teste() {
  console.log('Este é meu teste!')
}

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
    teste();
  }
  // Método de instância
  aumentarVolume() {
    this.volume += 2;
  }
  diminuirVolume() {
    this.volume -= 2;
  }
  // Método estático - Não tem acesso aos dados da  instância
  static trocaPilha() {
    console.log('Ok, vou trocar.')
  }
}

const controle1 = new ControleRemoto('LG');
