const{ v4:uuid4 } = require('uuid');

class Tarea {
    id = '';
    desc = '';
    completadaEn = null;

    constructor( desc ) {

        this.id = uuid4();
        this.desc = desc;
        this.completadaEn = null

    }

}

module.exports = Tarea;