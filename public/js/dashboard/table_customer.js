$(document).ready(function () {
    var table = $("#table-customer").dataTable({
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
        $.ajax({
            url: "/api/customer/"+instrument.customer_id,
            type: "GET"
        }).done(function(customer) {
            table.fnClearTable();
            table.fnAddData([
                {key: "Name", value: customer.name || ""},
                {key: "Email", value: customer.email || ""},
                {key: "Skype", value: instrument.skype || ""},
                {key: "Phone", value: instrument.phone || ""}
            ]);
        });
    });
});