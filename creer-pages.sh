#!/bin/bash

if [ -z "$1" ]; then
    echo "Usage: ./creer-pages.sh nomFichier"
    exit 1
fi


NomFichier="$1"
nomPage="./src/pages/$NomFichier"
JsFichier="$nomPage/$NomFichier.js"
RouterJs="./router.js


mkdir -p "$nomPage"

cat > "$JsFichier" << EOF
export const $NomFichier = () => \`
    <div>
        <h2>Bienvenue sur la page $NomFichier</h2>
        <p>Ceci est la page $NomFichier.</p>
    </div>
\`;
EOF

echo "Page $JsFichier créée avec succès."
