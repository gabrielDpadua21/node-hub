const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://bc_user:Toor1234@localhost/admin', 
{ useNewUrlParser: true });

mongoose.Error.messages.general.required = 'O atributo "{PATH}" é obrigatório';
mongoose.Error.messages.Number.min = 
'O "{VALUE}" informado e menor que o limite mínimo de "{MIN}".';
mongoose.Error.messages.Number.max = 
'O "{VALUE}" informado e maior que o limite maximo de "{MAX}"';
mongoose.Error.messages.String.enum = 
'"{VALUE}" não é válido para o atributo "{PATH}".'