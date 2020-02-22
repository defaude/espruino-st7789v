const Backlight = (function () {

    function write (next) {
        state = next;
        digitalWrite(D04, state);
    }

    function off () { write(false); }

    function on () { write(true); }

    function swap () {
        if (state) { off(); } else { on(); }
    }

    let state = false;
    off();

    return {
        on: on,
        off: off,
        swap: swap
    };

}());

setWatch(Backlight.swap, D00, {repeat: true, edge: 'falling'});
