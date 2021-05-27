
function SelectAllData()
{
    firebase.database().ref('dias').once('value',
        function(AllRecords){
        AllRecords.forEach(function(CurrentRecord){
                    var notificados_var = CurrentRecord.val().notificados;
                    var suspeitos_var = CurrentRecord.val().suspeitos;
                    var descartados_var = CurrentRecord.val().descartados;
                    var confirmados_var = CurrentRecord.val().confirmados;
                    var hospitalizados_var = CurrentRecord.val().hospitalizados;
                    var tratamento_var = CurrentRecord.val().tratamento;
                    var curados_var = CurrentRecord.val().curados;
                    var obitos_var = CurrentRecord.val().obitos;
                    var dia_var = CurrentRecord.val().dia;

                    AddItensToTable(notificados_var, suspeitos_var, descartados_var, confirmados_var, hospitalizados_var, tratamento_var, curados_var, obitos_var, dia_var);
                }
            );
        }
    );
}

window.onload = SelectAllData;

function AddItensToTable(notificados, suspeitos, descartados, confirmados, hospitalizados, tratamento, curados, obitos, dias){
    var tbody = document.getElementById('tbody1');
    var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
    var td8 = document.createElement('td');
    var td9 = document.createElement('td');

    td1.innerHTML = notificados;
    td2.innerHTML = suspeitos;
    td3.innerHTML = descartados;
    td4.innerHTML = confirmados;
    td5.innerHTML = hospitalizados;
    td6.innerHTML = tratamento;
    td7.innerHTML = curados;
    td8.innerHTML = obitos;
    td9.innerHTML = dias;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);
    trow.appendChild(td8);
    trow.appendChild(td9);

    tbody.appendChild(trow);
}