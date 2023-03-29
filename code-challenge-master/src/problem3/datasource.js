async function fetchPrices() {
    const url = 'https://interview.switcheo.com/test.json';

    
    const response = await fetch(url);
    //Extract json data from response
    const data = await response.json();
  
    //Json Data look like
    // data: {
    //     prices: [
    //       [Object], [Object],
    //       [Object], [Object],
    //       [Object], [Object],
    //       [Object], [Object]
    //     ]
    //   }

    //calculate mid prices
    const midPrices = data.data.prices.map((price) => {
      const midPrice = ((price.buy + price.sell) / 2)/100;
      const quoteCurrency = price.pair.slice(-3);
      return `Mid price for ${price.pair} is ${midPrice} ${quoteCurrency}.`;
    });
    //print out mid price for each trade pair
    midPrices.forEach((midPrice) => console.log(midPrice));
  }
  
  fetchPrices();