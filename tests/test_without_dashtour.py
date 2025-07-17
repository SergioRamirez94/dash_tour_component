import dash
from dash import dcc, html, Input, Output, callback

# Crear la aplicación Dash
app = dash.Dash(__name__)

# Layout de la aplicación SIN DashTour
app.layout = html.Div([
    html.H1("Dashboard de Prueba (Sin DashTour)", id="title", style={"textAlign": "center", "marginBottom": "20px"}),
    
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
            "Botón de Prueba",
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
        html.P("Este es un dashboard de prueba SIN el componente DashTour."),
        html.P("Si esto funciona, el problema está específicamente en el componente DashTour.")
    ], style={
        "marginTop": "20px",
        "padding": "20px",
        "backgroundColor": "#f8f9fa",
        "borderRadius": "5px"
    })
], style={"padding": "20px"})

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

if __name__ == "__main__":
    print("🚀 Iniciando el servidor Dash SIN DashTour...")
    print("📱 Abre tu navegador en: http://127.0.0.1:8052")
    print("🎯 Si esto funciona, el problema está en el componente DashTour")
    app.run(debug=True, port=8052)
