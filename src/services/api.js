import axios from "axios";

// https://viacep.com.br/ws/13474630/json
const api = axios.create({ //  criando uma instância do axios com a baseURL do viacep
    baseURL: "https://viacep.com.br/ws/", // baseURL é a URL base da API
});

export default api; // exportando a instância do axios, default é o nome padrão da exportação, ou seja, quando importarmos esse arquivo, não precisamos usar chaves, pois só tem uma exportação