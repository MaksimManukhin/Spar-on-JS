const result=document.querySelector("calculating__result span")

let sex, sector,place,spot,ratio=`1.375`

function calcTotal(){
    if(!sex || !sector|| !place || !spot || !ratio){
        result.textContent="..."
        return 
    }
        if(sex="female"){
         result.textContent=Math.floor((447+(9.2*sector)+(3.1*spot)-(5*ratio)))
        }else{

            result.textContent=Math.floor((400+(8*sector)+(3*spot)-(5*ratio)))
        }
    }
    calcTotal()

    function getStatic(parentSelec,activeClass){
        const elements=document.querySelectorAll(`${parentSelec} div`)
        elements.forEach(elem=>{
            elem.addEventListener(`click`,(e)=>{
                if(e.target.getAttribute(`data-ratio`)){
                    ratio=+e.target.getAttribute(`data-ratio`)
                }else{
                    sex=e.target.getAttribute(`id`)
                   }
                   console.log(ratio,sex)

                   elements.forEach(elem=>{
                    elem.classList.remove(activeClass)
                   })
                   e.target.classList.add(activeClass)
                   calcTotal()
            })
        })
        document.querySelector(parentSelec)
    }
    getStatic(`#gender`,`calculating__choose-item_active`)
    getStatic(`.calculating__choose_big`,`calculating__choose-item_active`);


   

