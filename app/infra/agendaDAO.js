function agendaDAO(connection) {
    this._connection = connection;
}

agendaDAO.prototype.lista = function(callback) {
    this._connection.query('select * from agenda',callback);
}

module.exports = function(){
    return agendaDAO;
};
