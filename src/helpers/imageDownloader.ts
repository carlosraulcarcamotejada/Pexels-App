
import axios from "axios";
import fileDownload from "js-file-download";

const handleDownloadImage = async (url:string='', filename:string=''):Promise<void> => {
    const resp = await axios.get(url, {responseType: 'blob'})
    await fileDownload(resp.data, filename+'.jpg');
}


export default handleDownloadImage;