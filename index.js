const verses = require('./verses.js');

module.exports = () => {
    const rand = Math.floor(Math.random() * 100);
    return "\n "+ verses[rand].script +" \n";
};


