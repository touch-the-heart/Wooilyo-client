export const formatCurrency = (price: number) => {
  //   return price.toLocaleString("ko-KR", {
  //     style: "currency",
  //     currency: "KRW",
  //   });
  return price.toLocaleString("ko-KR"); // 통화 기호 제거
};
