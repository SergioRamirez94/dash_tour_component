import dash
from dash import dcc, html, Input, Output, callback
import dash_bootstrap_components as dbc
from dash_tour_component import DashTour

# Crear la aplicación Dash
app = dash.Dash(__name__, external_stylesheets=[dbc.themes.BOOTSTRAP])

# Definir los pasos del tour
tour_steps = [
    {
        "selector": "#title",
        "content": "¡Bienvenido! Este es el título de nuestro dashboard."
    },
    {
        "selector": "#dropdown",
        "content": "Aquí puedes seleccionar diferentes opciones."
    },
    {
        "selector": "#graph",
        "content": "Este gráfico se actualiza según tu selección."
    },
    {
        "selector": "#button",
        "content": "Haz clic aquí para reiniciar el tour."
    }
]

# Layout de la aplicación
app.layout = dbc.Container([
    # Componente DashTour
    DashTour(
        id="tour",
        steps=tour_steps,
        isOpen=False,
        showButtons=True,
        showCloseButton=True,
        showNavigation=True,
        accentColor="#007bff"
    ),
    
    # Título principal
    dbc.Row([
        dbc.Col([
            html.H1("Dashboard de Prueba", id="title", className="text-center mb-4")
        ])
    ]),
    
    # Controles
    dbc.Row([
        dbc.Col([
            html.Label("Selecciona una opción:"),
            dcc.Dropdown(
                id="dropdown",
                options=[
                    {"label": "Opción A", "value": "A"},
                    {"label": "Opción B", "value": "B"},
                    {"label": "Opción C", "value": "C"}
                ],
                value="A",
                className="mb-3"
            )
        ], width=6),
        
        dbc.Col([
            dbc.Button(
                "Iniciar Tour",
                id="button",
                color="primary",
                className="mb-3"
            )
        ], width=6)
    ]),
    
    # Gráfico
    dbc.Row([
        dbc.Col([
            dcc.Graph(id="graph")
        ])
    ]),
    
    # Información adicional
    dbc.Row([
        dbc.Col([
            dbc.Card([
                dbc.CardBody([
                    html.H4("Información"),
                    html.P("Este es un dashboard de prueba para demostrar el componente DashTour.")
                ])
            ])
        ])
    ], className="mt-4")
], fluid=True)

# Callback para actualizar el gráfico
@app.callback(
    Output("graph", "figure"),
    Input("dropdown", "value")
)
def update_graph(selected_value):
    import plotly.graph_objects as go
    
    # Datos de ejemplo según la selección
    data = {
        "A": [1, 2, 3, 4, 5],
        "B": [5, 4, 3, 2, 1],
        "C": [2, 4, 1, 5, 3]
    }
    
    fig = go.Figure()
    fig.add_trace(go.Bar(
        x=["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
        y=data[selected_value],
        name=f"Datos {selected_value}"
    ))
    
    fig.update_layout(
        title=f"Gráfico para opción {selected_value}",
        xaxis_title="Mes",
        yaxis_title="Valor"
    )
    
    return fig

# Callback para controlar el tour
@app.callback(
    Output("tour", "isOpen"),
    Input("button", "n_clicks"),
    prevent_initial_call=True
)
def start_tour(n_clicks):
    if n_clicks:
        return True
    return False

if __name__ == "__main__":
    app.run_server(debug=True, port=8050)
