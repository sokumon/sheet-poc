import $ from './dom';

const KEYCODES = {
    13: 'enter',
    91: 'meta',
    16: 'shift',
    17: 'ctrl',
    18: 'alt',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    9: 'tab',
    27: 'esc',
    67: 'c',
    70: 'f',
    86: 'v',
    8:'backspace'
};

export default class Keyboard {
    constructor(element) {
        this.listeners = {};
        $.on(element, 'keydown', this.handler.bind(this));
    }

    handler(e) {
        let key = KEYCODES[e.keyCode];

        if (e.shiftKey && key !== 'shift') {
            key = 'shift+' + key;
        }

        if ((e.ctrlKey && key !== 'ctrl') || (e.metaKey && key !== 'meta')) {
            key = 'ctrl+' + key;
        }

        const listeners = this.listeners[key];

        if (listeners && listeners.length > 0) {
            for (let listener of listeners) {
                const preventBubbling = listener(e);
                if (preventBubbling === undefined || preventBubbling === true) {
                    e.preventDefault();
                }
            }
        }
    }

    on(key, listener) {
        const keys = key.split(',').map(k => k.trim());

        keys.map(key => {
            this.listeners[key] = this.listeners[key] || [];
            this.listeners[key].push(listener);
        });
    }

    off(key, listener) {
        const keys = key.split(',').map(k => k.trim());

        keys.map(key => {
            if (this.listeners[key]) {
                if (listener) {
                    // remove a specfic listner on the key
                    const index = this.listeners[key].indexOf(listener);
                    if (index !== -1) {
                        this.listeners[key].splice(index, 1);
                    }
                } else {
                    // remove them all on the key
                    delete this.listeners[key];
                }
            }
        });
    }
}

export let keyCode = KEYCODES;
