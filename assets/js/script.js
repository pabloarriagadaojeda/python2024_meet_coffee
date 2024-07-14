$(document).ready(function () {

    /* Alerta al enviar el mensaje 
    $("#quieroContacto").click(function () {
        alert("De momento nos puedes contactar por WhatsApp a +56935970787");
    });
    */
    
    /* Mostrar los textos en la secciÃģn de presentaciÃģn */
    $(".icono").on("click", function () {
        $(this).siblings(".texto-presentacion").slideToggle();
    });

    /* Despliega los tooltip */
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
});