exports.paginaInicial = (req, res) => {
  res.send('<form action="/" method="POST">Nome do Cliente: <input type="text" name="nome"><br>Outro Campo: <input type="text" name="outra"><br><button>Olá mundo</button></form>');
};

exports.trataPost = (req, res) => {
  res.send('Ei sou sua nova rota de POST.')
}
