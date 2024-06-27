let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let msg_container = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGame = document.querySelector("#newGame");
let reset_btn = document.querySelector("#reset-btn");

let trun0 = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log('click');
        if (trun0) {
            box.innerText = "O";
            trun0 = false;
        } else {
            box.innerText = "X";
            trun0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});


const resetGame = () => {
    trun0 = true;
    enabledBoxes();
    msg_container.classList.add("hide");
}

const message = (pos1val) => {
    msg_container.classList.remove("hide");
    msg.innerText = `Congratutlation Winner is ${pos1val}`;
    disabledBoxes();

}

const disabledBoxes = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
}
const enabledBoxes = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Congratutlation! Winner is", pos1val);
                message(pos1val);
                disabledBoxes();
            }
        }
    }
}

newGame.addEventListener("click", resetGame);
reset_btn.addEventListener("click", resetGame);

