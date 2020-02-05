//Especificación oficial: https://developer.mozilla.org/es/docs/IndexedDB-840092-dup

/*
    Contenido extra para buscar:
        Método getAll() para obtener todos los registros de la base de datos
        Método clear() para borrar objetos del almacen
        Método deleteDatabase() para borrar la base de datos
        Metodo onBlocked() para bloquear bases de datos en los cambios de version
        Objeto IDBKeyRange para búsquedas en la base de datos
        Método createIndex() para la creación de índices en la base de datos
        Versionado de bases de datos
        Libreria indexedDB
            https://dexie.org/
*/
const indexedDB = window.indexedDB
const form = document.getElementById('form')
const Libros = document.getElementById('Libros')

if (indexedDB && form) {
    let db
    const request = indexedDB.open('Libreria', 1)

    request.onsuccess = () => {
        db = request.result
        console.log('OPEN', db)
        readData()
    }

    request.onupgradeneeded = (e) => {
        db = e.target.result
        console.log('Create', db)
        const objectStore = db.createObjectStore('Libros', {
            keyPath: 'libroISBN'
        })
    }

    request.onerror = (error) => {
        console.log('Error', error)
    }

    const addData = (data) => {
        const transaction = db.transaction(['Libros'], 'readwrite')
        const objectStore = transaction.objectStore('Libros')
        const request = objectStore.add(data)
        readData()
    }

    const getData = (key) => {
        const transaction = db.transaction(['Libros'], 'readwrite')
        const objectStore = transaction.objectStore('Libros')
        const request = objectStore.get(key)

        request.onsuccess = (e) => {
            form.task.value = request.result.libroISBN
            form.titulo.value = request.result.libroTitulo
            form.autor.value = request.result.libroAutor
            form.paginas.value = request.result.libroPaginas
            form.button.dataset.action = 'editar'
            form.button.textContent = 'editar Libro'
        }
    }

    const editarData = (data) => {
        const transaction = db.transaction(['Libros'], 'readwrite')
        const objectStore = transaction.objectStore('Libros')
        const request = objectStore.put(data)
        request.onsuccess = () => {
            form.button.dataset.action = 'add'
            form.button.textContent = 'añadir Libro'
            readData()
        }
    }

    const deleteData = (key) => {
        const transaction = db.transaction(['Libros'], 'readwrite')
        const objectStore = transaction.objectStore('Libros')
        const request = objectStore.delete(key)
        request.onsuccess = () => {
            readData()
        }
    }

    const readData = () => {
        const transaction = db.transaction(['Libros'], 'readonly')
        const objectStore = transaction.objectStore('Libros')
        const request = objectStore.openCursor()
        const fragment = document.createDocumentFragment()

        request.onsuccess = (e) => {
            const cursor = e.target.result
            if (cursor) {

                const libroISBN = document.createElement('P')
                libroISBN.textContent = cursor.value.libroISBN
                fragment.appendChild(libroISBN)

                const libroTitulo = document.createElement('P')
                libroTitulo.textContent = cursor.value.libroTitulo
                fragment.appendChild(libroTitulo)

                const libroAutor = document.createElement('P')
                libroAutor.textContent = cursor.value.libroAutor
                fragment.appendChild(libroAutor)

                const libroPaginas = document.createElement('P')
                libroPaginas.textContent = cursor.value.libroPaginas
                fragment.appendChild(libroPaginas)

                const taskeditar = document.createElement('BUTTON')
                taskeditar.dataset.type = 'editar'
                taskeditar.dataset.key = cursor.key
                taskeditar.textContent = 'editar'
                fragment.appendChild(taskeditar)

                const taskDelete = document.createElement('BUTTON')
                taskDelete.textContent = 'borrar'
                taskDelete.dataset.type = 'delete'
                taskDelete.dataset.key = cursor.key
                fragment.appendChild(taskDelete)

                cursor.continue()
            } else {
                Libros.textContent = ''
                Libros.appendChild(fragment)
            }
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const data = {
            libroISBN: e.target.task.value,
            libroTitulo: e.target.titulo.value,
            libroAutor: e.target.autor.value,
            libroPaginas: e.target.paginas.value
        }


        if (e.target.button.dataset.action == 'add') {
            addData(data)
        } else if (e.target.button.dataset.action == 'editar') {
            editarData(data)
        }

        form.reset()
    })

    Libros.addEventListener('click', (e) => {
        if (e.target.dataset.type == 'editar') {
            getData(e.target.dataset.key)
        } else if (e.target.dataset.type == 'delete') {
            deleteData(e.target.dataset.key)
        }
    })
}