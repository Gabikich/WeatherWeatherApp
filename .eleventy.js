module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("data");
    eleventyConfig.addPassthroughCopy("images");
  
    return {
      dir: {
        input: ".",         
        includes: "_includes", 
        output: "_site"       
      }
    };
  };
  