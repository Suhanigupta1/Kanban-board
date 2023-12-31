function attachDragListener(taskEl){
    if(!taskEl){
        return;
    }
    taskEl.addEventListener("dragstart" , (e) => {
        taskEl.classList.add('is-dragging');
    });
    //Listen to Drag End Events 
    taskEl.addEventListener('dragend', (e) => {
        taskEl.classList.remove('is-dragging');
    })
}
