import React, {Component} from 'react';
import { DashTour } from '../lib';

class SimpleTestApp extends Component {
    constructor() {
        super();
        this.state = {
            isTourOpen: false,
            currentStep: 1
        };
        this.startTour = this.startTour.bind(this);
        this.closeTour = this.closeTour.bind(this);
        this.setProps = this.setProps.bind(this);
        this.handleStepChange = this.handleStepChange.bind(this);
    }

    setProps(newProps) {
        console.log('setProps called with:', newProps);
        this.setState(newProps);
    }

    handleStepChange(newStep) {
        console.log('Step changed to:', newStep);
        this.setState({
            currentStep: newStep
        });
    }

    startTour(e) {
        e.preventDefault();
        console.log('Starting tour');
        this.setState({ 
            isTourOpen: true,
            currentStep: 1
        });
    }

    closeTour(e) {
        if (e) e.preventDefault();
        console.log('Closing tour');
        this.setState({ 
            isTourOpen: false,
            currentStep: 1
        });
    }

    render() {
        const steps = [
            { 
                selector: '#test-element-1', 
                content: 'Este es el primer elemento del tour',
                position: 'bottom'
            },
            { 
                selector: '#test-element-2', 
                content: 'Este es el segundo elemento del tour',
                position: 'top'
            }
        ];

        return (
            <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
                <h1>Simple Test DashTour Component</h1>
                
                <DashTour
                    id="simple-tour"
                    isOpen={this.state.isTourOpen}
                    steps={steps}
                    CurrentStep={this.state.currentStep}
                    setProps={this.setProps}
                    showButtons={true}
                    showCloseButton={true}
                    showNavigation={true}
                    showNumber={true}
                    closeWithMask={false}
                    disableKeyboardNavigation={false}
                    accentColor="#007bff"
                />
                
                <div style={{ marginBottom: '30px' }}>
                    <button 
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
                    <strong> Paso:</strong> {this.state.currentStep || 1}
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
                    </div>
                </div>
                
                <div style={{ marginTop: '30px' }}>
                    <h3>📋 Instrucciones:</h3>
                    <ul>
                        <li>Haz clic en "🚀 Iniciar Tour" para comenzar</li>
                        <li>Usa los botones "Siguiente" y "Anterior" para navegar</li>
                        <li>Observa la consola del navegador para debug</li>
                        <li>Puedes cerrar el tour con el botón "❌" o con Escape</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SimpleTestApp;
