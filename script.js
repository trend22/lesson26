const strDbFile = 'db.json'
const url = 'https://jsonplaceholder.typicode.com/posts'

const sendData = (dataToDb) => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(dataToDb),
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  })
    .then((response) => response.json())
    .then((dataSend) => console.log(dataSend))
    .catch((error) => console.log(error))
}

const getData = (strFile) => {
  fetch(strFile)
    .then((response) => response.json())
    .then((dataRead) => {
      sendData(dataRead)
      console.log(dataRead)
    })
    .catch((error) => console.log(error))
}

getData(strDbFile)
