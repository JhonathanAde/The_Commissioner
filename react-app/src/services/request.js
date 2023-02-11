export const createRequest = async (payload) => {
  const response = await fetch("/api/requests/new-request", {
    method: 'POST',
    body: payload
  });

  return await response.json();
}

export const getRequestsById = async(id) => {
  const response = await fetch(`/api/requests/${id}/request`)

  return await response.json()
}