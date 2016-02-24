import express = require('express');

var bodyParser = require('body-parser');

interface IRegistration {
    salutation: string;
    name: string;
    age: number;
}
/**
 * Registration 
 */
class Registration implements IRegistration {
    public salutation: string;
    public name: string;
    public age: number;
    constructor(registration: IRegistration) {
        this.salutation = registration.salutation;
        this.name = registration.name;
        this.age = registration.age;

    }
    public isValid() {
        return this.age >= 18;
    }
}

var registrations = new Array<IRegistration>();

registrations.push({ salutation: 'zhou', name: 'dongdong', age: 12 },
    { salutation: 'zhou1', name: 'dongdong', age: 12 });

var app = express();
app.use(bodyParser());
app.use(express.static('../client'));



app.get('/api/registrations', (req, res) => {
    console.log(registrations);
    res.send(registrations);
})

app.post('/api/register', (req, res) => {
    var registration = new Registration(<IRegistration>req.body);

    if (registration.isValid()) {
        console.log(registration);
        registrations.push(registration);
        res.send(201);
    } else {
        res.send(400);
    }
})
app.use((req,res,next)=>{
    console.log('Time',Date.now());
    console.log(req.body);
    //next();
})
app.listen(process.env.PORT || 3000,()=>{
    console.log('listening.... port 3000')
})