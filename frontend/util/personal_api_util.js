export const fetchPersonal = () => {
  return $.ajax({
    method: 'GET',
    url: `api/credentials/1`
  });
};

export const updatePersonal = personal => {
  return $.ajax({
    url: `api/credentials/${personal.id}`,
    type: 'patch',
    data: { personal },
  })
};
