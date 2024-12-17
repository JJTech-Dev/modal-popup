document.addEventListener('DOMContentLoaded', () =>{
    let modal = document.getElementById("modal")
    let open = document.getElementById("openmodal")
    let close = document.getElementById("closemodal")


    open.addEventListener('click', () => {
        modal.style.display = 'block';
    })

    close.addEventListener('click', () => {
        modal.style.display = 'none';
})
})