export function moneyFormat(priceCents){
  const priceString = `$ ${( priceCents / 100 ).toFixed(2)}`;
  return priceString;
}
