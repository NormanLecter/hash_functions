const crypto = require('crypto');
const fs = require('fs');
const stopwatch = require('node-stopwatch').Stopwatch;
const dateFormat = require('dateformat');
const secretKey = 'MySecretKey2017';

let df;
let sw = stopwatch.create();
let textToEncrypt50mb = fs.readFileSync('50mb.txt','utf8');
let textToEncrypt100mb = fs.readFileSync('100mb.txt','utf8');
let textToEncrypt200mb = fs.readFileSync('200mb.txt','utf8');

//text file made by : fsutil file createnew [name].txt [howManyMb]*1024*1024

console.log('\nFile with test results is writing...\n\n');

fs.writeFileSync('tests.txt', 'Below you can see tests for md5, sha256 and sha512 hash function: \n\n')

for(let i = 1; i<=5; i++){

  df = dateFormat(new Date(), "dd-mm-yyyy h:MM:ss", true);
  fs.appendFileSync('tests.txt', '\n' + i + ' test, time : ' + df + '\n\n');

  /************************************** 50 MB **************************************************/

  sw.reset();
  sw.start();
  const hash1 = crypto.createHmac('md5', secretKey).update(textToEncrypt50mb).digest('hex');
  fs.appendFileSync('tests.txt', '\n\nmd5 processing time for 50mb file : ' + sw.elapsedMilliseconds + 'ms\n');
  sw.stop();
  //console.log('\n' + hash1 + '\n');

  sw.reset();
  sw.start();
  const hash2 = crypto.createHmac('sha1', secretKey).update(textToEncrypt50mb).digest('hex');
  fs.appendFileSync('tests.txt', 'sha1-160 processing time for 50mb file : ' + sw.elapsedMilliseconds + 'ms\n');
  sw.stop();
  //console.log('\n' + hash2 + '\n');

  sw.reset();
  sw.start();
  const hash3 = crypto.createHmac('sha224', secretKey).update(textToEncrypt50mb).digest('hex');
  fs.appendFileSync('tests.txt', 'sha2-224 processing time for 50mb file : ' + sw.elapsedMilliseconds + 'ms\n');
  sw.stop();
  //console.log('\n' + hash3 + '\n');

  sw.reset();
  sw.start();
  const hash4 = crypto.createHmac('sha256', secretKey).update(textToEncrypt50mb).digest('hex');
  fs.appendFileSync('tests.txt', 'sha3-256 processing time for 50mb file : ' + sw.elapsedMilliseconds + 'ms\n');
  sw.stop();
  //console.log('\n' + hash4 + '\n');

  sw.reset();
  sw.start();
  const hash5 = crypto.createHmac('sha384', secretKey).update(textToEncrypt50mb).digest('hex');
  fs.appendFileSync('tests.txt', 'sha2-384 processing time for 50mb file : ' + sw.elapsedMilliseconds + 'ms\n');
  sw.stop();
  //console.log('\n' + hash5 + '\n\n');

  sw.reset();
  sw.start();
  const hash6 = crypto.createHmac('sha512', secretKey).update(textToEncrypt50mb).digest('hex');
  fs.appendFileSync('tests.txt', 'sha2-512 processing time for 50mb file : ' + sw.elapsedMilliseconds + 'ms\n');
  sw.stop();
  //console.log('\n' + hash6 + '\n\n');

  /************************************** 100 MB **************************************************/

  sw.reset();
  sw.start();
  const hash7 = crypto.createHmac('md5', secretKey).update(textToEncrypt100mb).digest('hex');
  fs.appendFileSync('tests.txt', '\n\nmd5 processing time for 100mb file : ' + sw.elapsedMilliseconds + 'ms\n');
  sw.stop();
  //console.log('\n' + hash7 + '\n');

  sw.reset();
  sw.start();
  const hash8 = crypto.createHmac('sha1', secretKey).update(textToEncrypt100mb).digest('hex');
  fs.appendFileSync('tests.txt', 'sha1-160 processing time for 100mb file : ' + sw.elapsedMilliseconds + 'ms\n');
  sw.stop();
  //console.log('\n' + hash8 + '\n');

  sw.reset();
  sw.start();
  const hash9 = crypto.createHmac('sha224', secretKey).update(textToEncrypt100mb).digest('hex');
  fs.appendFileSync('tests.txt', 'sha2-224 processing time for 100mb file : ' + sw.elapsedMilliseconds + 'ms\n');
  sw.stop();
  //console.log('\n' + hash9 + '\n');

  sw.reset();
  sw.start();
  const hash10 = crypto.createHmac('sha256', secretKey).update(textToEncrypt100mb).digest('hex');
  fs.appendFileSync('tests.txt', 'sha2-256 processing time for 100mb file : ' + sw.elapsedMilliseconds + 'ms\n');
  sw.stop();
  //console.log('\n' + hash10 + '\n');

  sw.reset();
  sw.start();
  const hash11 = crypto.createHmac('sha384', secretKey).update(textToEncrypt100mb).digest('hex');
  fs.appendFileSync('tests.txt', 'sha2-384 processing time for 100mb file : ' + sw.elapsedMilliseconds + 'ms\n');
  sw.stop();
  //console.log('\n' + hash11 + '\n\n');

  sw.reset();
  sw.start();
  const hash12 = crypto.createHmac('sha512', secretKey).update(textToEncrypt100mb).digest('hex');
  fs.appendFileSync('tests.txt', 'sha2-512 processing time for 100mb file : ' + sw.elapsedMilliseconds + 'ms\n');
  sw.stop();
  //console.log('\n' + hash12 + '\n\n');

  /************************************** 200 MB **************************************************/

  sw.reset();
  sw.start();
  const hash13 = crypto.createHmac('md5', secretKey).update(textToEncrypt200mb).digest('hex');
  fs.appendFileSync('tests.txt', '\n\nmd5 processing time for 200mb file : ' + sw.elapsedMilliseconds + 'ms\n');
  sw.stop();
  //console.log('\n' + hash9 + '\n');

  sw.reset();
  sw.start();
  const hash14 = crypto.createHmac('sha1', secretKey).update(textToEncrypt200mb).digest('hex');
  fs.appendFileSync('tests.txt', 'sha1-160 processing time for 200mb file : ' + sw.elapsedMilliseconds + 'ms\n');
  sw.stop();
  //console.log('\n' + hash14 + '\n');

  sw.reset();
  sw.start();
  const hash15 = crypto.createHmac('sha224', secretKey).update(textToEncrypt200mb).digest('hex');
  fs.appendFileSync('tests.txt', 'sha2-224 processing time for 200mb file : ' + sw.elapsedMilliseconds + 'ms\n');
  sw.stop();
  //console.log('\n' + hash15 + '\n');

  sw.reset();
  sw.start();
  const hash16 = crypto.createHmac('sha256', secretKey).update(textToEncrypt200mb).digest('hex');
  fs.appendFileSync('tests.txt', 'sha2-256 processing time for 200mb file : ' + sw.elapsedMilliseconds + 'ms\n');
  sw.stop();
  //console.log('\n' + hash16 + '\n');

  sw.reset();
  sw.start();
  const hash17 = crypto.createHmac('sha384', secretKey).update(textToEncrypt200mb).digest('hex');
  fs.appendFileSync('tests.txt', 'sha2-384 processing time for 200mb file : ' + sw.elapsedMilliseconds + 'ms\n');
  sw.stop();
  //console.log('\n' + hash17 + '\n\n');

  sw.reset();
  sw.start();
  const hash18 = crypto.createHmac('sha512', secretKey).update(textToEncrypt200mb).digest('hex');
  fs.appendFileSync('tests.txt', 'sha2-512 processing time for 200mb file : ' + sw.elapsedMilliseconds + 'ms\n\n');
  sw.stop();
  //console.log('\n' + hash18 + '\n\n');
}

console.log('\nDone! Please open tests.txt to view processing time for operations.\n');
