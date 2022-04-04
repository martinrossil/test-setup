import { Component } from 'fuix';
import ITestComponent from './ITestComponent';

export default class TestComponent extends Component implements ITestComponent {
    public constructor() {
        super();
    }

    public test(input: string): string {
        return input + ' World';
    }

    private _twenty = NaN;
    public set twenty(value: number) {
        this._twenty = value;
    }
    public get twenty(): number {
        return this._twenty;
    }
}
customElements.define('t-c', TestComponent);
