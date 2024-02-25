import axios from "axios"
require('dotenv').config({ path: '.evn' })
export default axios.create({
    baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api',
    headers: {
      'X-RapidAPI-Key': '78d4a2f4f6msh6a015dfb10f3defp14ff69jsnc9c64adef827',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    
    
}
)


