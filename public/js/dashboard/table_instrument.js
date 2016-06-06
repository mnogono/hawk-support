$(document).ready(function () {
    var table = $("#table-instrument").dataTable({
        info: false,
        autoWidth: true,
        paging: false,
        searching: false,
        ordering: false,
        columns: [
            {data: "key"},
            {data: "value"}
        ]
    });

    eventsMap.subscribe(events.dashboard.ON_INSTRUMENT_SELECT, function(instrument) {
        table.fnClearTable();
        table.fnAddData([
            {key: "S/N", value: instrument.serial_number || ""},
            {key: "Monitor S/N", value: instrument.monitor_serial_number || ""},
            {key: "UPS S/N", value: instrument.ups_serial_number || ""}
        ]);
    });
});