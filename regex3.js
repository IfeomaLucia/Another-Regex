var htmlString = `<html><head><title>My Title</title></head><body><h1>Heading</h1><p>This is a paragraph</p></body></html>`

function htmlTest(text){
    var tagsPattern = /<(\w+)>/g;
    var tagsSlash = /<\/(\w+)>/g;
    var tagString = text.replace(tagsPattern, '$1:{');
    var finalTagString = tagString.replace(tagsSlash, '}');
    console.log(finalTagString);
}
htmlTest(htmlString);