let apiUrl = 'https://api.github.com/'

if (process.env.NODE_ENV === 'production') {
  apiUrl = 'https://api.github.com/'
}

let awesome = 'Hello'

export {
  apiUrl,
  awesome
}

export const config = ()=> {
  return "My config"
}