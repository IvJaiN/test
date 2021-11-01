window.addEventListener('message', (e) => {
    const {action, value, key, callback} = JSON.parse(e.data)
    if (action === 'read') {
        if (localStorage.length === 0) {
            console.log('localStorage пуст')
        } else {
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i)
                console.log(key, ':', localStorage.getItem(key))
            }
        }
    } else if (action === 'create') {
        localStorage.setItem(key, value)
        console.log('written')
    } else if (action === 'delete') {
        if (localStorage.getItem(key)) {
            localStorage.removeItem(key)
            console.log('removed')
        } else {
            console.log('Данных с таким ключом не существует')
        }
    } else if (action === 'handler') {
        if (callback !== null) {
            eval(callback)
        }
    }
})
