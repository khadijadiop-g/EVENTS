const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.static(__dirname));

app.use(express.json());
app.use('/src', express.static(path.join(__dirname, 'src')));
app.use('/Styles', express.static(path.join(__dirname, 'Styles')));
app.use('/Assets', express.static(path.join(__dirname, 'Assets')));

app.get('/api/data', (req, res) => {
    const dbPath = path.join(__dirname, 'db.json');
    
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            console.error("Erreur de lecture db.json :", err);
            return res.status(500).json({ error: "Impossible de lire les données" });
        }
        res.json(JSON.parse(data));
    });
});

app.post('/api/save-data', (req, res) => {
    const dbPath = path.join(__dirname, 'db.json');
    
    fs.writeFile(dbPath, JSON.stringify(req.body, null, 4), (err) => {
        if (err) {
            console.error("Erreur d'écriture db.json :", err);
            return res.status(500).json({ error: "Impossible de sauvegarder" });
        }
        res.json({ message: "Données sauvegardées avec succès !" });
    });
});

 app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
}); 


// app.get(/^\/(?!api).*/, (req, res) => {
//     res.sendFile(path.join(__dirname, 'src', 'index.html'));
// });

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur exécuté sur http://localhost:${PORT}`);
});

