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
        
        resolve(table)
    
    })
    }

function getRowColumn(event){
    if(event.target.name=='gridHeight'){
        grid[0]=Number(event.target.value);
    }
    else {grid[1]=Number(event.target.value)
    }
    event.stopPropagation()
}
for (let input of Array.from(inputs)){
    input.addEventListener('input',getRowColumn)
}
let pixels=null;
let submit=document.querySelector('#submit');

submit.addEventListener('click',event=>{
    
        if(container.lastElementChild.nodeName=='TABLE' && 
        container.lastElementChild.childElementCount>0) return
        else{
            makeGrid().then(table=>{
                container.appendChild(table);
                pixels=document.querySelectorAll('td')
                for(let pixel of Array.from(pixels)){
                        pixel.addEventListener('mousedown',event=>{
                            if(event.button==0)event.target.style.backgroundColor=colour;
                            
                        })
                    
                }      
            })
        }
          
    event.preventDefault();
  
})
const colourPicker=document.querySelector('.colour');
let colour=colourPicker.value;
colourPicker.addEventListener('change',event=>{
    colour=event.target.value;
    console.log(colour)
    event.stopPropagation();
})


