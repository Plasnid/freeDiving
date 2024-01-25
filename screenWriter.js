

function createContent(parentTag, childTag, textContent){
    const holderTag = document.querySelector(parentTag);
    let contentTag = document.createElement(childTag);
    contentTag.innerText = textContent;
    holderTag.appendChild(contentTag);
}
createContent("body", "h1", "21 Beavers");
createContent("body", "p", "Water Concert featuring 21 Beavers");

/**
 * !things you dream of
 * *the apocalypse
 * *zombies
 * *flying
 * *falling
 */

createContent("body", "ul","");

let dreamContent = ["the apocalypse", "zombies", "flying", "falling","gourmet meal","Ikea", "Netflix", "Sashimi"];
for(let i=0; i<dreamContent.length;i++){
    createContent("ul","li", dreamContent[i]);
}