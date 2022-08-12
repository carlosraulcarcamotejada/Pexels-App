


const fetcher = async (endPoint:string) => {
    try {
        const api_key = '563492ad6f91700001000001c93e927ffc3a4828a4d4b10153273404';
        const resp = await fetch(endPoint,{headers:{Authorization:api_key}});
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log(error);
    }

}

export default fetcher;

