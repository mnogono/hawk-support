/**
 *
 * @constructor
 */
function Observable(){
    this.observers = {};
    this.disableEventType = {};
    this.stopPropagationStatus = {};

    /** current event type */
    this.eventType = "";
}

Observable.prototype.destroy = function() {
    this.unsubscribeAll();
};

/**
 * subscribe object for event type
 * @param {string} eventType
 * @param {object} observer
 * @param {object} [context] by default current observable object
 */
Observable.prototype.subscribe = function(eventType, observer, context) {
    if (!this.observers[eventType]) {
        this.observers[eventType] = [];
    }

    this.observers[eventType].push({
        observer: observer,
        context: context || this
    });

};

/**
 * unsubscribe observer for all events in map
 * @param observer
 */
Observable.prototype.unsubscribeObserver = function(observer) {
    for (var eventType in this.observers) {
        if (!_.isArray(this.observers[eventType])) {
            continue;
        }

        for (var i = this.observers[eventType].length - 1; i >= 0; --i) {
            if (this.observers[eventType][i].observer === observer) {
                this.observers[eventType].splice(i, 1);
            }
        }
    }
};

/**
 * unsubscribe object from event type
 * @param {string} eventType
 * @param {object} observer
 */
Observable.prototype.unsubscribe = function(eventType, observer) {
    if (!this.observers[eventType]) {
        return;
    }

    this.observers[eventType] = _.filter(this.observers[eventType], function(item){
        return item.observer != observer;
    });
};

Observable.prototype.unsubscribeAll = function() {
    this.observers = {};
};

/**
 * invoke all observers for process enabled event type
 * @param {string} eventType
 * @param {Array} [args=[]] list of arguments
 */
Observable.prototype.notify = function(eventType, args) {
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

Observable.prototype.stopPropagation = function() {
    this.stopPropagationStatus[this.eventType] = true;
};

Observable.prototype.propagationStopped = function(eventType) {
    return this.stopPropagationStatus[eventType] === true;
};