var firebaseConfig = {
    apiKey: "AIzaSyDHoIg3zGMGNLq7VrVKO_s73yZwVQFRy1A",
    authDomain: "artigo-6d2c3.firebaseapp.com",
    //artigo-6d2c3.firebaseapp.com
    projectId: "artigo-6d2c3",
    storageBucket: "",
    messagingSenderId: "723084328080",
    appId: "1:723084328080:web:d5978efce7eb929ce0ac15"
};
firebase.initializeApp(firebaseConfig);


function writeUserData() {
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

