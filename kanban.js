const tasks = document.querySelectorAll(".tasks");
const boards = document.querySelectorAll(".boards");
tasks.forEach((task) => attachDragListener(task));
boards.forEach((board) => {
    board.addEventListener('dragover', (e)=>{
        const task = document.querySelector(".is-dragging");
        const closestElement = getTheClosestElement(board, e.clientY);
        // const count =
        if(closestElement){
            board.insertBefore(task, closestElement);
        }else {
        board.appendChild(task);
        };
    })
});

const getTheClosestElement = ((board, yaxis) => {
    let closestElement = null;
    let closestDistance = Number.NEGATIVE_INFINITY;
    const taskInTheBoard = board.querySelectorAll('.tasks:not(.is-dragging)');
    taskInTheBoard.forEach((task)=>{
        const boundry = task.getBoundingClientRect();
        const top = boundry.top;
        const distance = yaxis - top;
        if(distance < 0 && distance > closestDistance){
            closestDistance = distance;
            closestElement = task;
        }
    });
    return closestElement;
});
// function updateBoardTaskCount() {
//     const boards = document.querySelectorAll(".board");
//     boards.forEach((board) => {
//       const countLabel = board.querySelector(".count");
//       const tasks = board.querySelectorAll(".task");
//       countLabel.innerText = tasks.length;
//     });
//   }
// updateBoardTaskCount();

