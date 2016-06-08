$(document).ready(function() {
    var table = $("#table-repair-logs").dataTable({
        paging: false,
        info: false,
        columns: [
            {data: "created_at", title: "Created Date"},
            {data: "updated_at", title: "Updated Date"},
            {data: "status", title: "Status"},
            {data: "name", title: "Name"},
            {data: "comment", title: "Description"},
            {data: "reporter", title: "Reporter"},
            {data: "assignee", title: "Assignee"}
        ]
    });

    eventsMap.subscribe(events.dashboard.ON_INSTRUMENT_SELECT, function(instrument) {
        $.ajax({
            url: "/api/instrument/"+instrument.id+"/repair_logs",
            type: "GET"
        }).done(function(repairLogs) {
            table.fnClearTable();
            if (!_.isEmpty(repairLogs)) {
                var data = repairLogs.map(function(repairLog) {
                    var d = _.clone(repairLog);
                    d.created_at = dateFormat(d.created_at, "yyyy-mm-dd");
                    d.updated_at = dateFormat(d.updated_at, "yyyy-mm-dd");
                    d.reporter = d.reporter_id || "";
                    d.assignee = d.assignee_id || "";

                    return d;
                });

                table.fnAddData(data);

                //update reporter data
                table.api().rows().iterator("row", function(context, index) {
                    var reporterId = table.api().row(index).data().reporter;
                    if (parseInt(reporterId)) {
                        $.ajax({
                            url: "/api/user/" + reporterId,
                            type: "GET"
                        }).done(function(user) {
                            var data = table.api().row(index).data();
                            data.reporter = user.name;
                            table.api().row(index).data(data);
                        });
                    }

                    var assigneeId = table.api().row(index).data().assignee;
                    if (parseInt(assigneeId)) {
                        $.ajax({
                            url: "/api/user/" + assigneeId,
                            type: "GET"
                        }).done(function(user) {
                            var data = table.api().row(index).data();
                            data.assignee = user.name;
                            table.api().row(index).data(data);
                        });
                    }

                });
            }
        });
    });
});