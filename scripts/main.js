fetch('https://randomfox.ca/floof/')
    .then(response => response.json())
    .then(
        (convertedData) => {
            debugger
            const foxElement = document.querySelector("#fox")
            foxElement.src = convertedData.image
        }
    )

const getCatImage = async () => {
    const response = await fetch('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false')
    const convertedData = await response.json()

    const catElement = document.querySelector("#cat")
    catElement.src = convertedData[0]
}

getCatImage()