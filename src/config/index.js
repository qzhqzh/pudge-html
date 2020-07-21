// export default {
//     // baseUrl: 'http://106.53.58.248/api/api'
//     baseUrl: 'http://106.53.58.248:8000/api'
// }

export default {
    baseUrl:
        process.env.NODE_ENV === "production"
            ? "http://106.53.58.248/api/api"
            : "http://106.53.58.248:8000/api"
};
