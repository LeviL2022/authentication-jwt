module.exports = {
  rotas: require('./usuarios-rotas'),
  controlador: require('./usuarios-controlador'),
  modelo: require('./usuarios-modelo'),
  estrategiasAutenticação: require('./estrategias-autenticação'),
  middlewareAutenticacao: require('./middlewares-autenticação')
}