console.log("Script loaded.");

const url = 'https://wavescap.com/api/asset/WAVES.json';

  async function getData() {

      const response = await fetch(url);
      const data = await response.json();
      
      document.getElementById('price_usd').textContent = (Math.round((data.data['lastPrice_usd-n']) * 100) / 100).toFixed(2) + ' USD';
      document.getElementById('price_gbp').textContent = (Math.round((data.data.lastPrice_gbpn) * 100) / 100).toFixed(2) + ' GBP';
      document.getElementById('price_eur').textContent = (Math.round((data.data.lastPrice_eurn) * 100) / 100).toFixed(2) + ' EUR';
      document.getElementById('waves_desc').textContent = data.desc;

    }
  getData();