
const dbConfig = {
    user: "",
    password: "",
    server: "localhost",
    database: ""
}

export const sqlConnect = async (res, req) => {
    try {
        await sql.connect(dbConfig)
    } catch (error) {
        console.log("Error al intentar conectar", error);
        res.status(500).json({
            message: "Error al intentar connectar"
        });
    }
}