const readBtn = document.querySelector('.read-btn')
const createBtn = document.querySelector('.create-btn')
const deleteBtn = document.querySelector('.delete-btn')
const inputValue = document.querySelector('.input-value')
const inputKey = document.querySelector('.input-key')
const handlerBth = document.querySelector('.handler-btn')
const iframe = window.frames.two

let value = ''
let key = ''
const postObj = {
    action: '',
    value: '',
    key: '',
    callback: ''
}

function getCallback(func = () => {}) {
    const body = func.toString()
    return body.substring(body.indexOf('{') + 1, body.lastIndexOf('}'))
}

inputValue.addEventListener('input', (e) => {
    value = e.target.value
})
inputKey.addEventListener('input', (e) => {
    key = e.target.value
})

createBtn.addEventListener('click', (e) => {
    e.preventDefault()
    postObj.action = 'create'
    postObj.value = value
    postObj.key = key
    inputValue.value = ''
    inputKey.value = ''
    iframe.postMessage(JSON.stringify(postObj), "*")
})
readBtn.addEventListener('click', () => {
    postObj.action = 'read'
    iframe.postMessage(JSON.stringify(postObj), "*")
})
deleteBtn.addEventListener('click', (e) => {
    e.preventDefault()
    postObj.action = 'delete'
    postObj.value = value
    postObj.key = key
    iframe.postMessage(JSON.stringify(postObj), "*")
    inputValue.value = ''
    inputKey.value = ''
})
handlerBth.addEventListener('click', (callback) => {
    postObj.action = 'handler'
    postObj.callback = getCallback(
        //    сюда передавать необходимую функцию
    )
    iframe.postMessage(JSON.stringify(postObj), "*")
})


