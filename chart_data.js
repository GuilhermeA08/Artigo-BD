async function Select_chart_line() {
    var chart_line = [];
    var AllRecords = await firebase.database().ref('dias').once('value');
    var i = 0;
    AllRecords.forEach((CurrentRecord) => {

        var confirmados_var = CurrentRecord.val().confirmados;
        var curados_var = CurrentRecord.val().curados;
        var obitos_var = CurrentRecord.val().obitos;

        chart_line[i] =
        {
            "confirmados": confirmados_var,
            "curados": curados_var,
            "obitos": obitos_var
        }
        i++;
    }

    );
    return chart_line;
}

