//get data
var users = [
    {
        profilepic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        displaypic: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D" ,
        Name: "stupid  girl",
        pendingmessage: 4,
        location:"noida,india ",
        age:23,
        interests: [{
            icon: `<i class="ri-music-2-fill"></i>`,
            interest: "music"
        }, {
            icon: `<i class="ri-paint-fill"></i>`,
            interest: "painting"

        }],
        bio:"lorem ahvcjavcayavia aajvcajvca ",
        isFriend: null
    },
    {
        profilepic: "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8" ,
        displaypic: "https://images.unsplash.com/photo-1476817343404-01ccd61218d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D" ,
        Name: "dumb girl",
        pendingmessage: 14,
        location:"delhi,india ",
        age:32,
        interests:[{
            icon: `<i class="ri-music-2-fill"></i>`,
            interest: "music"
        }, {
            icon: `<i class="ri-paint-fill"></i>`,
            interest: "painting"

        }],
        bio:"lorem ahvcjavckahc kjabciac akcckavcaiy camcacavcay",
        isFriend: null
    },
    {
        profilepic: "https://images.unsplash.com/photo-1701009793405-8170c4c38260?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        displaypic: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D" ,
        Name: "confuse girl",
        pendingmessage: 40,
        location:"mumbai,india ",
        age:21,
        interests:[{
            icon: `<i class="ri-music-2-fill"></i>`,
            interest: "music"
        }, {
            icon: `<i class="ri-paint-fill"></i>`,
            interest: "painting"

        }],
        bio:"lorem vajcviacg9acb iagaiao gcao  aougia cagai au gaicc ga ccag a",
        isFriend: null
    },
    {
        profilepic: "https://images.unsplash.com/photo-1701009795299-5ae8a7fc9a7e?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        displaypic: "https://images.unsplash.com/photo-1701009795703-6ac85b72e22b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8" ,
        Name: "decent girl",
        pendingmessage: 24,
        location:"bagalore,india ",
        age:25,
        interests: [{
            icon: `<i class="ri-music-2-fill"></i>`,
            interest: "music"
        }, {
            icon: `<i class="ri-paint-fill"></i>`,
            interest: "painting"

        }],
        bio:"lorem avcfuay cgaiucg a cuyfa cfaic ac a caica acgcaycg aiug a7c gaigq ",
        isFriend: null
    } 
]

let curr = 0;
let isanimating = false;
function setData(index){
    select(".prflimg img").src = users[index].profilepic;
    select(".badge h5").textContent = users[index].pendingmessage;
    select(".address h3").textContent= users[index].location;
    select(".pdetails .name").textContent = users[index].Name;
    select(".pdetails .age").textContent = users[index].age
    select(".bio p ").textContent = users[index].bio;
    var clutter = "";
    users[index].interests.forEach(function(interest){
        clutter += `<div class="tag flex items-center tracking-tight bg-white/30 px-3 py-1 rounded-full">
        ${interest.icon}
        <h4 class="text-sm capitalize">${interest.interest}</h4>
    </div>`
    })
    select(".tags").innerHTML = clutter
}

function select(elem){
    return document.querySelector(elem)
}
(function setInitial(){
    select(".maincard img").src = users[curr].displaypic;
    select(".incomingcard img").src = users[curr+1]?.displaypic;
    setData(curr);
    
    curr = 2

})()

function imageChange(){
    if(!isanimating){
        isanimating=true;
        let tl = gsap.timeline({
            onComplete:function(){
                isanimating=false;
                let main = select(".maincard");
                let incoming = select(".incomingcard")
    
                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingcard");
    
                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                
                gsap.set(main, {
                    scale: 1,
                    opacity:1
                })
                if (curr=== users.length) curr =0;
                select(".maincard img").src = users[curr].displaypic;
                curr++;
                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingcard");
                
            }
        });
        
        tl.to(".maincard",{
            scale: 1.1,
            opacity: 0,
            ease: Circ,
            duration: .9 
        }, "a")
        .from(".incomingcard",{
            scale: .9,
            opacity: 0,
            ease: Circ,
            duration: 1.1 
        }, "a")
    }
}
    
    
let deny =select(".reject");
    let accept=  select(".accept");

    deny.addEventListener("click", function(){
      imageChange(); 
      setData(curr-1); 
    
      gsap.from(".details .element", {
        y:"100%",
        stagger: .06,
        ease: Power4.easeInOut ,
        duration: 1.5
    }); 
         
    });
    accept.addEventListener("click", function(){
        imageChange(); 
        setData(curr-1); 
      
        gsap.from(".details .element", {
          y:"100%",
          stagger: .06,
          ease: Power4.easeInOut ,
          duration: 1.5
      }); 
            
    });
  



(function containerCreator(){
    document.querySelectorAll(".element").forEach(function(element){
        let div = document.createElement("div");
        div.classList.add(`${element.classList[1]}container`, `overflow-hidden` );
        div.appendChild(element);
        select(".details").appendChild(div);

    })
})()


