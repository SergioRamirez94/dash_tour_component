import React, {Component} from 'react';
import Tour from 'reactour';

class DirectTourTest extends Component {
    constructor() {
        super();
        this.state = {
            isTourOpen: false,
            currentStep: 0
        };
        this.startTour = this.startTour.bind(this);
        this.closeTour = this.closeTour.bind(this);
    }

    startTour(e) {
        e.preventDefault();
        console.log('Starting tour');
        this.setState({ 
            isTourOpen: true,
            currentStep: 0
        });
    }

    closeTour() {
        console.log('Closing tour');
        this.setState({ 
            isTourOpen: false,
            currentStep: 0
        });
    }

    render() {
        const steps = [
            { 
                selector: '#test-element-1', 
                content: <h1>Este es el primer elemento del tour. Aquí puedes mostrar información importante.</h1>,
                position: 'bottom'
            },
            { 
                selector: '#test-element-2', 
                content: <h1>Este es el segundo elemento del tour. Aquí se muestra más información relevante.</h1>,
                position: 'top'
            },
            { 
                selector: '#start-tour-btn', 
                content: 'Este botón te permite reiniciar el tour en cualquier momento. ¡Pruébalo!',
                position: 'bottom'
            }
        ];

        return (
            <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
                <h1>🎯 Test Tour Directo (sin DashTour)</h1>
                
                <Tour
                    steps={steps}
                    isOpen={this.state.isTourOpen}
                    onRequestClose={this.closeTour}
                    showButtons={true}
                    showCloseButton={true}
                    showNavigation={true}
                    showNumber={true}
                    closeWithMask={true}
                    disableKeyboardNavigation={false}
                    accentColor="#007bff"
                    rounded={10}
                    className="custom-tour"
                />
                
                <div style={{ marginBottom: '30px' }}>
                    <button 
                        id="start-tour-btn"
                        onClick={this.startTour}
                        style={{
                            backgroundColor: '#28a745',
                            color: 'white',
                            padding: '12px 24px',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            marginRight: '10px',
                            fontSize: '16px'
                        }}
                    >
                        🚀 Iniciar Tour
                    </button>

                    <button 
                        onClick={this.closeTour}
                        style={{
                            backgroundColor: '#dc3545',
                            color: 'white',
                            padding: '12px 24px',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '16px'
                        }}
                    >
                        ❌ Cerrar Tour
                    </button>
                </div>

                <div style={{ 
                    marginBottom: '20px',
                    padding: '10px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '5px',
                    border: '1px solid #dee2e6'
                }}>
                    <strong>Estado:</strong> {this.state.isTourOpen ? '🟢 Abierto' : '🔴 Cerrado'} | 
                    <strong> Total de pasos:</strong> {steps.length}
                </div>
                
                <div style={{ marginTop: '40px' }}>
                    <div 
                        id="test-element-1"
                        style={{
                            padding: '30px',
                            backgroundColor: '#e3f2fd',
                            border: '2px solid #2196f3',
                            borderRadius: '10px',
                            marginBottom: '30px',
                            textAlign: 'center'
                        }}
                    >
                        <h3>🎯 Elemento 1</h3>
                        <p>Este es el primer elemento que será destacado en el tour.</p>
                        <p>Aquí puedes mostrar información importante sobre este elemento.</p>
                    </div>
                    
                    <div 
                        id="test-element-2"
                        style={{
                            padding: '30px',
                            backgroundColor: '#f3e5f5',
                            border: '2px solid #9c27b0',
                            borderRadius: '10px',
                            marginBottom: '30px',
                            textAlign: 'center'
                        }}
                    >
                        <h3>🎯 Elemento 2</h3>
                        <p>Este es el segundo elemento que será destacado en el tour.</p>
                        <p>Aquí se muestra más información relevante sobre este elemento.</p>
                    </div>
                </div>
                
                <div style={{ marginTop: '30px' }}>
                    <h3>📋 Instrucciones:</h3>
                    <ul>
                        <li>Haz clic en "🚀 Iniciar Tour" para comenzar</li>
                        <li>Usa los botones "Siguiente" y "Anterior" para navegar</li>
                        <li>Observa la consola del navegador para debug</li>
                        <li>Puedes cerrar el tour con el botón "❌" o con Escape</li>
                        <li>¡Ahora debería funcionar correctamente sin ponerse en blanco!</li>
                    </ul>
                </div>

                <div style={{ 
                    marginTop: '20px',
                    padding: '15px',
                    backgroundColor: '#d4edda',
                    borderRadius: '5px',
                    border: '1px solid #c3e6cb'
                }}>
                    <h4>🔧 Diferencias con DashTour:</h4>
                    <ul>
                        <li>Usa directamente la librería reactour</li>
                        <li>Manejo correcto de eventos de navegación</li>
                        <li>No debería causar problemas de pantalla en blanco</li>
                        <li>Mejor control del estado del tour</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default DirectTourTest;
