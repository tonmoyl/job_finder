export const fetchPersonal = () => {
  return $.ajax({
    method: 'GET',
    url: `api/credentials/user`
  });
};

export const updatePersonal = personal => {
  return $.ajax({
    url: `api/credentials/user`,
    type: 'patch',
    data: { personal }
  })
};
