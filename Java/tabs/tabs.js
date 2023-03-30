let tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');

    function hideTabCon(){
        tabsContent.forEach(tab=>{
            tab.classList.add(`hide`)
            tab.classList.remove(`show`,`fade`)
        })
    }0
    tabs.forEach(item=>{
        item.classList.remove(`tabheader__item_active`)

    })

    function showTab(i=0){
        tabsContent[i].classList.add(`show`,`fade`)
        tabsContent[i].classList.remove(`hide`)
        tabsContent[i].classList.add(`tabheader__item_active`)
    }
    hideTabCon()
    showTab()

    tabsParent.addEventListener('click', function(event) {
        const target = event.target;
        if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabCon();
                    showTab(i);
                }

            });
        }
    });
    

    