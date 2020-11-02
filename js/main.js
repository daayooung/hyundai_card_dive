
window.addEventListener('load', work);

//--- gnb depth,border mouseover,out ---//
function work () {
    gnbWork();
    function gnbWork () {
        const gnbElem = document.querySelector('header ul.gnb');
        const liElems = document.querySelectorAll('header ul.gnb > li');
        const aDepthElems = document.querySelectorAll('header ul.gnb > li > a.depth');
        const border = document.querySelector('header .border');
        let openedMenu = null;

        for(let i = 0; i < liElems.length; i++) {
            liElems[i].addEventListener('mouseover', overWork);
            liElems[i].addEventListener('mouseout', outWork);    
        }
        function overWork (ev) {      
            if (ev.target.tagName !== 'IMG') return;
            const width = this.getBoundingClientRect().width;
            const height = this.parentNode.getBoundingClientRect().height;
            const left = this.getBoundingClientRect().left;
            const top = this.getBoundingClientRect().top;
            
            border.style.width = `${width}px`;
            border.style.height = `${height}px`;
            border.style.left = `${left}px`;
            border.style.top = `${top}px`;
            border.style.borderColor = 'black';
            border.style.transform = 'none';

            const depthmenu = ev.target.parentNode.parentNode.querySelector('.depthmenu')
            
            if(depthmenu) {
                for (let i = 0; i < liElems.length; i++) {
                    liElems[i].classList.add('on')    
                }        
                depthmenu.classList.add('on')
                ev.target.parentNode.parentNode.classList.add('on')
                openedMenu = depthmenu;        
            }
        }
        function outWork (ev) {        
            if (!isParent(ev.relatedTarget)) {
                border.style = 'none'} 
            if (openedMenu === null) return;
            if (!isSon(ev.relatedTarget)) {
                openedMenu.classList.remove('on')
                for (let i = 0; i < aDepthElems.length; i++) {
                    aDepthElems[i].parentNode.classList.remove('on') 
                }       
            }  
                
        }
        function isSon (relatedElem) {
            while (relatedElem.tagName !== 'HTML') {
                if (relatedElem === openedMenu) {
                    return true;
                } relatedElem = relatedElem.parentNode;          
            }return false;
        }
        function isParent (relatedElem) {
            while (relatedElem.tagName !== 'HTML') {
                if (relatedElem === gnbElem) {
                    return true;
                } relatedElem = relatedElem.parentNode;
            } return false;

        }    
    }  

    //--- search click ---//
    const searchBtn = document.querySelector('.search_btn');
    const searchTarget = document.querySelector('.search');
    const closeBtn = searchTarget.querySelector('.search a.close')

    searchBtn.addEventListener('click', clickWork);
    closeBtn.addEventListener('click', closeWork);

    function clickWork () {
        searchTarget.classList.add('on')
    }
    function closeWork (ev) {
        ev.preventDefault();
        searchTarget.classList.remove('on') 
    }

    //--- .calender mouseenter/mouseleave ---//
    const aCalenders = document.querySelectorAll('.whats > .calender > ul > li > a')
    for (let i = 0; i < aCalenders.length; i++) {
       aCalenders[i].addEventListener('mouseenter', enterWork);
       aCalenders[i].addEventListener('mouseleave', leaveWork);
    }
    function enterWork (e) {
        e.target.style.backgroundColor = 'black';
        e.target.children[1].style.color = 'white';
    }
    function leaveWork (e) {
        e.target.style.backgroundColor = 'transparent';
        e.target.children[1].style.color = 'black';
    }

    //--- .spaceulture mouseover/mouseout---//
    const spaCultureLis = document.querySelectorAll('main .spaculture > ul > li');

    for (let i = 0; i < spaCultureLis.length; i++) {
        spaCultureLis[i].parentNode.addEventListener('mouseover', spaCultureOver);
        spaCultureLis[i].addEventListener('mouseout', spaCultureOut);
    }
    function spaCultureOver (e) {    
            
            if(e.target.tagName !== 'SPAN')return; 
            e.target.parentNode.classList.add('on')
            console.log(e.target)         
    }
    function spaCultureOut (e) {
        e.target.parentNode.classList.remove('on')
    }

    //--- move top ---//
    const moveTopBtn = document.querySelector('button.btn_move_top');
    moveTopBtn.addEventListener('click', moveTopWork);
    function moveTopWork () {
        window.scrollTo({top: 0, left:0, behavior:'smooth'});
    }
    window.addEventListener('scroll', scrollWork);
    function scrollWork () {
        if(window.pageYOffset > 1700) {
            moveTopBtn.classList.add('on');
        } else  moveTopBtn.classList.remove('on');
    }
}