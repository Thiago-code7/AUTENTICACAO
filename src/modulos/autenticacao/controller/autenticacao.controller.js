const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');



// Definindo variaveis de ambiente para TEMPO_ACESS_TOKEN e TEMPO_REFRESH_TOKEN
const tempo_acess_token = process.env.TEMPO_ACESS_TOKEN;
const tempo_refresh_token = process.env.TEMPO_REFRESH_TOKEN;

class AutenticacaoController{
    // gerando o token
    static gerarTokenAcesso(dadosAluno){
        return jwt.sign(dadosAluno, process.env.SECRET_KEY, {
            expiresIn: tempo_acess_token
        });
    };
    // refress token
    static gerarRefressToken(dadosUsuario){
        return jwt.sign(dadosUsuario, process.env.SECRET_KEY, {
            expiresIn: tempo_refresh_token
        });
    };
    
    static async login(req, res) {
        try {
        
            
        } catch (error) {
            
        }
      }
      static async sair() {
        try {
            
        } catch (error) {
            
        }
      }
}