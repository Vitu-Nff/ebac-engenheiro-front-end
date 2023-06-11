$(document).ready(function(){
    $("#taskForm").submit(function(event){
        event.preventDefault();
        var task = $("#taskInput").val();
        $("#pendingTasks").prepend('<li>'+task+'</li>');
        $("#taskInput").val('');
    });

    $(document).on('click', '#pendingTasks li', function(){
        $(this).toggleClass('done');
        if ($(this).hasClass('done')) {
            $(this).detach().appendTo('#completedTasks');
        }
    });

    $(document).on('click', '#completedTasks li', function(){
        $(this).toggleClass('done');
        if (!$(this).hasClass('done')) {
            $(this).detach().prependTo('#pendingTasks');
        }
    });
});
