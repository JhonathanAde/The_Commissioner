export const getAllRatings = async () => {
  const response = await fetch("/api/ratings/")
  return await response.json();
} 

export const getRatingsByCommissionId = async(id) => {
  const response = await fetch(`/api/ratings/${id}/rating`)
  return await response.json();
}

export const createRating = async (payload) => {
  const response = await fetch(`/api/ratings/new`, {
    method: 'POST',
    body: payload
  });
  return await response.json();
} 