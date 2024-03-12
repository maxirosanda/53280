import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('sessions.db')

export const init = () =>{
    const promise = new Promise((resolve,reject)=>{
        db.transaction(tx =>{
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS sessionUser (localId TEXT NOT NULL,email TEXT NOT NULL,tokenId TEXT NOT NULL)',
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
                'INSERT INTO sessionUser (localId,email,idToken) VALUES (?,?,?)',
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