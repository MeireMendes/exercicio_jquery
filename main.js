$(document).ready(function () {
    $("#taskForm").submit(function (event) {
        event.preventDefault();

        var taskName = $("#taskInput").val();

        if (taskName !== "") {
            var listItem = $("<li>" + taskName + "</li>");

            listItem.click(function () {
                $(this).toggleClass("completed");
            });

            $("#taskList").append(listItem);

            $("#taskInput").val("");
        }
    });
});
