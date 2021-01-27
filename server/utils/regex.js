exports.keyValidation = (key) => {
  const regex = /^[a-zA-Z0-9]{8}$/;

  if (regex.test(key)) {
    return true;
  }
  return false;
};
