const baseUrl: string = `http://localhost:8000`;

const apiCall = {
    async get(url: string) {
        try {
            const networkCall = await fetch(`${baseUrl}/${url}`)
            const response = await networkCall.json();
            return response
        } catch (error) {
            return error
        }
    },
    async post(url: string, request: Object) {
        try {
            const networkCall = await fetch(`${baseUrl}/${url}`, {
                method: 'POST',
                body: JSON.stringify(request),
                headers: { 'Content-type': 'application/json;charset=UTF-8' }
            })
            const response = await networkCall.json();
            return response
        } catch (error) {
            return error
        }
    }
};

export default apiCall;
