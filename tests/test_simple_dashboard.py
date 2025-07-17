import dash
from dash import dcc, html, Input, Output, callback
from dash_tour_component import DashTour

# Crear la aplicación Dash
app = dash.Dash(__name__)

# Definir los pasos del tour
tour_steps = [
    {
        "selector": '[id="title"]',
        "content": "¡Bienvenido! Este es el título de nuestro dashboard."
    },
    {
        "selector": '[id="dropdown"]',
        "content": "Aquí puedes seleccionar diferentes opciones."
    },
    {
        "selector": '[id="graph"]',
        "content": "Este gráfico se actualiza según tu selección."
    },
    {
        "selector": '[id="start-tour-btn"]',
        "content": "Haz clic aquí para reiniciar el tour."
    }
]

# Layout de la aplicación
app.layout = html.Div([
    # Componente DashTour

    
    # Contenido del dashboard
    html.Div([
        html.H1("Dashboard de Prueba", id="title", style={"textAlign": "center", "marginBottom": "20px"}),
        
        html.Div([
            html.Label("Selecciona una opción:"),
            dcc.Dropdown(
                id="dropdown",
                options=[
                    {"label": "Opción A", "value": "A"},
                    {"label": "Opción B", "value": "B"},
                    {"label": "Opción C", "value": "C"}
                ],
                value="A",
                style={"marginBottom": "20px"}
            ),
            
            html.Button(
                "Iniciar Tour",
                id="start-tour-btn",
                style={
                    "backgroundColor": "#007bff",
                    "color": "white",
                    "padding": "10px 20px",
                    "border": "none",
                    "borderRadius": "5px",
                    "cursor": "pointer",
                    "marginBottom": "20px"
                }
            )
        ], style={"width": "50%", "margin": "0 auto"}),
        
        # Gráfico
        dcc.Graph(id="graph"),
        
        # Información adicional
        html.Div([
            html.H3("Información"),
            html.P("Este es un dashboard de prueba para demostrar el componente DashTour."),
            html.P("El tour te guiará a través de los diferentes elementos de la interfaz.")
        ], style={
            "marginTop": "20px",
            "padding": "20px",
            "backgroundColor": "#f8f9fa",
            "borderRadius": "5px"
        }),
        DashTour(
        id="tour",
        steps=tour_steps,
        isOpen=False,
    ),
    ], style={"padding": "20px"})
])

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
        name=f"Datos {selected_value}",
        marker_color="#007bff"
    ))
    
    fig.update_layout(
        title=f"Gráfico para opción {selected_value}",
        xaxis_title="Mes",
        yaxis_title="Valor",
        showlegend=False
    )
    
    return fig

# Callback para controlar el tour
@app.callback(
    Output("tour", "isOpen"),
    Input("start-tour-btn", "n_clicks"),
    prevent_initial_call=True
)
def start_tour(n_clicks):
    if n_clicks:
        return True
    return False



if __name__ == "__main__":
    print("🚀 Iniciando el servidor Dash...")
    print("📱 Abre tu navegador en: http://127.0.0.1:8051")
    print("🎯 Haz clic en 'Iniciar Tour' para probar el componente DashTour")
    app.run(debug=True, port=8051)
