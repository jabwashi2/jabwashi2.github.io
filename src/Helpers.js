// this will be the function used to read in json files, simply returns the information
import dataJSON from './content.json'
export function ReadJSONFile(){
    //fetch('/project-content').then((data)=>{console.log(data.text)});

    // const info = JSON.parse(require('./project-content.json'));
    // console.log(info);

    const info = JSON.stringify(dataJSON);
    //console.log(info);

    return info;
}

// this function will create components based on the information in the JSON file