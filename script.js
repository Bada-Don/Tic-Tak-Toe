var tile1 = document.getElementById("tile1");
var tile2 = document.getElementById("tile2");
var tile3 = document.getElementById("tile3");
var tile4 = document.getElementById("tile4");
var tile5 = document.getElementById("tile5");
var tile6 = document.getElementById("tile6");
var tile7 = document.getElementById("tile7");
var tile8 = document.getElementById("tile8");
var tile9 = document.getElementById("tile9");
var crossTile = '<img class="box" src="./Cross.webp" alt="">';
var zeroTile = '<img class="box" src="./Zero.webp" alt="">';
var emptyTile = '<img class="box" src="./Empty.webp" alt="">';

var currTurn = document.getElementById('heading2');
// Your existing code for getting elements and defining tiles and images

// Function to handle the click event for a tile
function handleTileClick(tile, tileContent) {
    tile.addEventListener("click", () => {
        // Check if the tile has already been clicked
        if (tile.disabled) {
            return;
        }

        else if (currTurn.textContent === 'Turn: Cross') {
            tile.innerHTML = crossTile;
            currTurn.textContent = 'Turn: Zero';
        } else if (currTurn.textContent === 'Turn: Zero') {
            tile.innerHTML = zeroTile;
            currTurn.textContent = 'Turn: Cross';
        }

        // Disable the tile
        tile.disabled = true;
    });
}

// Assign event listeners for each tile
handleTileClick(tile1, crossTile);
handleTileClick(tile2, crossTile);
handleTileClick(tile3, crossTile);
handleTileClick(tile4, crossTile);
handleTileClick(tile5, crossTile);
handleTileClick(tile6, crossTile);
handleTileClick(tile7, crossTile);
handleTileClick(tile8, crossTile);
handleTileClick(tile9, crossTile);
