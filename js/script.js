let url = document.querySelectorAll('#url')
let user = document.querySelectorAll('#user')


let scrol = (url,top)=>{
    let h0 =  top.offsetTop
    function  scrol (event){
        event.preventDefault()
        window.scrollTo({
            top:h0,
            left:0,
            behavior:'smooth',
        })
    }
    url.addEventListener('click',scrol)
}
scrol(url[0],user[0])
scrol(url[1],user[1])
scrol(url[2],user[2])
scrol(url[3],user[3])

