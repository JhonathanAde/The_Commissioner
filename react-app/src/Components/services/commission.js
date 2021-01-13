export const getCommissions = async () => {
  const response = await fetch("/api/commissions/")
  return await response.json();
} 

export const createCommission = async (title, description, image, requests, price, date, userId) => {
  const response = await fetch("/api/commissions/new", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ 
      title, 
      description, 
      image, 
      requests, 
      price, 
      date,
      userId,
    })
  });

  return await response.json();
}