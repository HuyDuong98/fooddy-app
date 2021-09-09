export default function useAuth() {
    const loginAPIs = {
        login: async (data) => {
            return await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(res => res.json())
        }
    }

    return loginAPIs
}