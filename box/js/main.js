const item = document.querySelectorAll('.item')

window.addEventListener('scroll', () => scrollActive())

let scrollActive = () => {

    let innerHeight = window.innerHeight / 5 * 4

    item.forEach(e => {

        let itemTop = e.getBoundingClientRect().top

        if(itemTop < innerHeight)
            e.classList.add('active')
        else
            e.classList.remove('active')    

    })

}

scrollActive()