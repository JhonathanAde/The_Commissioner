export const createRequest = async (title, details, references, urgency, date, commission_id, price, user_id, buyer_id, image_url) => {
  const response = await fetch("/api/requests/new-request", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ 
      title, 
      details, 
      references,
      urgency,
      date, 
      commission_id,
      price,  
      user_id,
      buyer_id,
      image_url,
    })
  });

  return await response.json();
}

export const getRequestsById = async(id) => {
  const response = await fetch(`/api/requests/${id}/request`)

return await response.json()
}