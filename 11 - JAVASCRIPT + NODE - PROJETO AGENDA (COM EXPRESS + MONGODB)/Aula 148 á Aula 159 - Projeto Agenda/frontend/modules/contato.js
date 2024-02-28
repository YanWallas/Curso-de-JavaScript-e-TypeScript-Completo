import validator from 'validator';

export default class Contato {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if(!this.form) return;
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.validate(e);
    })
  }

  validate(e) {
    const el = e.target;
    const nomeInput = el.querySelector('input[name="nome"]');
    const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
    const emailInput = el.querySelector('input[name="email"]');
    const telefoneInput = el.querySelector('input[name="telefone"]');
    let error =  false;


    if(!nomeInput.value) { 
      alert('Nome é um campo obrigatório');
      error = true;
    }

    if(!emailInput.value && !telefoneInput.value) { 
      alert('Envie Pelos menos um contato (e-mail ou telefone)');
      error = true;
    }

    if(emailInput.value) {
      if(!validator.isEmail(emailInput.value)) {
        alert('E-mail inválido');
        error = true;
      }
    }
    
    if(!error) el.submit();
  }
}