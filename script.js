function getCurrentDateTime() {
    let time = document.getElementById('Time');
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    time.innerHTML = hour + ':', + minutes;
}


// Seleciona o elemento com o id "radio2"
let radio2 = document.getElementById("radio2")
cont = 1
// Adiciona evento de click ao radio2
// Quando o radio2 for clicado, o estilo da classe "active" ser  adicionado ou removido do elemento com o id "app"
/**
 * Adds an event listener to the radio2 element that toggles the active class
 * on the widgets element and the act class on the area2 element when clicked
 * @param {Event} e - The event object
 */
radio2.addEventListener('click', (e) => {
    // Toggle the active class on the widgets element
    const widgets = document.getElementById('widgets')
    widgets.classList.toggle('active')
    // Toggle the act class on the area2 element
    const area2 = document.getElementById('area2')
    area2.classList.toggle('act')
    // Toggle the checked property of the radio2 element
    radio2.checked = !radio2.checked
    // Toggle the back class on the widgets element
    widgets.classList.toggle('back')
    // Toggle the turn class on the area2 element
    area2.classList.toggle('turn')
    // Increment the cont variable
    cont++
    // If the cont variable is greater than 2, set it to 1
    if (cont > 2) {
        cont = 1
    }
    // If the cont variable is equal to 1, toggle the classes on the widgets
    // and area2 elements
    if (cont === 1) {
        widgets.classList.remove('active')
        area2.classList.remove('act')
    } else {
        widgets.classList.remove('back')
        area2.classList.remove('turn')
    }
})

let btnPlay = document.getElementById('play-btn')
let btnPause = document.getElementById('pause-btn')

btnPlay.addEventListener('click', () => {
    btnPause.style.display = 'block'
    btnPlay.style.display = 'none'
    btnPause.classList.toggle('pause')
    btnPlay.classList.remove('play')

})
btnPause.addEventListener('click', () => {
    btnPlay.style.display = 'block'
    btnPause.style.display = 'none'
    btnPlay.classList.toggle('play')
    btnPause.classList.remove('pause')


})