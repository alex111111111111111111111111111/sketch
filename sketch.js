let grids =16;

const container=document.querySelector(".container");
const buttons=document.querySelector(".button");


    
const gridsCreated=(grids)=>
    {
        const wrap=document.createElement("wrap");
        wrap.classList.add("wrap");
       
for(i=1;i<=grids;i++)
    {
        
        const grid_columns  =document.createElement("columns");
        grid_columns.classList.add("columngrid");
        
          for(j=1;j<=grids;j++)
            {
                const rows = document.createElement("rows");
                rows.classList.add("rowsgrid");
                rows.addEventListener("mouseenter" ,()=>
                    {
                        rows.style.backgroundColor="red";
                    })
                
                grid_columns.appendChild(rows);
                
            }
            wrap.appendChild(grid_columns);
 container.appendChild(wrap);
        }
    }
    
    gridsCreated(grids);
    buttons.addEventListener("click", ()=>{
        let userdat =prompt("How many grids do you want?");
        const wrap=document.querySelector(".wrap");
       wrap.remove();
       gridsCreated(userdat); 
    }
    
    
    )
   