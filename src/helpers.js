const omitReset = (obj) => {
  const { reset, ...rest } = obj
  return rest
}

export { omitReset }