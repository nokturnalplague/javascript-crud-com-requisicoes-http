const URL_BASE = 'http://localhost:3000'

const api = {

    //GET
    async buscarPensamentos() {
        try {
            const response = await axios.get(`${URL_BASE}/pensamentos`)
            return await response.data
        }
        catch (error) { 
            alert('Erro ao buscar pensamentos')
            //throw error
            console.log('Erro ao buscar pensamentos:', error)
        }
    },

    //POST
    async salvarPensamento(pensamento) {
        try {
            const response = await axios.post(`${URL_BASE}/pensamentos`, pensamento)
            return await response.data
        }
        catch (error) {
            alert('Erro ao salvar pensamentos')
            console.log('Erro ao salvar pensamentos:', error)
        }
    },

    //GET (id)
    async buscarPensamentoPorId(id) {
        try {
            const response = await axios.get(`${URL_BASE}/pensamentos/${id}`)
            return await response.data
        }
        catch (error) {
            alert('Erro ao buscar pensamento')
            //throw error
            console.log('Erro ao buscar pensamento:', error)
        }
    },

    //PUT
    async editarPensamento(pensamento) {
        try {
            const response = await axios.put(`${URL_BASE}/pensamentos/${pensamento.id}`, pensamento)
            return await response.data
        }
        catch (error) {
            alert('Erro ao editar pensamentos')
            console.log('Erro ao editar pensamentos:', error)
        }
    },

    //DELETE
    async excluirPensamento(id) {
        try {
            const response = await axios.delete(`${URL_BASE}/pensamentos/${id}`)
        }
        catch (error) {
            alert('Erro ao excluir pensamentos')
            console.log('Erro ao excluir pensamentos:', error)
        }
    }
}

export default api