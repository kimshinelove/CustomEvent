CustomEvent 1.0.0
===========

FEATURE
-----------
* Extends DOM Element prototype
* Cross Browser - Chrome, Firefox and IE. (probably it is working in other browser.)

Sample Code - enter, esc Custom Event
-----------
initialize input form:

    var welEnterInput = document.getElementById("_enter_event");
    
add keyup event handler:

    welEnterInput.addCommonEventListener("keyup", function(event) {
        var string = event.currentTarget.value;

         if(event.keyCode && event.keyCode == 13) {
             welEnterInput.commonFireEvent("enter", string);
         } else if(event.keyCode && event.keyCode == 27) {
             welEnterInput.commonFireEvent("esc", "");
         }
    });
    
add custom event when press enter key:

    welEnterInput.addCommonEventListener("enter", function(event) {
        console.log(event.detail.data);
    });
    
add custom event when press esc key:

    welEnterInput.addCommonEventListener("esc", function(event) {
        event.currentTarget.value = "";
    });

[Sample Demo](https://rawgithub.com/kimshinelove/CustomEvent/master/sample.html "Sample Demo")
