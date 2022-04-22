export default class TestComponentEvent extends Event {
    public static TEST = 'test';
    public prop: string;
    public constructor(type: string, prop: string = '', bubbles: boolean = false) {
        super(type, {bubbles});
        this.prop = prop;
    }
}
