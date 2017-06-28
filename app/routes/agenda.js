module.exports = function(app) {
    app.get('/agenda', function(req, res) {
        var connection = app.infra.connection();
        var agendaDAO = new app.infra.agendaDAO(connection);

        agendaDAO.lista(function(err, results) {
            res.render('agenda/lista', {lista: results});
        });

        connection.end();
    });
}
