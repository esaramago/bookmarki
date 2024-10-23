import './style.css'

const getBookmarks = () => {

  return fetch('/data.html')
    .then(response => response.text())
    .then(htmlContent => {
      return htmlContent
    })
    .catch(error => {
      return error
    })
}

const init = async () => {

  const bookmarks = await getBookmarks()

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `sdvrw: ${bookmarks}`
}

init()