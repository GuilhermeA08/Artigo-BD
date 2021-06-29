

function writeData() {
    firebase.database().ref('dias/').push({
        notificados: document.getElementById('notificados').value,
        suspeitos: document.getElementById('suspeitos').value,
        descartados: document.getElementById('descartados').value,
        confirmados: document.getElementById('confirmados').value,
        hospitalizados: document.getElementById('hospitalizados').value,
        tratamento: document.getElementById('tratamento').value,
        curados: document.getElementById('curados').value,
        obitos: document.getElementById('obitos').value,
        dia:  document.getElementById('dia').value
    });
    getData();
}

function getData()
{
    firebase.database().ref('/dias').once('value', function(snapshot)
        {
            snapshot.forEach(function(childSnapshot) {
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                document.getElementById("data").innerHTML = 
                "Notificados: " + childData['notificados'] + ", Suspeitos " + childData['suspeitos']
                + ", Dia: " + childData['dia'];
            })
        }
    )
}
getData();
