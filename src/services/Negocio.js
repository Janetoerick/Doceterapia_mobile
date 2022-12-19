import db from "./SQLiteDatabase";

db.transaction(tx => {
    // tx.executeSql(
    //     "DROP TABLE negocio;"
    // )

    tx.executeSql(
        "CREATE TABLE IF NOT EXISTS negocio (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT," +
        "dark_color1 TEXT, color1 TEXT, light_color1 TEXT, more_light_color1 TEXT," + 
        "dark_color2 TEXT, color2 TEXT, light_color2 TEXT, more_light_color2 TEXT);"
    )
})

const create = (obj) => {
    return new Promise( (resolve, reject) => {

        db.transaction( tx => {
            tx.executeSql(
                "INSERT INTO user (nome, dark_color1, color1, light_color1, more_light_color1," +
                    "dark_color2, color2, light_color2, more_light_color2)" + 
                " values (?, ?, ?, ?, ?, ?, ?, ?, ?);", 
                [obj.nome, obj.dark_color1, obj.color1, obj.light_color1, obj.more_light_color1,
                    obj.dark_color2, obj.color2, obj.light_color2, obj.more_light_color2],
                (_, {rowsAffected, insertId}) => {
                    if(rowsAffected > 0)
                        resolve(insertId)
                    else
                        reject('Erro ao inserir negocio')
                },
                error => reject(error)
            )
        })
    })
}

const all = () => {
    return new Promise( (resolve, reject) => {
        db.transaction(
            tx => {
                tx.executeSql("SELECT * FROM negocio;", [],
                (_, {rows}) => resolve(rows._array),
                error => reject(error)
                )
            }
        )
    })
}

const find = (nome) => {
    return new Promise( (resolve, reject) => {
        db.transaction(
            tx => {
                tx.executeSql("SELECT * FROM negocio WHERE nome=?;", [nome],
                (_, {rows}) => {
                    if(rows.length > 0)
                        resolve(rows._array[0])
                    else
                        reject("Obj not exists: id = " + rows._array[0].id)
                },
                error => reject(error)
                )
            }
        )
    })
}

const empty = () => {
    return new Promise( (resolve, reject) => {
        db.transaction(
            tx => {
                tx.executeSql("SELECT * FROM negocio",
                (_, {rows}) => {

                    if(rows.length > 0){
                        resolve(false)
                    } else{
                        resolve(true)
                    }
                        
                },
                error => reject(true)
                )
            }
        )
    })
}

export default {
    create,
    all,
    find,
    empty
}