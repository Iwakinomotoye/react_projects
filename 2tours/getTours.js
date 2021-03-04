export default function getTours(url) {
    return new Promise((resolve, reject) => {
        fetch(url,
        {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            reject(error);
        })
    })
}