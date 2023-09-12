export function formatPrice(priceToFormat: number) {
  let price = priceToFormat

  // @TODO: perhaps change this to if(!price) return 0
  if (!price) return "0,00 €"

  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price)
  return formattedPrice
}
