const playground = document.querySelector(".playground > ul");

// setting
const GAME_LOWS = 20;
const GAME_COL = 10;

//variables
let score = 50;
let duration = 500;
let downInterval;
let tempMovingItem; 

const BLOCKS = {
    tree:[
        [[0,0], [0,1], [1,0], [1,1]],
        [[1,2], [5,6], [6,6], [7,7]],
        [],
        []
    ]
};

const movingItem = {
    type: "tree",
    direction: 0,
    top:0,
    left:0,
};
init()

function init() {
    tempMovingItem =  {...movingItem};
    for (let i=0; i<20; i++) {
        prependNewLine();
    }
    renderBlocks()
}

function prependNewLine() {
    const li = document.createElement("li");
    const ul = document.createElement("ul");
    for(let j=0; j<10; j++){
        const matrix = document.createElement("li");
        ul.prepend(matrix);
    }
    li.prepend(ul);
    playground.prepend(li);
}
function renderBlocks() {
    const { type, direction, top, left} = tempMovingItem;
    BLOCKS[type][direction].forEach(block => {
        const x = block[0];
        const y = block[1];
        console.log(tempMovingItem);
    })
}