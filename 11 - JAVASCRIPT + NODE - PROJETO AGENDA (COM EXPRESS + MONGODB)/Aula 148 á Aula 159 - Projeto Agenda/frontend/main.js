import 'core-js/stable';
import 'regenerator-runtime/runtime';

//VALIDANDO FRONTEND

//VALIDANDO FORMULÁRIO LOGIN/CADASTRO.
import Login from './modules/Login'; //Importando função Login do arquivo login.

import Contato from './modules/contato'; 

const login = new Login('.form-login');//jogando a class da função na const.
const cadastro = new Login('.form-cadastro');
login.init(); // iniciando a const.
cadastro.init();

const contato = new Contato('.form-contato');
contato.init(); // iniciando a const.

//import './assets/css/style.css';   