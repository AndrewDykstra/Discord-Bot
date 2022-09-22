const Discord = require("discord.js");

const YTDL = require("ytdl-core");

const TOKEN = "TOKEN REMOVED FOR PRIVACY REASONS ON GITHUB";

const  PREFIX = "!";

function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

    server.nowPlaying = server.queue[0];

    server.queue.shift();

    server.dispatcher.on("end", function() {
        if(server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}

var admin = 0;

var fortunes = [
    "yes",
    "no",
    "Maybe",
    "Is it even a question?",
    "Come Back Later"
];

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function() {
    console.log("Ready");
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;


    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "info":
            message.channel.sendMessage("I Am The Dank Train And I Am The Dankest Bot Of Them All ©Blingzard Blongewel");
            break;
        case "8ball":
            if(args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random()*fortunes.length)]);   
            else message.channel.sendMessage("I can't read that");
            break;
        case "help":
            var embed = new Discord.RichEmbed()
                .addField("Music Commands", "!play+(youtube url) \n!skip \n!stop \n!queue", true)
                .addField("General", "!summon \n!leave \n!pingtest \n!commanddetails ", true)
                .addField("Other Commands", "!8ball+(question) \n!ping", true)
                .setColor(0x00FFFF)
                //add in newer commands in progress
                .setFooter("You Can't Stop The Dank Train")
                message.channel.sendEmbed(embed);
            break;
        case "hi":
            message.channel.sendMessage(message.author.toString() + "hi");
            break;
        case "play":
                if(!args[1]) {
                    message.channel.sendMessage("Please Send A Link");
                    return;
                }

                if(!message.member.voiceChannel) {
                    message.channel.sendMessage("You Must be in a Voice Channel");
                    return;
                }
                
                if(!servers[message.guild.id]) servers[message.guild.id] = {
                    queue: []
                };

                var server = servers[message.guild.id];

                server.queue.push(args[1]);

            if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
                    play(connection, message);
                });
            break;
        case  "timeout":
            
            break;
        case "skip":
            var server = servers[message.guild.id];
            if(skip && queue[0] == true){
                message.channel.author + new date [date.time];
                if(queue)
            }
            server.nowPlaying = {};

            if(server.dispatcher) server.dispatcher.end();  
            break;
        case "stop":
                var server = servers[message.guild.id];

                server.nowPlaying = {};

                server.queue = [];

                server.dispatcher.end(); 

                console.log("[" + new Date().toLocaleString() + "] " + message.author.toString() + " Stopped the queue.");
                message.channel.sendMessage(message.author.toString() + " Ended the queue")
            break;
        case "queue":
            var server = servers[message.guild.id];

            if(server && server.nowPlaying){
                message.channel.sendMessage("Currently Playing: " + server.nowPlaying);
            } else {
                message.channel.sendMessage("Nothing is currently playing");
            }

            
            if(server && server.queue){
                message.channel.sendMessage("In the queue: ");
                for(var i = 0; i<server.queue.length; i++){
                    message.channel.sendMessage(i+1 + ": " + server.queue[i]);
                }
            }
  
            break;
        case "profile":
                message.channel.sendMessage("Profile Picture: " + message.author.displayAvatarURL);
                message.channel.sendMessage("Username: " + message.author.toString());
                //message.channel.sendMessage(client.memberHasRole(member, role))
                var embed = new Discord.RichEmbed()
                .setFooter("Dank Train Profiles")
                console.log("[" + new Date().toLocaleString() + "] " + message.author.toString() + "Searched their profile")
            break;
        case "summon":
                message.member.voiceChannel.join();
            break;
        case "leave":
                voiceChannel.connection(0);
            break;
        case "commanddetails":
                message.channel.sendMessage("");
                var emebed = new Discord.RichEmbed()
                .addField("Test Title1, Test Description1")
                .addField("Test Title2, Test Description1")
                .addField("Test Title3, Test Description")
                .addField("Test Title4, Test Description")
                .addField("Test Title5, Test Description")
                .addField("Test Title6, Test Description")
                send.channel.sendEmbed(embed);
            break;
        case "pingtest":
                message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");
                message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");
                message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");
                message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");
                message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");
                message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");
                message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");
                message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");
                message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");
                message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");
            break;
        case "spam":
                message.channel.send("Message test")
            break;
        case "minigame":
                message.channel.sendMessage("");
                var embed = new Discord.RichEmbed()
                .addField("Test Title1, Test Description1")
                .addField("Test Title2, Test Description2")
                .addField("Test Title3, Test Description3")
                .setFooter("Can't Stop The Dank Train")
                message.channel.sendEmbed(embed);
            break;
        default:
            message.channel.sendMessage("Invalid command");
    }
});

bot.login(TOKEN); 