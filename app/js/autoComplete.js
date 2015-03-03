$(document).ready(function() {
    

var $input = $('.typeahead');
$input.typeahead({source:[{id: "someId1", name: "Display name 1"}, 
            {id: "someId2", name: "Display name 2"}], 
            autoSelect: true}); 
$input.change(function() {
    var current = $input.typeahead("getActive");
    if (current) {
        // Some item from your model is active!
        if (current.name == $input.val()) {
            // This means the exact match is found. Use toLowerCase() if you want case insensitive match.
        } else {
            // This means it is only a partial match, you can either add a new item 
            // or take the active if you don't want new items
        }
    } else {
        // Nothing is active so it is a new value (or maybe empty value)
    }
});


});