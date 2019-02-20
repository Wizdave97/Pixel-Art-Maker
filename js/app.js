let grid=[];
inputs=document.querySelectorAll('input');
let table=document.createElement('table');
let container=document.querySelector('.container');
function makeGrid(){
    return new Promise(resolve=>{
        for(let x=0;x<grid[0];x++){
            let tr=document.createElement('tr');
            for(let y=0;y<grid[1];y++){
                let td=document.createElement('td');
                tr.appendChild(td)
            }
            table.appendChild(tr);
        }
        console.log(table)
        console.log(grid)
        resolve(table)
    
    })
    }

function getRowColumn(event){
    if(event.target.name=='gridHeight'){
        grid[0]=Number(event.target.value);
    }
    else {grid[1]=Number(event.target.value)
    }
    
}
for (let input of Array.from(inputs)){
    input.addEventListener('change',getRowColumn)
}

document.addEventListener('keydown',event=>{
    if(event.key=='Enter'){
        if(container.lastElementChild.nodeName=='TABLE') return
        else{
            makeGrid().then(table=>{
                container.appendChild(table)
            })
        }
          
    }
})

