const Discord = require("discord.js");
const client = new Discord.Client({
    restTimeOffset: 0,
    disableEveryone: true,
    partials: ["MESSAGE", "CHANNEL", "REACTION"]
})
const Distube = require("distube");
client.playcmd = true;
client.distube = new Distube(client, {
    searchSongs: true,
    emitNewSongOnly: false,
    highWaterMark: 1024 * 1024 * 64,
    leaveOnEmpty: false,
    leaveOnFinish: false,
    leaveOnStop: true,
    youtubeDL: true,
    updateYoutubeDL: true,
    // youtubeCookie: "", --> Prevents the error code 429
})

const embedsettings = {
    color: "#12ff56",
    wrongcolor: "#e01e01",
    footertext: "...help | Kanki#0001",
    footericon: "https://cdn.discordapp.com/attachments/949253235070365696/949328352127377458/VID_20220304204517_1.gif"
}

require("./distube-handler")(client, Discord, embedsettings)
require("./events")(client, Discord, embedsettings)

const enmap = require("enmap");
client.db = new enmap({name: "mydatabase"})

client.login(require("./config.json").token)
