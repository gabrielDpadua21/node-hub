const fs = require('fs');
const { google } = require('googleapis');

const downloadFile = async (auth, id) => {
    const drive = google.drive({ version: 'v3', auth });
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
    const auth = new google.auth.GoogleAuth({
        keyFile: 'credentials.json',
        scopes: 'https://www.googleapis.com/auth/drive',
    });

    await downloadFile(auth, '')
}

main();