import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import DashTour from '../DashTour.react';

describe('DashTour component', () => {
    const steps = [
        { selector: '#el1', content: 'Step 1' },
        { selector: '#el2', content: 'Step 2' }
    ];

    test('opens and highlights the first step', () => {
        document.body.innerHTML = `
            <div id="el1">First</div>
            <div id="el2">Second</div>`;

        render(<DashTour isOpen steps={steps} />);
        const target = document.querySelector('#el1');
        expect(target.classList.contains('dash-tour-highlight')).toBe(true);
    });

    test('removes highlight when closed', () => {
        document.body.innerHTML = `
            <div id="el1">First</div>`;

        const {rerender} = render(<DashTour isOpen steps={steps} />);
        rerender(<DashTour isOpen={false} steps={steps} />);

        const target = document.querySelector('#el1');
        expect(target.classList.contains('dash-tour-highlight')).toBe(false);
    });
});
