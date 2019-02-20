let grid=[];
inputs=document.querySelectorAll('input');
function getRowColumn(event){
    
    if(event.target.name=='gridHeight'){
        grid[0]=Number(event.target.value);
    }
    else {grid[1]=Number(event.target.value)}
}
for (let input of Array.from(inputs)){
    input.addEventListener('change',getRowColumn)
}
