import axios from "axios";

export class ImagesService{
    static async getImages(){
        return await axios.get('https://www.google.com/');
    }
}