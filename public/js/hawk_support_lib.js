function historyBack() {
    var backLocation = document.referrer;
    if (backLocation) {
        var location = $.query.load(backLocation).set("randomParam", new Date().getTime()).toString();
        window.location.assign(backLocation + location);
    }
}