const charsets = new Set();
charsets.add('ASCII');
charsets.add('ISO-8859-1');
charsets.add('UTF-8');
charsets.delete('ASCII');
console.log(charsets);
