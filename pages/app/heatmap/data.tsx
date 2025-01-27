import React , { useState, useEffect } from 'react'
const Data = () => {
    const [data, setData] = useState({
      date: '',
      grossProfit: {
        value: 0,
        percentageChange: 0,
      },
      netCap: 0,
      tradeVol: 0,
      tokens: [
        {
          name: 'STAR TOKEN',
          symbol: '',
          profit: {
            value: 0,
            percentageChange: 0,
          },
          initialCap: 0,
          profitPercentage: 0,
        },
      ],
    });

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('');
          const jsonData = await response.json();
          setData(jsonData); 
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []); 
  
    return (
      <div>
        <div className="text-[#ADADAD]">
          <p className="text-sm">
            <span className="text-white font-semibold">DATE</span>: {data.date}
          </p>
        </div>
  
        <div className="text-[#ADADAD] flex flex-row gap-x-1">
          <div className="text-sm flex flex-col w-3/6">
            <h1 className="text-white font-semibold">GROSS PROFIT</h1>
            {`$${data.grossProfit.value.toFixed(2)}`}
            <span className={`text-${data.grossProfit.percentageChange > 0 ? 'green' : 'red'}-500`}>
              {`(${data.grossProfit.percentageChange.toFixed(2)}%)`}
            </span>
          </div>
          <div className="text-sm flex flex-col w-2/6">
            <div className="text-white font-semibold">NET CAP</div>
            {`$${data.netCap.toFixed(2)}`}
          </div>
          <div className="text-sm flex flex-col w-2/6">
            <span className="text-white font-semibold">TRADE VOL</span>
            {`$${data.tradeVol.toFixed(2)}`}
          </div>
        </div>
  
        {data.tokens.map((token) => (
          <div className="space-y-2 text-[#ADADAD] flex flex-col gap-x-1" key={token.name}>
            <div className="text-sm flex flex-row gap-3">
              <h1 className="text-white font-semibold">{token.name}</h1>
              <span>{token.symbol}</span>
            </div>
            <div className="flex flex-row">
              <div className="text-sm flex flex-col ">
                <h1 className="text-white font-semibold">PROFIT</h1>
                {`$${token.profit.value.toFixed(2)}`}
                <span className={`text-${token.profit.percentageChange > 0 ? 'green' : 'red'}-500`}>
                  {`(${token.profit.percentageChange.toFixed(2)}%)`}
                </span>
              </div>
              <p className="text-sm flex flex-col w-2/6">
                <span className="text-white font-semibold">INITIAL CAP</span>
                {`$${token.initialCap.toFixed(2)}`}
              </p>
              <p className="text-xs flex flex-col w-2/6">
                <span className="text-white font-semibold">PROFIT %</span>
                {`${token.profitPercentage.toFixed(2)}%`}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Data;