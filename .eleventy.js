module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("data");
    eleventyConfig.addPassthroughCopy("images");
  
    return {
      dir: {
        input: ".",          // raiz do projeto
        includes: "_includes", // onde estão os arquivos como footer.njk
        output: "_site"        // pasta de saída
      }
    };
  };
  