$(document).ready(function() {
    var table = $("#table-support-logs").dataTable({
        paging: false,
        info: false,
        columns: [
            {data: "created_at", title: "Created Date"},
            {data: "updated_at", title: "Updated Date"},
            {data: "name", title: "Name"},
            {data: "comment", title: "Description"}
        ]
    });

    eventsMap.subscribe(events.dashboard.ON_INSTRUMENT_SELECT, function(instrument) {
        $.ajax({
            url: "/api/instrument/"+instrument.id+"/support_logs",
            type: "GET"
        }).done(function(supportLogs) {
            table.fnClearTable();
            if (!_.isEmpty(supportLogs)) {
                var data = supportLogs.map(function(supportLog) {
                    var d = _.clone(supportLog);
                    d.created_at = dateFormat(d.created_at, "yyyy-mm-dd");
                    d.updated_at = dateFormat(d.updated_at, "yyyy-mm-dd");
                    return d;
                });

                table.fnAddData(data);
            }
        });
    });
});