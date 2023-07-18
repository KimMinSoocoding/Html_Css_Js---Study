let boxes = document.getElementByIdClassName("box");
for(let i=0; i<boxes.length; i++){
    console.log(boxes[i].dataset.type);
    boxes[i].dataset.num = i+1;
}