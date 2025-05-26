import {connect, connection} from "mongoose";

const conn = {
    isConnected: false
}

export async function connectDB() {
    if(conn.isConnected) return;
    
    const db = await connect('mongodb+srv://huellitassolidarias26:c4GbTpFKV0QvxQ8k@cluster0.59d5y4d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    //const db = await connect('mongodb://localhost/huellitas');
    console.log(db.connection.db.databaseName);
    conn.isConnected = db.connections[0].readyState;
}

connection.on('connected', () => {
    console.log('Mongoose is connected')
});

connection.on('error', (err) => {
    console.log('Mongoose connection error', err)
});