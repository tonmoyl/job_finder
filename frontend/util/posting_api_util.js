export const createPosting = posting => {
  return $.ajax({
    method: 'POST',
    url: '/api/postings',
    data: { posting }
  })
};

export const fetchPostings = () => {
  return $.ajax({
    method: "GET",
    url: '/api/postings'
  });
};

export const fetchPosting = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/postings/${id}`
  });
};

export const updatePosting = posting => {
  return $.ajax({
    url: `api/postings/${posting.id}`,
    type: 'patch',
    data: { posting },
  })
};

export const deletePosting = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/postings/${id}`
  });
};
