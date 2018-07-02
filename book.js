module.exports = {
    plugins: ["mathjax"],

    pluginsConfig: {
        fontsettings: {
            theme: "white",
            family: "serif",
            size: 2
        }
    },

    website: {
        html: {
             'head:end': function() { return '<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">' }
        }
    }
};
