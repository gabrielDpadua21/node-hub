class Callback {
    constructor() {
        this.sendJSON = ( res ) => ( result ) => res.status(200).json(result)
        this.logERR = ( res ) => ( err ) => res.status(400).json(err)
    }

    trys ( res ) {
        return this.sendJSON( res )
    }

    catchs ( err ) {
        return this.logERR ( err )
    }
}

module.exports = new Callback;