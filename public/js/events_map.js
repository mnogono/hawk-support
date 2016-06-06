/**
 * global events for application
 * @constructor
 * @extends Observable
 */
function EventsMap() {
    Observable.call(this);
}
EventsMap.prototype = Object.create(Observable.prototype);

EventsMap.prototype.notify = function(eventType, args) {
    if (!this.observers[eventType]) {
        return;
    }

    //check if event type was disabled
    if (this.disableEventType[eventType]) {
        return;
    }

    this.stopPropagationStatus[eventType] = false;

    var prevEventType = this.eventType;

    for (var i = 0; i < this.observers[eventType].length; ++i) {
        this.eventType = eventType;
        var item = this.observers[eventType][i];

        if (_.isFunction(item.observer)) {
            //invoke observer as function
            item.observer.apply(item.context, args || []);
        } else {
            //invoke observer as function object
            if (item.observer[eventType]) {
                item.observer[eventType].apply(item.context, args || []);
            }
        }

        if (this.stopPropagationStatus[this.eventType] === true) {
            break;
        }
    }

    if (!_.isEmpty(prevEventType)) {
        this.eventType = prevEventType;
    }
};

var eventsMap = new EventsMap();