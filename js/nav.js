let navelements=['home', "products", "about",];

let navpages=['index.html','index.html','index.html' ];

let navtext = "<ul>";
console.log(navtext);
for(i=0; i<navelements.length; i++){
    navtext += '<li><a href="' +  navpages[i]   +    '">' + navelements[i] + "</a></li>";
    console.log(navtext);
}
navtext += "</ul>";
console.log(navtext);

document.getElementById("nav").innerHTML = navtext;