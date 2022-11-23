let navItems = document.querySelector(".hdr-anchor-tags")
let hamburger = document.querySelector(".hamburger")
let close = document.querySelector(".close")

hamburger.addEventListener("click",()=>{
    navItems.style.display="flex"
    close.style.display = "flex"
    hamburger.style.display = "none"
})

close.addEventListener("click",()=>{
    navItems.style.display = "none"
    hamburger.style.display="flex"
    close.style.display="none"

})