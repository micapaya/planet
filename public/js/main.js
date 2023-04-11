
// console.log("js at working")
let jsonPlanet = 
fetch("https://api.le-systeme-solaire.net/rest/bodies/")
    .then((response) => response.json())
    .then((data) => {
        const planetTrigger = document.querySelectorAll('aside li');
        console.log(planetTrigger)
        const dataPlanet = data.bodies;
        
        const containerPlanets = document.querySelector('.containerPlanet');
        let name, 
            radius,
            orbit,
            timeRotate
            ;
        dataPlanet.forEach((element,idx) => {
            
            if (element.isPlanet === true && element.isPlanet != undefined || element.bodyType === "Dwarf Planet"){
                name = element.name;
                radius = element.equaRadius;
                orbit = element.perihelion/6098000;
                timeRotate = element.sideralOrbit*850 / 60_189; 

                
                let itemsPlanet = document.createElement('div');
                let itemsTitle = document.createElement('h3');
                
                let divSizePlanet = document.createElement('div');


                divSizePlanet.classList.add('planets');
                itemsPlanet.classList.add('cardPlanet');
                itemsPlanet.style.width = orbit*1 + 'px';
                itemsPlanet.style.height = orbit*1 + 'px';
                // itemsPlanet.style.transformOrigin = '50% 50%';
                // itemsPlanet.style.transformOrigin = (orbit + 50) / 2 - radius / 900 + 'px ' + (orbit + 50) / 2 - radius / 900 + 'px ';
                // itemsPlanet.style.transformOrigin = "center center"
                itemsPlanet.style.transform = 'translateX('+ orbit/-2 + 'px) translateY(' + orbit/-2 + 'px)';
                itemsPlanet.style.animation = 'orbit '+timeRotate+'s linear infinite';
                itemsTitle.style.animation = 'orbit '+timeRotate+'s linear reverse infinite';
                if(name === 'Jupiter'){
                    itemsPlanet.style.borderColor = "transparent";
                    // itemsPlanet.style.transformOrigin = "50% 50%" 
                }
                if(name === 'Saturne'){
                    itemsPlanet.style.borderColor = "white";
                    // itemsPlanet.style.transformOrigin = "50% 50%" 
                }
                if(name === 'La Terre'){
                    itemsPlanet.style.borderColor = "transparent";
                    name = 'Terre'
                    // itemsPlanet.style.transformOrigin = "50% 50%" 
                }
                if(name === 'Uranus'){
                    itemsPlanet.style.borderColor = "transparent";
                    // itemsPlanet.style.transformOrigin = "50% 50%" 
                }
                if(name === 'Mercure'){
                    itemsPlanet.style.borderColor = "transparent";
                    // itemsPlanet.style.transformOrigin = "50% 50%" 
                }
                if(name === 'Mars'){
                    itemsPlanet.style.borderColor = "transparent";
                    // itemsPlanet.style.transformOrigin = "50% 50%" 
                }




                divSizePlanet.style.width = radius/1900 + 'px';
                divSizePlanet.style.height = radius/1900 + 'px';
                // divSizePlanet.style.right = radius/1200  + 'px';
                divSizePlanet.style.borderRadius = "100%";

                itemsTitle.textContent = name;
                itemsTitle.classList.add(name)

                


                containerPlanets.appendChild(itemsPlanet);
                divSizePlanet.appendChild(itemsTitle);
                itemsPlanet.appendChild(divSizePlanet);

                // console.log(element.sideralOrbit)


                planetTrigger.forEach((el,index)=>{
                    // console.log(el.textContent)
                    el.addEventListener('mouseenter',(e)=>{
                        if(planetTrigger[index].textContent === itemsTitle.className){
                            document.querySelector('.'+planetTrigger[index].textContent).style.background ="turquoise";
                        }else {
                            document.querySelector('.' + planetTrigger[index].textContent).style.background = "tranparent";

                        }

                    })
                    el.addEventListener('mouseout',(e)=>{
                        itemsTitle.style.background = "transparent"

                    })
                })
                //   current sideral / 60189
                //   x / 20s
                // current 
                

            }
            
            

           
            
            
        });
    });


