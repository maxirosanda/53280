import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('sessions2.db')

export const init = () =>{
    const promise = new Promise((resolve,reject)=>{
        db.transaction(tx =>{
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS sessionUser (localId TEXT NOT NULL,email TEXT NOT NULL,tokenId TEXT NOT NULL,updateAt INTEGER )',
                [],
                (_,result)=> resolve(result),
                (_,result)=> reject(result)
                )
        })
    })
    return promise
}

export const insertSession = ({localId,email,idToken}) => {
    const promise = new Promise((resolve,reject)=>{
        db.transaction(tx =>{
            tx.executeSql(
                "INSERT INTO sessionUser (localId,email,idToken,updateAt) VALUES (?,?,?,strftime('%s', 'now'))",
                [localId,email,idToken],
                (_,result)=> resolve(result),
                (_,result)=> reject(result)
                )
        })
    })
    return promise
}

export const fetchSession = () => {
    const promise = new Promise((resolve,reject)=>{
        db.transaction(tx =>{
            tx.executeSql(
                'SELECT * FROM sessionUser',
                [],
                (_,result)=> resolve(result),
                (_,result)=> reject(result)
                )
        })
    })
    return promise
}

export const deleteSession = () => {
    const promise = new Promise((resolve,reject)=>{
        db.transaction(tx =>{
            tx.executeSql(
                'DELETE FROM sessionUser',
                [],
                (_,result)=> resolve(result),
                (_,result)=> reject(result)
                )
        })
    })
    return promise
}