const moment = require("moment-timezone");
require('dotenv').config();

// emoji list
module.exports.emoji = function (client, name) {
    return client.emojis.find("name", name);
};

// channel list alias
module.exports.channel = {
    log : process.env.TEXT_CHANNEL_LOG,
    talk : process.env.TEXT_CHANNEL_TALK,
}

// VC channel list alias
module.exports.vcChannel = {
    talk : process.env.VOICE_CHANNEL_TALK,
    admin : process.env.VOICE_CHANNEL_ADMIN,
}

// parent Id list alias
module.exports.parentId = {
    multi : process.env.PARENT_MULTI,
    movie : process.env.PARENT_MOVIE,
    admin : process.env.PARENT_ADMIN,
};

module.exports.sound = {
    '?カトル1VC' : 'feower_1.wav',
    '?カトル2VC' : 'feower_2.wav',
    '?カトル4VC' : 'feower_4.wav',
};

module.exports.resourceDir = process.env.RESOURCE_DIR;

module.exports.isAdmin = member => {
    return member.voiceChannel && member.voiceChannel.parentID == process.env.PARENT_ADMIN;
};

module.exports.getTime = () => {
    return moment().locale('ja').tz('Asia/Tokyo');
};
