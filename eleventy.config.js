
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");

    // date filter
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return new Date(dateObj).toLocaleDateString('en-gb', {
            weekday: 'short', year: "numeric", month: "short",
            day: "numeric"
        });
    });

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes"
        }
    }
};