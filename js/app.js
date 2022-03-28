export const pascalToSnake = (entry) => {

    let tmp = "";
    const cara = ["!","?","§","/",",",".",";",":","&","-","_","'"]

    entry = entry.toString();

    for(let i=0; i < entry.length; i++)
    {
        if(entry[i] != NaN && cara.includes(entry[i]))
        {
            tmp += entry[i];
        }
        else if(entry[i] == entry[i].toUpperCase() && i != 0 && isNaN(entry[i]))
        {
            tmp += "_";
            tmp += entry[i].toLowerCase();
        }
        else
        {
            tmp += entry[i].toLowerCase();
        }
    }

    return tmp;
}
