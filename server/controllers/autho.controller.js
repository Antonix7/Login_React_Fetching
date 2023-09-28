import { dbConfig } from "../database/db_config";

// function for filter user for userName...
export const sqlConnect = async (res, req) => {
    const {userName} = req.body;
    try {
        await sql.connect(dbConfig);

        // consult...
        const result = await sql.query(`SELECT * FROM usuarios WHERE userName = ${userName}`);

        if(result.recordset.length > 0) {
            res.status(200).json(result.recordset);
        } else {
            res.status(404).json({
                message: "Usuario no encontrado"
            })
        }

    } catch (error) {
        console.error("Error al intentar conectar", error);
        res.status(500).json({
            message: "Error al intentar connectar"
        });
    } finally {
        // close connection...
        sql.close();
    }
}