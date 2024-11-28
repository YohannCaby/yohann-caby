import { Client } from 'basic-ftp'

deploy().then(() => console.log("Deployed")).catch(e => console.log(e))

async function deploy() {
    const client = new Client()
    try {
        await client.access({
            host: process.env.FTP_HOST,
            user:  process.env.FTP_USER,
            password: process.env.FTP_PWD,
            secure: false
        })
        await client.uploadFromDir('dist/', '/')
    } catch (e) {
        console.log(e)
    } finally {
        client.close()
    }
}