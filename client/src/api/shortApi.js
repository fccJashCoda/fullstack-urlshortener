exports.getData = async () => {
  try {
    const response = await fetch('/api/short/showall');

    if (!response.ok) {
      console.log('something went south');
      return;
    }

    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    return error.message;
  }
};

exports.postData = async (payload) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  const response = await fetch('/api/short/new', options);

  if (!response.ok) {
    console.log('something went south');
    return;
  }

  return this.getData();
};

// const postData = (input) => {
//   const payload = { url: input };
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(payload),
//   };

//   fetch('/api/short/new', options)
//     .then((response) => {
//       return response.json();
//     })
//     .then(() => fetchData())
//     .catch((err) => console.log(err));
// };

exports.getDataSync = async () => {
  let response;
  fetch('/api/short/showall')
    .then((res) => res.json())
    .then((data) => (response = data))
    .catch((err) => (response = err));
  return response;
};
