let result = document.getElementsByClassName('result');
result[0].classList.add("hide");
result[1].classList.add("hide");

let currTurn = document.getElementById("heading2");
let xturn;
let tile1 = document.getElementById('tile1');
let tile2 = document.getElementById('tile2');
let tile3 = document.getElementById('tile3');
let tile4 = document.getElementById('tile4');
let tile5 = document.getElementById('tile5');
let tile6 = document.getElementById('tile6');
let tile7 = document.getElementById('tile7');
let tile8 = document.getElementById('tile8');
let tile9 = document.getElementById('tile9');

let ZeroTile = `<img class="box" src="./Zero.webp" alt="">`
let CrossTile = `<img class="box" src="./Cross.webp" alt="">`
let EmptyTile = `<img class="box" src="./Empty.webp" alt="">`

if (currTurn.innerText === 'Turn: Cross') {
    xturn = true;
}
else if (currTurn.innerText === 'Turn: Zero') {
    xturn = false;
}
{

    tile1.addEventListener("click", function () {
        if (xturn) {
            tile1.innerHTML = CrossTile;
            tile1.disabled = true;
            xturn = false;
            currTurn.innerText = `Turn: Zero`;
        }
        else {
            tile1.innerHTML = ZeroTile;
            tile1.disabled = true;
            xturn = true;
            currTurn.innerText = `Turn: Cross`;
        } checkWinCondition();
    });
    tile2.addEventListener("click", function () {
        if (xturn) {
            tile2.innerHTML = CrossTile;
            tile2.disabled = true;
            xturn = false;
            currTurn.innerText = `Turn: Zero`;
        }
        else {
            tile2.innerHTML = ZeroTile;
            tile2.disabled = true;
            xturn = true;
            currTurn.innerText = `Turn: Cross`;
        } checkWinCondition();
    });
    tile4.addEventListener("click", function () {
        if (xturn) {
            tile4.innerHTML = CrossTile;
            tile4.disabled = true;
            xturn = false;
            currTurn.innerText = `Turn: Zero`;
        }
        else {
            tile4.innerHTML = ZeroTile;
            tile4.disabled = true;
            xturn = true;
            currTurn.innerText = `Turn: Cross`;
        } checkWinCondition();
    });
    tile5.addEventListener("click", function () {
        if (xturn) {
            tile5.innerHTML = CrossTile;
            tile5.disabled = true;
            xturn = false;
            currTurn.innerText = `Turn: Zero`;
        }
        else {
            tile5.innerHTML = ZeroTile;
            tile5.disabled = true;
            xturn = true;
            currTurn.innerText = `Turn: Cross`;
        } checkWinCondition();
    });
    tile3.addEventListener("click", function () {
        if (xturn) {
            tile3.innerHTML = CrossTile;
            tile3.disabled = true;
            xturn = false;
            currTurn.innerText = `Turn: Zero`;
        }
        else {
            tile3.innerHTML = ZeroTile;
            tile3.disabled = true;
            xturn = true;
            currTurn.innerText = `Turn: Cross`;
        } checkWinCondition();
    });
    tile6.addEventListener("click", function () {
        if (xturn) {
            tile6.innerHTML = CrossTile;
            tile6.disabled = true;
            xturn = false;
            currTurn.innerText = `Turn: Zero`;
        }
        else {
            tile6.innerHTML = ZeroTile;
            tile6.disabled = true;
            xturn = true;
            currTurn.innerText = `Turn: Cross`;
        } checkWinCondition();
    });
    tile7.addEventListener("click", function () {
        if (xturn) {
            tile7.innerHTML = CrossTile;
            tile7.disabled = true;
            xturn = false;
            currTurn.innerText = `Turn: Zero`;
        }
        else {
            tile7.innerHTML = ZeroTile;
            tile7.disabled = true;
            xturn = true;
            currTurn.innerText = `Turn: Cross`;
        } checkWinCondition();
    });
    tile8.addEventListener("click", function () {
        if (xturn) {
            tile8.innerHTML = CrossTile;
            tile8.disabled = true;
            xturn = false;
            currTurn.innerText = `Turn: Zero`;
        }
        else {
            tile8.innerHTML = ZeroTile;
            tile8.disabled = true;
            xturn = true;
            currTurn.innerText = `Turn: Cross`;
        } checkWinCondition();
    });
    tile9.addEventListener("click", function () {
        if (xturn) {
            tile9.innerHTML = CrossTile;
            tile9.disabled = true;
            xturn = false;
            currTurn.innerText = `Turn: Zero`;
        }
        else {
            tile9.innerHTML = ZeroTile;
            tile9.disabled = true;
            xturn = true;
            currTurn.innerText = `Turn: Cross`;
        } checkWinCondition();
    });
}
function disableBtn() {
    // Create an array of tile elements
    const tiles = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9];

    // Iterate through the tiles and disable them
    for (const tile of tiles) {
        tile.disabled = true;
    }
}
function enableBtn() {
    // Create an array of tile elements
    const tiles = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9];

    // Iterate through the tiles and disable them
    for (const tile of tiles) {
        tile.disabled = false;
    }
}
function resetBtn() {
    const tiles = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9];
    // Iterate through the tiles and disable them
    for (const tile of tiles) {
        tile.innerHTML = EmptyTile;
    }
    enableBtn();

    result[0].classList.add("hide");
    result[1].classList.add("hide");
}
let resetBTN = document.getElementById('resetBtn');
resetBTN.addEventListener('click', resetBtn);
// Function to check for a win condition
function checkWinCondition() {
    // Check rows
    if (
        (tile1.innerHTML != EmptyTile && tile1.innerHTML == tile2.innerHTML && tile2.innerHTML == tile3.innerHTML) ||
        (tile4.innerHTML != EmptyTile && tile4.innerHTML == tile5.innerHTML && tile5.innerHTML == tile6.innerHTML) ||
        (tile7.innerHTML != EmptyTile && tile7.innerHTML == tile8.innerHTML && tile8.innerHTML == tile9.innerHTML)
    ) {
        result[0].classList.remove("hide");
        result[1].classList.remove("hide");
        let winner = xturn ? "Zero" : "Cross";
        result[0].innerHTML = `<h1>Winner is: ${winner}</h1>`;
        disableBtn();
    }
    // Check columns
    else if (
        (tile1.innerHTML != EmptyTile && tile1.innerHTML == tile4.innerHTML && tile4.innerHTML == tile7.innerHTML) ||
        (tile2.innerHTML != EmptyTile && tile2.innerHTML == tile5.innerHTML && tile5.innerHTML == tile8.innerHTML) ||
        (tile3.innerHTML != EmptyTile && tile3.innerHTML == tile6.innerHTML && tile6.innerHTML == tile9.innerHTML)
    ) {
        result[0].classList.remove("hide");
        result[1].classList.remove("hide");
        let winner = xturn ? "Zero" : "Cross";
        result[0].innerHTML = `<h1>Winner is: ${winner}</h1>`;
        disableBtn();
    }
    // Check diagonals
    else if (
        (tile1.innerHTML != EmptyTile && tile1.innerHTML == tile5.innerHTML && tile5.innerHTML == tile9.innerHTML) ||
        (tile3.innerHTML != EmptyTile && tile3.innerHTML == tile5.innerHTML && tile5.innerHTML == tile7.innerHTML)
    ) {
        result[0].classList.remove("hide");
        result[1].classList.remove("hide");
        let winner = xturn ? "Zero" : "Cross";
        result[0].innerHTML = `<h1>Winner is: ${winner}</h1>`;
        disableBtn();
    }
}
