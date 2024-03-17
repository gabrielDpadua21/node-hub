const fs = require('fs');
const { google } = require('googleapis');

const downloadFile = async (client, id) => {
    const drive = google.drive({ version: 'v3', auth: client });
    const dest = fs.createWriteStream('./temp/video3.mp4');
    const res = await drive.files.get(
        { fileId: id, alt: 'media' },
        { responseType: 'stream' }
    );
    res.data
        .on('end', () => console.log('Done'))
        .on('error', err => console.log('Error', err))
        .pipe(dest);
};

const main = async () => {
    const client = new google.auth.OAuth2({
        clientId: '1',
        clientSecret: ''
    })

    client.setCredentials({
        access_token: ''
    });

    await downloadFile(client, '')
}

main();