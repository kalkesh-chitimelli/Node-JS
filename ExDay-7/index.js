import { statSync } from 'fs';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { SingleBar, Presets } from 'cli-progress';
function copyLargeFileWithProgress(srcFile, destFile, bufferSize = 1024 * 1024) {
  const totalSize = statSync(srcFile).size;
  const progressBar = new SingleBar({
    format: '{bar} {percentage}% | ETA: {eta}s | {value}/{total}',
    clearOnComplete: false,
    hideCursor: true,
  }, Presets.shades_classic);
  const readStream = createReadStream(srcFile, { highWaterMark: bufferSize });
  const writeStream = createWriteStream(destFile);
  progressBar.start(totalSize, 0);
  let copiedSize = 0;
  readStream.on('data', (chunk) => {
    copiedSize += chunk.length;
    progressBar.update(copiedSize);
  });
  readStream.on('end', () => {
    progressBar.stop();
    console.log('File copy complete.');
  });
  readStream.pipe(writeStream);
}

const sourceFilePath = '/Users/Kalkeshc/Desktop/Node JS/100MB.bin'; 
const destinationFilePath = '/Users/Kalkeshc/Desktop/Node JS/newfolder/100MB.bin'; 
copyLargeFileWithProgress(sourceFilePath, destinationFilePath);