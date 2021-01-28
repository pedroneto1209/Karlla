const { Stream } = require("stream");

module.exports = {
    name: 'escuta',
    aliases: ['e'],
    category: 'Music',
    utilisation: '{prefix}escuta',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);
        
        //const fs = require('fs');
        //const { OpusStreamDecoder } = require('opus-stream-decoder');
        //const decoder = new OpusStreamDecoder({ onDecode });

        message.member.voice.channel.join().then(connection => connection.receiver.createStream(message.member, {mode: "opus", end: "manual"})).then(st => st.on('data', function(chunk){
            console.log(chunk);
            //try {
            //    decoder.decode(data);
            //} catch (err) {
            //    decoder.free();
            //    showError(err);
            //    inFileStram.destroy(err);
            //}
            }));
            //.on('end', async _ => {
            //await decoder.ready;
            //decoder.free();
            //if (!totalSamplesDecoded) {
            //    console.error('File could not be decoded.')
            //} else {
            //    const leftFile = pcmOutLeftFile.replace(currentFolder,'');
            //    const rightFile = pcmOutRightFile.replace(currentFolder,'');
            //    console.log('DECODED:', totalSamplesDecoded, 'samples.');
            //    console.log('  FILES:', leftFile, rightFile);
            //    console.log('Use a command-line utility to listen. For example:\n');
            //    console.log('    $ ffplay -f f32le -ar 48k -ac 1', leftFile);
            //}
            //}).on('error', err => {
            //decoder.free();
            //showError(err)
            //}));

        //function onDecode(decodedPcm) {
        //    totalSamplesDecoded+= decodedPcm.samplesDecoded;
        //    outLeftFileStream.write(Buffer.from(decodedPcm.left.buffer));
        //    outRightFileStream.write(Buffer.from(decodedPcm.right.buffer));
        //}

        message.channel.send(`${client.emotes.success} - Escutando!`);
    },
};