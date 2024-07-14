$(document).ready(function () {

    /* Alerta al enviar el mensaje */
    $("#enviarCorreo").click(function () {
        alert("Mensaje enviado correctamente, te estaremos contactando pronto. ÂĄBuen dÃ­a!");
    });
    
    /* Mostrar los textos en la secciÃģn de presentaciÃģn */
    $(".icono").on("click", function () {
        $(this).siblings(".texto-presentacion").slideToggle();
    });

    /* Despliega los tooltip */
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
});