export const getCommissions = async () => {
  const response = await fetch("/api/commissions/")
  return await response.json();
} 

export const createCommission = async (title, description, image, price, requests, date_created, duration, user_id) => {
  const response = await fetch("/api/commissions/new", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ 
      title, 
      description, 
      image,
      price, 
      requests,
      date_created,  
      duration,
      user_id,
    })
  });

  return await response.json();
}