

 //Dynamic Build Menu based on existing sections
 function BuildMenu() {
    
    let pageSetions=document.querySelectorAll(".section");
    
    pageSetions.forEach(section=>{
    addNewMenuItem(section.id);
    })

   }
//Add section fucntion that invoked with the Add button 
   function addSection()
   {
    let newSectionId=document.querySelectorAll(".section").length+1;
    if(newSectionId<10)
    {
        let sectionTemplate=document.querySelector(".section");
    
        let mainDiv=document.querySelector('#main');
        let newSection=document.createElement("div");
        newSection.id=`section${newSectionId}`;
        newSection.classList.add("section");
        newSection.innerHTML=sectionTemplate.innerHTML;
        mainDiv.insertAdjacentElement("beforeend",newSection);
        addNewMenuItem(newSection.id);
        
    }
    
      
   }

 
   function addNewMenuItem(name)
   {
    let menuPalceholder= document.querySelector('#menu');
    let liElement =document.createElement('li');
    let linkElement =document.createElement('a');
    linkElement.textContent=name.replace(/^\w/, (firstLetter) => firstLetter.toUpperCase()); 
    linkElement.href=`#${name}`;
    liElement.appendChild(linkElement);
    menuPalceholder.appendChild(liElement);
    linkElement.addEventListener('click',event => {
        event.preventDefault();
        scrollToSection(linkElement.hash);
    });
   }

   
  
   // Listener function for the Link click event , passing the ID and then get the element
   function scrollToSection(sectionId)
   {
       console.log(sectionId);
       document.querySelector(sectionId).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
   }

   function setMobileViewHamburger() {
    var menuContainer = document.getElementById("menu");
    if (menuContainer.style.display === "block") {
        menuContainer.style.display = "none";
    } else {
        menuContainer.style.display = "block";
    }
  }

   BuildMenu();


/* Handle On scroll event to activate selected Menu Item based on visible section*/ 
window.addEventListener('scroll', event => {
    
    let MenuItems = document.querySelectorAll('.nav ul li a');
    let fromTop = window.scrollY;

    MenuItems.forEach(Item => {
        let section = document.querySelector(Item.hash);
        
        if (
            section.offsetTop <= fromTop && 
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            Item.classList.add('active');
        } else {
            Item.classList.remove('active');
        }
    });
});

