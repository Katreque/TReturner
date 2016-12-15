var express = require('express');
var app = express();

    var Ts = [{
            'id': '1',
            'Ttype': 'Type 1',
            'Ttext': 'Tempz',
    },{
    
            'id': '2',
            'Ttype': 'Type 2',
            'Ttext': 'Tapu Koko',
    },{
    
            'id': '3',
            'Ttype': 'Type 23',
            'Ttext': 'teLEPorte',
        }];

    var encontrar = (id) => {

       for(var i = 0; i < Ts.length; i++) {
           
           if(Ts[i].id === id){

            return Ts[i];
        }
       }
       return null;
    }

app.get('/api/trequest', (req, res) => {
    res.send('Ts 4 ya');
});

app.get('/api/trequest/:id', (req, res) => {

    res.set({
        'Access-Control-Allow-Origin': '*',
    })

    if(encontrar(req.params.id) === null){
        return res.status(404).send({ error: 'Baka!'});
    }
    
    res.send(encontrar(req.params.id));
});

app.listen(8080, () =>{
    console.log('Estou na porta 8080');
});