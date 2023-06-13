import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue)
    const [loading, setLoading] =  React.useState(true)
    const [error, setError] = React.useState(false)

    React.useEffect(() => {
        setTimeout(() => {
            try {
              //local storage
                const localStorageItem = localStorage.getItem(itemName)
                let parsedItem
            
            
                if(!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = initialValue
                } else {
                    parsedItem = JSON.parse(localStorageItem)
                    setItem(parsedItem)
                }
                
                setLoading(false)

        } catch(err) {
            setLoading(false)
            setError(err)
        }
        }, 2000)
    }, [initialValue, itemName])

    
    //saving todos with local storage
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem)
    }
    return {
        item,
        saveItem,
        loading,
        error
    };
}

export {useLocalStorage}