export const openDB = (dbName, version = 1) => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, version)

        request.onupgradeneeded = (event) => {
            const db = event.target.result
            if (!db.objectStoreNames.contains('lists')) {
                db.createObjectStore('lists', { keyPath: 'name' })
            }
        }

        request.onsuccess = (event) => {
            resolve(event.target.result)
        }

        request.onerror = (event) => {
            reject(event.target.error)
        }
    })
}

export const addListToDB = async (list) => {
    const db = await openDB('shoppingAppDB')
    const transaction = db.transaction('lists', 'readwrite')
    const store = transaction.objectStore('lists')
    store.put(list)
    return transaction.complete
}

export const getListsFromDB = async () => {
    const db = await openDB('shoppingAppDB')
    return new Promise((resolve, reject) => {
        const transaction = db.transaction('lists', 'readonly')
        const store = transaction.objectStore('lists')
        const request = store.getAll()

        request.onsuccess = (event) => {
            resolve(event.target.result)
        }

        request.onerror = (event) => {
            reject(event.target.error)
        }
    })
}

export const deleteListFromDB = async (listName) => {
    const db = await openDB('shoppingAppDB')
    const transaction = db.transaction('lists', 'readwrite')
    const store = transaction.objectStore('lists')
    store.delete(listName)
    return transaction.complete
}
