window.addEventListener("load", function(){
    let menu_but  = document.querySelector(".menubut")
    let intro = document.querySelector(".main_wrap")
    let links = document.querySelectorAll("ul.navbar > li")
    let nav_links = Array.from(links).slice(0,4)
    let stage = 0;
    let togged = [false,false]
    let stops = [180, 950]
    let lang = links[3]
    let drop = links[4]


    nav_links.forEach(function (x) {
        x.addEventListener('click', function(e){
            e.preventDefault()
            x.classList.add("active")
            nav_links.forEach(function (y) {
                if (y !== x){
                    y.classList.remove("active")
                }
            })
            })
    })

    menu_but.addEventListener('click', function(e){
        e.preventDefault()
        console.log(togged)
        if (!togged[0]){
            stage= stops[0]
            intro.animate([
                {marginTop:'0px',offset:0},
                {marginTop:`${stops[0]}px`,offset:1.0},
            ],{
                duration:200,
                easing:"linear",
                fill:"forwards",
            })
        }else{
            intro.animate([
                {marginTop:`${stage}px`,offset:0},
                {marginTop:`0px`,offset:1.0},
            ],{
                duration:200,
                easing:"linear",
                fill:"forwards",
            })
        }
        togged[0] = (!togged[0])
    })
    lang.addEventListener('click', function(e){
        e.preventDefault()
        if (e.target.parentElement !== lang){
            return
        }
        console.log(togged)
        if (!togged[1]){
            drop.style.display = "initial"
            stage = stops[1]
            intro.animate([
                {marginTop:`${stops[0]}px`,offset:0},
                {marginTop:`${stops[1]}px`,offset:1.0},
            ],{
                duration:0,
                easing:"linear",
                fill:"forwards",
            })
        }else{
            drop.style.display = "none"
            stage = stops[0]
            intro.animate([
                {marginTop:`${stops[1]}px`,offset:0},
                {marginTop:`${stops[0]}px`,offset:1.0},
            ],{
                duration:0,
                easing:"linear",
                fill:"forwards",
            })
        }
        togged[1] = (!togged[1])
    })
})