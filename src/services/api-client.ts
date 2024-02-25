import axios from "axios";

export default axios.create({
    baseURL: 'https://rawg-video-games-database.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': '78d4a2f4f6msh6a015dfb10f3defp14ff69jsnc9c64adef827',
        'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
      }
    
}
)