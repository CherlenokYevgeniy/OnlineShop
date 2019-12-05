var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopping');
var products =[
    new Product({
        imagePath: 'http://orbitnetwork.ru/images/kartinki-iz-komputernyh-igr/02.jpg',
        title: 'Assasin',
        description: 'good game',
        price: 10
    }),
    new Product({
        imagePath: 'https://delta-game.ru/wp-content/uploads/2017/07/PUBG.png',
        title: 'PUBG',
        description: 'very good game',
        price: 20
    }),
    new Product({
        imagePath: 'https://gagadget.com/media/uploads/games2015/grand_theft_auto_v.jpg',
        title: 'GTA5',
        description: 'good game',
        price: 30
    }),
    new Product({
        imagePath: 'https://la-mansh.com.ua/images/kartinki/kartinki_articles/tegos_games.jpg',
        title: 'Super Mario',
        description: 'good game',
        price: 10
    })
];

var done = 0;
for (var i = 0; i < products.length; i++){
    products[i].save(function (err, result) {
        if(err){

        }
        done++;
        if (done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}
