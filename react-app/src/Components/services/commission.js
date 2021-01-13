export const getCommissions = async () => {
  const response = await fetch("/api/commissions/")
  return await response.json();
} 