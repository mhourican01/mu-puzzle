var axiom = 'MI';
var desired = 'MU';

function solvePuzzle(axiom, desired) {

    var step = 0;
    var attempt = {
        step: axiom
    }

    while (axiom != desired) {

        var firstChar = axiom.charAt(0)
        var lastChar = axiom.charAt(axiom.length() - 1);

        // Rule 1: If last letter of string is 'I', add 'U',
        // e.g. 'MI' becomes 'MIU'
        if (lastChar === 'I') {
            axiom += 'U';
            attempt.step = axiom;
        }

        // Rule 2: If you have 'Mx', add 'x' to become 'Mxx',
        // e.g. 'MIU' becomes 'MIUIU'
        if (firstChar === 'M') {
            var remaining = axiom.slice(1, axiom.length - 1)
            axiom += remaining;
        }

        // Rule 3: If you have 'III', replace with 'U',
        // e.g. 'MIIII' becomes either 'MUI' or 'MIU'
        if (axiom.includes('III')) {
            axiom = axiom.replace('III', 'U')
        }

        // Rule 4: If you have 'UU', drop it,
        // e.g. 'MIUU' becomes 'MI'
        if (axiom.includes('UU')) {
            axiom = axiom.replace('UU', '')
        }

        step++;
    }
}