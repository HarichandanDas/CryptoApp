fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  )
    .then((data) => {
      return data.json();
    })
    .then((objectData) => {
      console.log(objectData);
      let tableData = "";
      objectData.map((values) => {
        let val;
        values.price_change_percentage_24h > 0 ? (val = "green") : (val = "red");
        tableData += ` <tr>
          <td><img src="${values.image}"></td>
          <td>${values.name}</td>
          <td>${values.symbol}</td>
          <td>$${values.current_price}</td>
          <td>$${values.total_volume}</td>
          <td class="${val}">
          ${values.price_change_percentage_24h}</td>
          <td>Mkt Cap: $${values.market_cap}</td>
        </tr>`;
      });
      document.getElementById("table_body").innerHTML = tableData;
    });
  