export const createSubmit = (id) => {
  return $.ajax({
    method: "POST",
    url: "/api/submits",
    data: { id: id }
  })
}

export const deleteSubmit = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/submits/${id}`,
    data: { id: id }
  })
}

export const fetchSubmits = () => {
  return $.ajax({
    method: "GET",
    url: "/api/submits"
  })
}
