
let panels = document.querySelectorAll('.panels');

panels.forEach(function (panel) {
    panel.addEventListener('click', () => {
        removeActiveClass()
        panel.classList.add('active');
    })
})

function removeActiveClass() {
    panels.forEach(function (value) {
        value.classList.remove('active');
    })
}