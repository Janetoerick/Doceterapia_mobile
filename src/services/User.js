import db from "./SQLiteDatabase";

db.transaction(tx => {
    // tx.executeSql(
    //     "DROP TABLE user;"
    // )

    tx.executeSql(
        "CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, login TEXT, senha TEXT);"
    )
})

const create = (obj) => {
    return Promise( (resolve, reject) => {

        db.transaction( tx => {
            tx.executeSql(
                "INSERT INTO user (login, senha) values (?, ?);", [obj.login, obj.senha],
                (_, {rowsAffected, insertId}) => {
                    if(rowsAffected > 0)
                        resolve(insertId)
                    else
                        reject('Erro ao inserir usuario')
                },
                error => reject(error)
            )
        })
    })
}

export default {
    create
}