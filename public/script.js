console.log("Script loaded.");

const url = 'https://wavescap.com/api/asset/WAVES.json';

  async function getData() {

      const response = await fetch(url);
      const data = await response.json();
      
      document.getElementById('total_cap').textContent = (Math.round((data.data['lastPrice_usd-n']) * 100) / 100).toFixed(2) + ' USD';
      document.getElementById('assets_cap').textContent = (Math.round((data.data.lastPrice_gbpn) * 100) / 100).toFixed(2) + ' GBP';
      document.getElementById('gateways_cap').textContent = (Math.round((data.data.lastPrice_eurn) * 100) / 100).toFixed(2) + ' EUR';
      document.getElementById('waves_desc').textContent = data.desc;

    }
  getData();