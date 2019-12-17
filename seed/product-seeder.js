var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopping');
var products =[
    new Product({
        imagePath: 'https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/pub_660x450_010219045955.jpg',
        title: 'PUBG',
        description: 'Action, Adventure',
        price: 14
    }),
    new Product({
        imagePath: 'https://cs10.pikabu.ru/post_img/big/2018/11/01/3/1541043759174654068.jpg',
        title: 'GRAND THEFT AUTO V',
        description: 'Action, Adventure',
        price: 20
    }),
    new Product({
        imagePath: 'https://steamcdn-a.akamaihd.net/steam/apps/310560/header.jpg?t=1573486834',
        title: 'DIRT RALLY',
        description: 'Simulators, Race, Sport' ,
        price: 1
    }),
    new Product({
        imagePath: 'https://24tv.ua/resources/photos/news/1200x675_DIR/201901/1102081.jpg?201901150903',
        title: 'RESIDENT EVIL 2',
        description: 'Action',
        price: 10
    }),
    new Product({
        imagePath: 'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Doom_image1600w.jpg',
        title: 'DOOM',
        description: 'Action',
        price: 5
    }),
    new Product({
        imagePath: 'https://steamcdn-a.akamaihd.net/steam/apps/105600/header.jpg?t=1575497279',
        title: 'TERRARIA',
        description: 'Action, RPG, Adventure' ,
        price: 3
    }),
    new Product({
        imagePath: 'https://game2day.ru//images/made/7b4f3a1209326b54/061717_052793331705.jpg.8255fb2c005ddc37b174724f912fa087_360_208_s_c1.jpg',
        title: 'FAR CRY 5',
        description: 'Action, Adventure',
        price: 25
    }),
    new Product({
        imagePath: 'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_TheElderScrollsVSkyrim_image1600w.jpg',
        title: 'THE ELDER SCROLLS V',
        description: 'RPG',
        price: 7
    }),
    new Product({
        imagePath: 'https://hb.imgix.net/f4a2520c250adbe6cf282ad9b508eeb51a56a466.jpg?auto=compress,format&fit=crop&h=353&w=616&s=55793bc47c826ba5c7533c663fbb4094',
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
