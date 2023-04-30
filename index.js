const verses = require('./verses.js');

//Export module
module.exports = () => {
    const rand = Math.floor(Math.random() * 100);
    return "\n "+ verses[rand].script +" \n";
};


