# 🚀 Crypto Tracker App

A React.js cryptocurrency tracker application powered by the [CoinGecko API](https://www.coingecko.com/en/api).  
It provides **real-time data** on top cryptocurrencies, price history with charts, exchange details, and more.  

---

## 📧 Author
- **Name:** Bello Mubaraq Adeyemi  
- **Email:** [bellomubaraq875@gmail.com](mailto:bellomubaraq875@gmail.com)  
- **GitHub:** [Bellomubaraq875](https://github.com/Bellomubaraq875)

---

## ✨ Features
- 🔥 **Top cryptocurrencies** with live prices and market caps.  
- 📈 **Interactive Line Charts** of historical price data (using Chart.js).  
- 🏦 **Exchanges list** with trust scores, trade volume, and links.  
- 🌍 **Coin details** with supply, volume, ATH, and description.  
- ⚡ Built with **React, Redux Toolkit, Ant Design, and react-chartjs-2**.  

---

## 🛠️ Tech Stack
- **Frontend:** React, Redux Toolkit, Ant Design  
- **Charts:** react-chartjs-2, Chart.js  
- **API:** CoinGecko  
- **Styling:** CSS & Ant Design components  

---

## 📦 Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/Bellomubaraq875/crypto-tracker.git
   cd crypto-tracker
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

---

## ⚙️ Project Structure

```
src/
 ┣ Components/
 ┃ ┣ LineChart.jsx        # Crypto price chart
 ┃ ┣ Exchanges.jsx        # Exchanges list
 ┃ ┣ Loader.jsx           # Loading spinner
 ┃ ┗ CryptoDetails.jsx    # Detailed coin info
 ┣ Services/
 ┃ ┗ coinGeckoApi.js      # CoinGecko API services
 ┣ App/
 ┃ ┣ store.js             # Redux store config
 ┣ chartConfig.js         # Chart.js config setup
 ┣ main.jsx               # React entry point
 ┗ App.jsx                # App routes
```

---

## 🔗 API References

This project uses the free **CoinGecko API** endpoints:

* `/coins/markets` → Top cryptocurrencies
* `/coins/{id}` → Coin details
* `/coins/{id}/market_chart` → Historical chart data
* `/exchanges` → Exchange list

---

## 🚀 Future Improvements

* Add authentication and user
* Global search for any cryptocurrency
* Mobile responsive redesign

---

## 📝 License

This project is licensed under the MIT License.
Feel free to fork and customize.

