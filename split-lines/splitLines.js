
function splitLines(paragraph, preserveNewlinesObj = {preserveNewlines:false} ) {
  let {preserveNewlines} = preserveNewlinesObj;
  
  const paragraphWithSpacesAtNewLine = paragraph.split("\n").join("\n ");
  const wordsWithNewLine = paragraphWithSpacesAtNewLine.split(" ");
  
  if(preserveNewlines === false){
    const pureWords = wordsWithNewLine.map(word=>{
      return word.replace(/[\r]/,"").replace(/[\n]/,"");
    })
    return pureWords;
  }
  return wordsWithNewLine;
}

export {
  splitLines,
};
