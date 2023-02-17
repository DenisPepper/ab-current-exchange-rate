export const rubToUsd = (amount, rate) =>
    Number((amount / rate).toFixed(2));

export const usdToRub = (amount, rate) => {
    return amount < 0 ? 0 : Number((amount * rate).toFixed(2));
}

