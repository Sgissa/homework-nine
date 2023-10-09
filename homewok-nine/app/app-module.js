import {visual} from "./model-module.js";


function initListeners(){
    $("nav a").click(function (e){
        // this stores the id from the anchor tag
        let aID = e.currentTarget.id;
        let contentID = aID + "Content";
        
        visual(contentID)
        console.log(fn)   
    });
}

$(Document).ready(function(){
    initListeners();
    visual("homeContent");
});