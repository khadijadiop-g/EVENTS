let data = { users: [] };

async function loadData() {
    try {
        const response = await fetch('/api/data'); 
        if (!response.ok) throw new Error(`Erreur : ${response.status}`);
        data = await response.json() ?? { users: [] };
        if (!data.users) data.users = [];
        console.log(data)
    } catch (error) {
        console.error("Erreur de chargement initial :", error);
        data = { users: [] };
    }
}

async function saveData() {
    try {
        const response = await fetch('/api/save-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`Erreur serveur : ${response.status}`);
        }

        const result = await response.json();
        console.log(result.message);
    } catch (error) {
        console.error("Erreur lors de la synchronisation globale :", error);
        alert("Impossible de sauvegarder les modifications.");
    }
}

function updateDb(newData, table) {
    if (!data[table]) data[table] = [];
    data[table].push(newData);
    saveData();
}

function deleteFromDb(id, table) {
    if (data[table]) {
        data[table] = data[table].filter(item => item.id !== id);
        saveData(); 
    }
}

export { loadData, updateDb, deleteFromDb, data };