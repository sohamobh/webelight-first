//program to get the extension of a filename

const getExtension = (str)=>str.slice(str.lastIndexOf('.')); //slice and lastIndexOf functions are used
console.log(getExtension('index.html'));
console.log(getExtension('document.txt'));