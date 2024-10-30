``` json
{
    "id": 1,
    "description": "A",
    "branch": [
        {
            "id": 2,
            "description": "AA",
            "branch": [
                {
                    "id": 4,
                    "description": "AAB",
                    "branch": []
                },
                {
                    "id": 5,
                    "description": "AAC",
                    "branch": []
                }
            ]
        },
        {
            "id": 3,
            "description": "AB",
            "branch": []
        }
    ]
}
```

``` jsx
// Após buscar os dados e convertê-los para JSON
const data = {
    // ... dados da API
}

// Função recursiva para renderizar a árvore
function renderTree(node) {
    return (
        <ul>
            <li>{node.nome}</li>
            {node.filhos.map(child => renderTree(child))}
        </ul>
    )
}

// Renderizando a árvore
ReactDOM.render(renderTree(data), document.getElementById('root'))
```

