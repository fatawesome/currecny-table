import React, {useEffect, useState} from "react";
import Table from "./Table";

const CurrenciesTable = () => {
  let [currencyData, setCurrencyData] = useState({});

  useEffect(() => {
    console.log('Use effect');
    fetch('https://api.exchangeratesapi.io/latest')
      .then((res) => {
        res.json().then((data) => {
          setCurrencyData(prepareCurrencyData(data));
        });
      })
      .catch((err) => {
        throw new Error(err);
      })
  }, [])

  return (
    <React.Fragment>
      <h3>Base: {currencyData.base}</h3>
      <p>{currencyData.date}</p>

      {currencyData.tableData &&
        <Table tableData={currencyData.tableData} />
      }
    </React.Fragment>
  )
}

function prepareCurrencyData(data) {
  let currencyData = {}

  currencyData.base = data.base;
  currencyData.date = data.date;
  currencyData.tableData = {
    headData: Object.keys(data.rates),
    rowsData: [Object.values(data.rates)]
  }

  return currencyData;
}

export default CurrenciesTable;
