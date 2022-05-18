$(document).ready(function(){
    var person = {
        name: "Gambo",
        age: 20,
        city: 'Lagos'
    };

    person.country = 'Pakistan';
    delete person.country
    for(p in person){
        alert(person[p]);
    }
})