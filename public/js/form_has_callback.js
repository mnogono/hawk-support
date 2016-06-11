function initInputCallback() {
    $("div.has-feedback input.form-control").change(function () {
        var parent = $(this).parent();
        var spanGluphicon = $(this).siblings("span.glyphicon");
        var span = $(this).siblings("span.sr-only");
        if (_.isEmpty($(this).val())) {
            console.log("text is empty");
            parent.switchClass("has-success", "has-error");
            spanGluphicon.switchClass("glyphicon-ok", "glyphicon-remove");
            span.text("(error)");
        } else {
            console.log("text is not empty");
            parent.switchClass("has-error", "has-success");
            spanGluphicon.switchClass("glyphicon-remove", "glyphicon-ok");
            span.text("(success)");
        }
    });
}
