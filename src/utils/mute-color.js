const BASE = 0.45;
const MAG = 0.1;

function hexVal(ch) {
    if (ch >= '0' && ch <= '9') {
        return ch.charCodeAt(0)-'0'.charCodeAt(0);
    } else if (ch >= 'A' && ch <= 'F') {
        return ch.charCodeAt(0)-'A'.charCodeAt(0) + 10;
    } else if (ch >= 'a' && ch <= 'f') {
        return ch.charCodeAt(0)-'a'.charCodeAt(0) + 10;
    } else {
        return undefined;
    }
}

function hexOf(n) {
    const hx = '0123456789abcdef';
    if (n < 0 || n > 255) {
        return undefined
    }
    const a = Math.floor(n/16);
    const b = n%16;
    const hex = hx.charAt(a) + hx.charAt(b);
    return hex;
}

function adj(c1) {
    let c2 = c1*MAG + BASE*255;
    c2 = Math.round(c2);
    c2 = Math.min(c2,255);
    c2 = Math.max(0,c2);
    return c2;
}

function priValAt(colArr,offSet) {
    let sub = colArr.substring(offSet, offSet+2);
    let val = hexVal(sub.charAt(0))*16 + hexVal(sub.charAt(1));
    return val;
}

function mute(colIn) {
    if (colIn.length != 6) {
        log('invalid len = ' + colIn.length);
        return;
    }
    let pri = [];
    for (let i=0;i<3;i++) {
        pri.push(priValAt(colIn,i*2));
    }
    let colOut = '';
    for (let j=0;j<3;j++) {
        let newVal = adj(pri[j]);
        colOut += hexOf(newVal);
    }
    log('   #' + colIn + ' -> #' + colOut);
}

function log(msg) {
    console.log(msg);
}

mute('000044');
mute('1100dd');
mute('eeeeee');
mute('99eeee');
mute('000000');
mute('ddddff');