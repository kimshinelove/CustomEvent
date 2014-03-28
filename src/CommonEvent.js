var CommonCustomEvent = CommonCustomEvent || function(eventType, DataObject) {
    var event = null;
    if(!document.createEvent) { // for etc
        event = CustomEvent(eventType, {
            detail: DataObject
        });
    } else { // for IE
        var event = document.createEvent("Event");
        event.initEvent(eventType, true, false);
        event.detail = DataObject
    }

    return event;
}

Element.prototype.addCommonEventListener = Element.addCommonEventListener || function(eventType, customEvent) {
    if (this.addEventListener) { // W3C DOM
        this.addEventListener(eventType, customEvent, false);
    } else if (this.attachEvent) { // IE DOM
        this.attachEvent("on"+eventType, customEvent);
    } else { // No much to do
        this[eventType] = customEvent;
    }
};

Element.prototype.commonFireEvent = Element.commonFireEvent || function(eventType, dataObject) {
    var event = new CommonCustomEvent(eventType, {data:dataObject});

    if(this.dispatchEvent) {
        this.dispatchEvent(event);
    }
};