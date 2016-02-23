var express = require('express');
var bodyParser = require('body-parser');
/**
 * Registration
 */
class Registration {
    constructor(registration) {
        this.salutation = registration.salutation;
        this.name = registration.name;
        this.age = registration.age;
    }
    isValid() {
        return this.age >= 18;
    }
}
var registrations = new Array();
registrations.push({ salutation: 'zhou', name: 'dongdong', age: 12 }, { salutation: 'zhou1', name: 'dongdong', age: 12 });
var app = express();
app.use(bodyParser());
app.use(express.static('../client'));
app.get('/api/registrations', (req, res) => {
    res.send(registrations);
});
app.post('/api/register', (req, res) => {
    var registration = new Registration(req.body);
    if (registration.isValid()) {
        registrations.push(registration);
        res.send(201);
    }
    else {
        res.send(400);
    }
});
app.listen(process.env.PORT || 3000);
//# sourceMappingURL=app.js.map