var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopping');
var products =[
    new Product({
        imagePath: 'https://steampay.com/image/playerunknowns-battlegrounds.jpg?1505771258',
        title: 'PUBG',
        description: 'Action, Adventure',
        price: 14
    }),
    new Product({
        imagePath: 'https://steampay.com/image/grand-theft-auto-v-premium-online-edition.jpg?1565861609',
        title: 'GRAND THEFT AUTO V',
        description: 'Action, Adventure',
        price: 20
    }),
    new Product({
        imagePath: 'https://steampay.com/image/dirt-rally.jpg?1505771258',
        title: 'DIRT RALLY',
        description: 'Simulators, Race, Sport' ,
        price: 1
    }),
    new Product({
        imagePath: 'https://steampay.com/image/resident-evil-2.jpg?1531218614',
        title: 'RESIDENT EVIL 2',
        description: 'Action',
        price: 10
    }),
    new Product({
        imagePath: 'https://steampay.com/image/doom.jpg?1505771258',
        title: 'DOOM',
        description: 'Action',
        price: 5
    }),
    new Product({
        imagePath: 'https://steampay.com/image/terraria.jpg?1505771258',
        title: 'TERRARIA',
        description: 'Action, RPG, Adventure' ,
        price: 3
    }),
    new Product({
        imagePath: 'https://steampay.com/image/far-cry-5.jpg?1505771258',
        title: 'FAR CRY 5',
        description: 'Action, Adventure',
        price: 25
    }),
    new Product({
        imagePath: 'https://steampay.com/image/the-elder-scrolls-v-skyrim.jpg?1505771258',
        title: 'THE ELDER SCROLLS V',
        description: 'RPG',
        price: 7
    }),
    new Product({
        imagePath: 'https://steampay.com/image/cities-skylines.jpg?1505771258',
        title: 'CITIES: SKYLINES',
        description: 'Strategies, Simulators' ,
        price: 2
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
