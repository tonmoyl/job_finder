export const fetchPersonal = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/personals/${id}`
  });
};

export const updatePersonal = personal => {
  return $.ajax({
    url: `api/credentials/${personal.id}`,
    type: 'patch',
    data: { personal },
  })
};
