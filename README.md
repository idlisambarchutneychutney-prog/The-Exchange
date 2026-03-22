# THE EXCHANGE
### A browser-based stock market simulator. Buy. Sell. Repeat.
---

## What is this?

The Exchange is a real-time stock market simulator that runs entirely in the browser — no backend, no libraries, no build step. You get $100 in fake cash and 15 fictional companies to trade, a live price engine, a news system that actually moves markets, and a full portfolio tracker. It looks like a Bloomberg terminal if Bloomberg terminals had meme stocks and a glitch effect on the bankruptcy screen.

---

## Features

- **15 tradable stocks** across sectors like TECH, CRYPTO, PHARMA, FOOD, and MOBILITY — including DOGE2, OOPS Cybersecurity, and KFCoin Delivery Network
- **Live price engine** with noise, trend drift, mean reversion, and buyer/seller pressure — prices move every 850ms
- **News events** fire every few seconds with real price impact (positive news pumps buyers, negative news tanks them)
- **Order flow panel** showing live buyer vs seller pressure per stock
- **Full portfolio tracker** with unrealized P&L, realized P&L, average cost basis, and allocation bars
- **Trade log** tracking every buy and sell with P&L on close
- **Account stats** — win rate, best trade, worst trade, total volume, bull/bear trader status
- **Bankruptcy screen** with a glitch animation (you'll see it)
- **Keyboard shortcuts** for fast trading
- **CRT scanline effect** because why not
- Zero dependencies. One HTML file, one CSS file, one JS file.

---

## Getting Started

No install. No npm. Just open the file.

```bash
git clone https://github.com/yourusername/the-exchange.git
cd the-exchange
open index.html
```

Or just drag `index.html` into your browser.

---

## How to Play

1. Enter a trader name, email, and password on the login screen
2. You start with **$100.00** in liquid cash
3. Select a stock from the left panel, set your quantity, and hit **EXECUTE BUY ORDER**
4. Watch the news feed on the right — events move prices significantly
5. Sell before you go bankrupt

**Keyboard shortcuts:**
| Key | Action |
|-----|--------|
| `B` | Switch to Buy mode |
| `S` | Switch to Sell mode |
| `Enter` | Execute trade |
| `↑ / ↓` | Adjust quantity by 1 |
| `1` | Market tab |
| `2` | Portfolio tab |
| `3` | Account tab |

---

## The Stocks

| Symbol | Company | Sector |
|--------|---------|--------|
| MEME | Memeify Technologies Ltd. | TECH |
| YOLO | YOLO Capital & Trading Co. | FINANCE |
| BRUH | Bruh Pharmaceuticals Inc. | PHARMA |
| FOMO | FOMOzon Prime Retail | RETAIL |
| HODL | Hodlium Blockchain Corp. | CRYPTO |
| KFCD | KFCoin Delivery Network | FOOD |
| BRRR | Brrr Fed Reserve Fanclub | FINANCE |
| SNEK | Snek Energy Drink Corp. | BEVERAGE |
| DOGE2 | Doge2: This Time Serious | CRYPTO |
| GOON | Goon Capital Management | FINANCE |
| NERD | Nerd Industries AI | TECH |
| ZZZZ | Zzzz Sleep Tech Solutions | HEALTH |
| BONK | Bonk! Electric Scooters | MOBILITY |
| SMOL | Smol Businesses United | RETAIL |
| OOPS | Oops Cybersecurity Ltd. | TECH |

---

## How the Price Engine Works

Each tick (850ms), every stock's price updates using:

```
price = price × (1 + noise + drift + mean_reversion + buyer_pressure)
```

- **Noise** — random volatility scaled per stock
- **Drift** — each stock has a long-term trend bias (positive or negative)
- **Mean reversion** — pulls price back toward its base so nothing goes to infinity
- **Buyer pressure** — derived from the live buyer/seller count ratio

News events apply a one-time price shock (4–25%) and shift the buyer/seller balance for several ticks afterward.

---

## File Structure

```
the-exchange/
├── index.html      # markup and layout
├── styles.css      # full theme, panels, animations
└── script.js       # price engine, news system, trading logic, rendering
```

---

## Known Issues / Rough Edges

- Price history resets on page refresh (no persistence — it's all in memory)
- The password field doesn't actually authenticate anything, it's purely cosmetic
- Mean reversion isn't perfect — very high-volatility stocks (DOGE2, HODL) can still drift pretty far
- Mobile layout is not supported

---

## Built With

- Vanilla JS (ES5-ish, lots of `var`)
- HTML Canvas for the price chart and sparklines
- IBM Plex Mono + Playfair Display from Google Fonts
- CSS animations for the CRT effect, ticker, glitch screen, and toasts
- One late night

---

## License

MIT — do whatever you want with it.
