$(document).ready(function () {
    var tableInstruments = $("#table-instruments").dataTable();

    $("#table-instruments tbody").on("click", "tr", function () {
        tableInstruments.$("tr.selected").removeClass("selected");
        $(this).addClass("selected");

        var id = $(this).attr("uid");
        $.ajax({
            url: "/api/instrument/" + id,
            type: "GET"
        }).done(function (instrument) {
            eventsMap.notify(events.dashboard.ON_INSTRUMENT_SELECT, [instrument]);
        });
    });
});