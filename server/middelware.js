const errorHandler = (error, req, res, next) => {
    console.log(error.message);

    if (error.name === 'CastError') {
        return res.status(400).send({ error: 'malformatted id' })
    }

    next(error)
}

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' })
}

export { errorHandler, unknownEndpoint }