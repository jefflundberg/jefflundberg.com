module.exports = function (eleventyConfig) {
    eleventyConfig.setTemplateFormats(["liquid"])

    // copy these directories as is
    eleventyConfig.addPassthroughCopy({ "src/assets/img": "img" })
    eleventyConfig.addPassthroughCopy({ "src/assets/fonts": "fonts" })
    // eleventyConfig.addPassthroughCopy({ "src/assets/css": "css" })
    eleventyConfig.addPassthroughCopy({ "src/assets/js": "js" })

    return {
        dir: {
            includes: "_includes",
            layouts: "_layouts",
            input: "src",
            output: "docs",
        },
        pathPrefix: "/jefflundberg.com/",
    }
}
