$(document).ready(function () {
  // Comportamento padrão do validator
  jQuery.validator.setDefaults({
    errorPlacement: function (error, element) {
      error.addClass('invalid-feedback')
      element.closest('.formGroup').append(error)
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass('is-invalid').removeClass('is-valid')
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass('is-valid').removeClass('is-invalid')
    }
  })
  
  // Máscaras
  $('#NumCpf').mask('000.000.000-00')
  $('#NumTelefone').mask(function(val) {
      return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009'
  }, {
      onKeyPress: function(val, e, field, options) {
          field.mask(function(val) {
              return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009'
          }.apply({}, arguments), options)
      }
  })
  $('#NumCep').mask('00000-000')
  
  // Validações
  $('#form').validate({
    rules: {
      descNome: {
        required: true,
        nome: true
      },
      numCpf: {
        required: true,
        cpf: true
      },
      numTelefone: {
        required: true,
        telefone: true
      },
      email: {
        required: true,
        email: true
      },
      descEndereco: {
        required: true,
        endereco: true
      },
      numCep: {
        required: true,
        cep: true
      },
    },
    messages: {
      descNome: {
        required: "Por favor, insira seu nome completo.",
        nome: "Por favor, insira seu nome e sobrenome."
      },
      numCpf: {
        required: "Por favor, insira seu CPF.",
        cpf: "Por favor, insira um CPF válido."
      },
      numTelefone: {
        required: "Por favor, insira seu telefone.",
        telefone: "Por favor, insira um telefone válido."
      },
      email: {
        required: "Por favor, insira seu email.",
        email: "Por favor, insira um email válido."
      },
      descEndereco: {
        required: "Por favor, insira seu endereço.",
        endereco: "Por favor, insira um endereço válido."
      },
      numCep: {
        required: "Por favor, insira seu CEP.",
        cep: "Por favor, insira um CEP válido."
      }
    },
    submitHandler: function(form, event) {
      event.preventDefault()
      $(':input:not([type="submit"])', form).each(function () {
        $(this).removeClass('is-valid')
        this.value = ''
      })
      $("#submitMessage").removeClass("hidden").addClass("success").text("Formulário enviado. Obrigado!")
    }
  })

  // Validações de formato
  $.validator.addMethod("cpf", function(value, element) {
    return this.optional(element) || /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(value)
  }, "Por favor, insira um CPF válido.")

  $.validator.addMethod("telefone", function(value, element) {
    return this.optional(element) || /^\(\d{2}\) \d{4,5}-\d{4}$/.test(value)
  }, "Por favor, insira um número de telefone válido.")

  $.validator.addMethod("cep", function(value, element) {
    return this.optional(element) || /^\d{5}-\d{3}$/.test(value)
  }, "Por favor, insira um CEP válido.")

  $.validator.addMethod("nome", function(value, element) {
    return this.optional(element) || /\b\w+\b.*\b\w+\b/.test(value)
  }, "Por favor, insira seu nome e sobrenome.")

  $.validator.addMethod("endereco", function(value, element) {
    return this.optional(element) || /\b\w+\b.*\b\w+\b/.test(value)
  }, "Por favor, insira seu endereço completo.")

})
