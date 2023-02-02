export const getAllCommissions = async () => {
  const response = await fetch("/api/commissions/")
  return await response.json();
} 

export const getCommissionsById = async (id) => {
  const response = await fetch(`/api/commissions/${id}/commission`)
  return await response.json();
}

export const getACommission = async(id) => {
  const response = await fetch(`/api/commissions/request/${id}`)
  return await response.json();
}

export const createCommission = async (payload) => {
  const response = await fetch("/api/commissions/new", {
    method: 'POST',
    body: payload
  });

  return await response.json();
}

export const uploadCommissionImage = async (payload) => {
  const response = await fetch("/api/commissions/upload-image", {
    method: 'POST',
    body: payload
  });

  return await response.json();
}