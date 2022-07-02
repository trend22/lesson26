const strDbFile = 'db.json'
const url = 'https://jsonplaceholder.typicode.com/posts'

const sendData = (dataToDb) => {
  fetch(url, {
      method: 'POST',
      body: JSON.stringify(dataToDb),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
    })
    .then((response) => response.json())
    .then((dataSend) => console.log(dataSend))
    .catch((error) => console.log(error))
}

const sendDataXML = (dataToDb) => {
  let xhr = new XMLHttpRequest()

  xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', [true])
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

  xhr.send(JSON.stringify(dataToDb))

  xhr.onload = function () {
    console.log(`XHR сработал: ${xhr.response}`)
  }

  xhr.onerror = function () { // происходит, только когда запрос совсем не получилось выполнить
    console.log(`Ошибка соединения`);
  };
}

const getData = (strFile) => {
  fetch(strFile)
    .then((response) => response.json())
    .then((dataRead) => {

      console.log(dataRead)

      sendData(dataRead)
      sendDataXML(dataRead)
    })
    .catch((error) => console.log(error))
}

getData(strDbFile)