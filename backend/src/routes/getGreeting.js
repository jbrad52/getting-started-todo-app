const GREETINGS = ["Hello world!", "What've We Got To Do Today?", "Oh, and what's one more thing?"
];
module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[ Math.floor( Math.random() * GREETINGS.length )],
    });
};
