
/* create variables for the puzzle pieces*/

var rows = 3;
var columns = 3;

//Create varible for the tiles.. one for that title beings moves and the other for the tile it is swapping with (blank tile)

var thisTile;
var thatTile; //blank tile will always be thatTile

//Create variable for the amount if slides needed to take to get to the final image
var slides = 0;

//Create an order for the images within the puzzle with an array
//Do this using an array

// original order.... var imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
//specify an order
var imgOrder=["4","2","8","5","1","6","7","9","3"];


window.onload = function() {
    for (let r=0;r < rows;r++) {
        for(let c=0; c < columns; c++) {
    
            //      <img id="0-0" src="1.jpg"></img>
            /*img tag*/
            let tile = document.createElement("img");
            /*img id for it to give location of tile within puzzle board (0) */
            tile.id= r.toString() + "-" + c.toString();
            /*setimage source.. from front of array linking it to the corresponding photos*/
            tile.src = imgOrder.shift() + ".jpg" ;

            //DRAG FUNCTION
            tile.addEventListener("dragstart", dragStart)  //click image
            tile.addEventListener("dragover", dragOver)   //move image
            tile.addEventListener("dragenter", dragEnter) //image drags onto another
            tile.addEventListener("dragleave", dragLeave) // leaves dragged image
            tile.addEventListener("drop", dragDrop)  //drop dragged image
            tile.addEventListener("dragend",dragEnd);  // two tiles swapped


            document.getElementById("puzzle-board").append(tile);
        }
    }
}
//define functions within the drag function

function dragStart(){
    thisTile= this;  //image being clicked for the drag
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
}

function dragLeave(){
    
}

function dragDrop(){
   thatTile = this;  //refers to image the tile is being dropped on
}

function dragEnd() {
    // only allow switching with this tile/a blank tile
    if(!thatTile.src.includes("1.jpg")) {
           return;
    }
    //add adjacency by defining coordinates
    let theseCoords = thisTile.id.split("-");   // ex if "1-1" -> ["1","1"]
    let r = parseInt(theseCoords[0]);
    let c = parseInt(theseCoords[1]);

    let thoseCoords = thatTile.id.split("-");  //ex if "1-1" -> ["1","1"]
    let r2 = parseInt(thoseCoords[0]);
    let c2= parseInt(thoseCoords[1]);
        
    let moveLeft = r == r2 && c2 == c-1; 
    let moveRight = c2 == c+1 && r == r2;

    let moveUp =  c == c2 && r2 == r-1;
    let moveDown = c == c2 && r2 == r+1;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    //swaps images
    if (isAdjacent) {
    let thisimg = thisTile.src;
    let thatimg= thatTile.src;

    thisTile.src = thatimg
    thatTile.src = thisimg
 
    //increment the slides
    slides +=1
    document.getElementById('slides').innerText = slides;
}
}


 // create functions to start the game 
 