export const formatCurrency = (price: number) => {
  return price.toLocaleString("ko-KR", {
    style: "currency",
    currency: "KRW",
  });
};
