const btn = document.getElementById('btn')
const promise = () => Promise.all([
    new Promise(resolve => {
        const getResponse = fetch('https://jsonplaceholder.typicode.com/users')
        getResponse
            .then(result => result.json())
            .then((result) => {
                console.log(result)
                resolve()
            })
    }),
    new Promise(resolve => {
        const getResponse = fetch('https://jsonplaceholder.typicode.com/posts')
        getResponse
            .then(result => result.json())
            .then((result) => {
                console.log(result)
                resolve()
            })
    })
])
btn.addEventListener('click', () => promise()
    .then(() => console.log('Оба ответа получены'))
)
