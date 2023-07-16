$(document).ready(function () {
  // Comportamento padrão do validator
  jQuery.validator.setDefaults({
    errorPlacement: function (error, element) {
      error.addClass('invalid-feedback');
      element.closest('.form-group').append(error);
    },
    highlight: function (element) {
      $(element).addClass('is-invalid').removeClass('is-valid');
    },
    unhighlight: function (element) {
      $(element).addClass('is-valid').removeClass('is-invalid');
    }
  })

  // Máscara
  $('#NumTelefone').mask(function(val) {
      return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009'
  }, {
      onKeyPress: function(val, e, field, options) {
          field.mask(function(val) {
              return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009'
          }.apply({}, arguments), options)
      }
  })

  // Validações
  $('#form').validate({
    rules: {
      descNome: {
        required: true,
        nome: true
      },
      numTelefone: {
        required: true,
        telefone: true
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      descNome: {
        required: "Por favor, insira seu nome completo."
      },
      numTelefone: {
        required: "Por favor, insira seu telefone."
      },
      email: {
        required: "Por favor, insira seu email.",
        email: "Por favor, insira um email válido."
      }
    },
    submitHandler: function(form, event) {
      event.preventDefault()
      $(':input:not([type="submit"])', form).each(function () {
        $(this).removeClass('is-valid')
        this.value = ''
      })
      $("#submitMessage").removeClass("hidden").text("Formulário enviado. Obrigado!")
    }
  })

  // Validações de formato
  $.validator.addMethod("telefone", function(value, element) {
    return this.optional(element) || /^\(\d{2}\) \d{4,5}-\d{4}$/.test(value)
  }, "Por favor, insira um número de telefone válido.")

  $.validator.addMethod("nome", function(value, element) {
    return this.optional(element) || /\b\w+\b.*\b\w+\b/.test(value)
  }, "Por favor, insira seu nome e sobrenome.")
});
