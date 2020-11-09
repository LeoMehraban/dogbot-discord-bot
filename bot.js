console.log("Beep Boop?");


const Discord = require('discord.js');
const random = require('node-dogandcat');
const fs = require('fs');
let url;
let fact;
const client = new Discord.Client();
client.login(fs.readFileSync(`${__dirname}/token.txt`, 'utf8'))
client.on('ready', () => {
    console.log("Beep Boop Beep! Ready To Go")
})

random.getRandomDog() // Returns a promise containing the image url that you can resolve.
.then(result => console.log(result))
.catch(err => console.error(err));

random.getRandomDogFact() // Returns a promise containing the random dog fact that you can resolve. You can also specify the amount to get as a function argument, but the default is 1, if the amount is more than 1, it will return an array.
.then(result => console.log(result))
.catch(err => console.error(err));

client.on('message', (msg) => {
    random.getRandomDog() // Returns a promise containing the image url that you can resolve.
    .then(result => {
        console.log(result);
        url = result
    })
    .catch(err => console.error(err));

    random.getRandomDogFact() // Returns a promise containing the random dog fact that you can resolve. You can also specify the amount to get as a function argument, but the default is 1, if the amount is more than 1, it will return an array.
    .then(result => {
        console.log(result);
        fact = result
    })
    .catch(err => console.error(err));
    console.log(msg.content);
    if(msg.content == "Send Me A Dog"){
        //msg.reply("I Can't Do That Yet :(")
        // random.getRandomDog().then(result => url = result).catch(err => console.error(err));
        // random.getRandomDogFact().then(result => fact = result).catch(err => console.error(err));
        setTimeout(() => {  msg.reply(`${url} \n ${fact}`) }, 2000);
    }
})