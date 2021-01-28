exports.keyValidation = (key) => {
  const regex = /^[a-zA-Z0-9]{8}$/;

  if (regex.test(key)) {
    return true;
  }
  return false;
};

exports.urlValidation = (url) => {
  const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/=]*)/;

  if (regex.test(url)) {
    return true;
  }
  return false;
};
