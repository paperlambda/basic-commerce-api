const logErrors = (err, req, res, next) => {
  console.error(err)
  next(err)
}

const clientErrorHandler = (err, req, res, next) => {
  if(err.message === 'NOT_FOUND') {
    return res.status(404).send({ error: "Not found" })
  }
  next(err)
}

const errorHandler = (err, req, res, next) => {
  if(err.name === 'ValidationError') {
    const getError = mongooseValidationError(err)
    res.status(400).send(getError)
  }
  
  res.status(500).send(err)
}

const mongooseValidationError = (err) => {
  const { errors } = err
  const errorFields = Object.keys(errors)
  const buildError = {}
  
  for(let i=0;i<errorFields.length;i++){
    buildError[errorFields[i]] = errors[errorFields[i]].message
  }

  return { error: buildError }
}

export { 
  logErrors,
  clientErrorHandler,
  errorHandler
}