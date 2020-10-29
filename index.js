/*
params: 
    nonSeparate: A string that will have its values sperated and added into a list.
    character: A character that is used to indicate where the values will be separated. By default it is a comma.
Output:
    A list with all the elements that were separated by the specified character. Does not contain the specified 
    nor spaces at the begin of the value(if character is not space).
*/  
exports.separateByCharacter = (nonSeparate, character=',') => {
    let separate = [], startIndex = 0, i;

    //sets character to default if length is bigger than 1.
    if(character.length > 1) {
        character = ',';
    }

    if (nonSeparate.charAt(startIndex) == character) {
        startIndex++;
    }

    for (i = startIndex; i < nonSeparate.length; i++) {
        if (nonSeparate.charAt(i) == character) {
            if (nonSeparate.charAt(startIndex) == " ") {
                startIndex++;
            }
            separate.push(nonSeparate.substring(startIndex, i));
            startIndex = i + 1;
        }
    }
    if (nonSeparate.charAt(i-1) != character) {
        separate.push(nonSeparate.substring(startIndex, i + 1));
    }
    return separate;
}