
const url = new URL('http://anywhere-dom/filter?size=M&color=1&color=2&manufacturer=aaa&manufacturer=ddd')
const filter = new URLSearchParams(url.search)
const form = document.querySelector('form')
const colors = document.querySelectorAll('[name = color]')
const sizes = document.querySelectorAll('[name = size]')
const manufacturer = document.querySelector('[name = manufacturer]')
const options = document.querySelectorAll('[data-option=option]')
const sale = document.querySelector('[data-name=sale]')

for(const [key, value] of filter) {
    if (sizes[0].name === key) {
        sizes.forEach(size => {
            if (size.value === value) {
                size.checked = true
            }
        })
    }
    if (colors[0].name === key) {
        colors.forEach(color => {
            if (color.value === value) {
                color.checked = true
            }
        })
    }
    if (manufacturer.name === key) {
        options.forEach(option => {
            if (option.value === value) {
                option.selected = true
            }
        })
    }
}

sale.checked = true


form.addEventListener('input', (e) => {

    let result = `${url.origin}${url.pathname}?`

    if (e.target.value !== 'sale') {
        sizes.forEach(item => {
            if (item.checked) result += `size=${item.value}`
        })
        colors.forEach(item => {
            if (item.checked) result += `color=${item.value}`
        })
        options.forEach(item => {
            if (item.selected) result += `manufacturer=${item.value}`
        })
        console.log(result)
    }
})
