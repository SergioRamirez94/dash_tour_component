import React, {Component} from 'react';
import { DashTour } from '../lib';

class TestApp extends Component {
    constructor() {
        super();
        this.state = {
            isTourOpen: false,
            currentStep: 0
        };
        this.setProps = this.setProps.bind(this);
        this.startTour = this.startTour.bind(this);
        this.closeTour = this.closeTour.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    startTour() {
        this.setState({ 
            isTourOpen: true,
            currentStep: 0
        });
    }

    closeTour() {
        this.setState({ 
            isTourOpen: false,
            currentStep: 0
        });
    }

    render() {
        const steps = [
            { selector: '#el1', content: 'Este es el primer elemento' },
            { selector: '#el2', content: 'Este es el segundo elemento' },
            { selector: '#start-tour-btn', content: 'Botón para iniciar el tour' }
        ];

        return (
            <div style={{ padding: '20px' }}>
                <h1>Test DashTour Component</h1>
                
                <DashTour
                    id="tour"
                    isOpen={this.state.isTourOpen}
                    steps={steps}
                    CurrentStep={this.state.currentStep}
                    setProps={this.setProps}
                    onRequestClose={this.closeTour}
                    disableKeyboardNavigation={false}
                    showButtons={true}
                    showCloseButton={true}
                    showNavigation={true}
                    showNumber={true}
                    closeWithMask={true}
                />
                
                <button 
                    id="start-tour-btn"
                    onClick={this.startTour}
                    style={{
                        backgroundColor: '#007bff',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginBottom: '20px'
                    }}
                >
                    Iniciar Tour
                </button>

                <button 
                    onClick={this.closeTour}
                    style={{
                        backgroundColor: '#dc3545',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginBottom: '20px',
                        marginLeft: '10px'
                    }}
                >
                    Cerrar Tour
                </button>

                <div style={{ marginBottom: '20px' }}>
                    <strong>Estado del Tour:</strong> {this.state.isTourOpen ? 'Abierto' : 'Cerrado'} | 
                    <strong> Paso actual:</strong> {this.state.currentStep || 0}
                </div>
                
                <div style={{ marginTop: '20px' }}>
                    <div 
                        id="el1" 
                        style={{
                            padding: '20px',
                            backgroundColor: '#f8f9fa',
                            border: '1px solid #dee2e6',
                            borderRadius: '5px',
                            marginBottom: '20px'
                        }}
                    >
                        Primer elemento - Este será destacado en el primer paso del tour
                    </div>
                    
                    <div 
                        id="el2" 
                        style={{
                            padding: '20px',
                            backgroundColor: '#e9ecef',
                            border: '1px solid #dee2e6',
                            borderRadius: '5px',
                            marginBottom: '20px'
                        }}
                    >
                        Segundo elemento - Este será destacado en el segundo paso del tour
                    </div>
                </div>
                
                <div style={{ marginTop: '20px' }}>
                    <h3>Instrucciones:</h3>
                    <ol>
                        <li>Haz clic en "Iniciar Tour" para comenzar</li>
                        <li>El tour destacará cada elemento secuencialmente</li>
                        <li>Puedes navegar con los botones Siguiente/Anterior</li>
                        <li>Puedes cerrar el tour en cualquier momento</li>
                    </ol>
                </div>
            </div>
        );
    }
}

export default TestApp;
