$(document).ready(function () {
  $(function () {
    $("#nombre").validate(abcdefghijklmnñopqrstuvwxyz);
  });

  jQuery.validator.addMethod(
    "lettersonly",
    function (value, element) {
      return this.optional(element) || /^[a-z]+$/i.test(value);
    },
    "Ingrese solo letras"
  );

  $("#formulario").validate({
    rules: {
      nombre: {
        required: true,
        maxlength: 15,
        minlength: 3,
        lettersonly: true,
      },
      apellido: {
        required: true,
        maxlength: 15,
        minlength: 3,
        lettersonly: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefono: {
        required: true,
        number: true,
        maxlength: 2,
      },
    },
    messages: {
      nombre: {
        required: "Introduzca sus nombres",
        maxlength: "Maximo 15 caracteres",
        minlength: "Minimo 3 caracteres",
      },
      email: {
        required: "Introduzca sus correo electronico",
        email: "correo invalido",
      },
      apellido: {
        required: "Introduzca sus apellidos",
        maxlength: "Maximo 15 caracteres",
        minlength: "Minimo 3 caracteres",
      },
      telefono: {
        required: "Por favor, introduzca su telefono",
        number: "Ingrese solo numeros",
        maxlength: "Maximo de 2 cifras",
      },
    },

    submitHandler: function (form) {
      alert(`Bienvenido ${$("#nombre").val()}`);
      form.submit();
    },
  });
});
