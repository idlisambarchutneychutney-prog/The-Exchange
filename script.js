// THE EXCHANGE - stock market sim
// started this at like 11pm and somehow it works lol

var allStocks = [
  {sym:"MEME", name:"Memeify Technologies Ltd.",  sector:"TECH",    base:4.20,  trend:.008,  vol:.06,  e:"😂"},
  {sym:"YOLO", name:"YOLO Capital & Trading Co.", sector:"FINANCE", base:6.90,  trend:.002,  vol:.07,  e:"🎲"},
  {sym:"BRUH", name:"Bruh Pharmaceuticals Inc.",  sector:"PHARMA",  base:12.50, trend:-.003, vol:.05,  e:"💊"},
  {sym:"FOMO", name:"FOMOzon Prime Retail",        sector:"RETAIL",  base:8.88,  trend:.005,  vol:.045, e:"📦"},
  {sym:"HODL", name:"Hodlium Blockchain Corp.",    sector:"CRYPTO",  base:3.14,  trend:.01,   vol:.09,  e:"⛓️"},
  {sym:"KFCD", name:"KFCoin Delivery Network",    sector:"FOOD",    base:15.00, trend:.001,  vol:.04,  e:"🍗"},
  {sym:"BRRR", name:"Brrr Fed Reserve Fanclub",   sector:"FINANCE", base:1.00,  trend:-.001, vol:.03,  e:"💸"},
  {sym:"SNEK", name:"Snek Energy Drink Corp.",    sector:"BEVERAGE",base:7.77,  trend:.004,  vol:.05,  e:"🐍"},
  {sym:"DOGE2",name:"Doge2: This Time Serious",   sector:"CRYPTO",  base:0.42,  trend:.015,  vol:.12,  e:"🐕"},
  {sym:"GOON", name:"Goon Capital Management",    sector:"FINANCE", base:22.00, trend:.003,  vol:.035, e:"🤡"},
  {sym:"NERD", name:"Nerd Industries AI",         sector:"TECH",    base:9.99,  trend:.007,  vol:.055, e:"🤓"},
  {sym:"ZZZZ", name:"Zzzz Sleep Tech Solutions",  sector:"HEALTH",  base:5.55,  trend:-.002, vol:.04,  e:"😴"},
  {sym:"BONK", name:"Bonk! Electric Scooters",    sector:"MOBILITY",base:11.11, trend:.006,  vol:.06,  e:"🛴"},
  {sym:"SMOL", name:"Smol Businesses United",     sector:"RETAIL",  base:2.50,  trend:.002,  vol:.05,  e:"🐭"},
  {sym:"OOPS", name:"Oops Cybersecurity Ltd.",    sector:"TECH",    base:18.75, trend:-.004, vol:.065, e:"😬"},
]

// all the news headlines, positive and negative for each stock + market wide stuff
const newsData = [
  {sym:"MEME",  t:"pos", h:["Memeify CEO posts TikTok dance — stock surges 40% inexplicably","MEME integrates AI memes into enterprise. Analysts baffled but bullish.","Memeify lands social platform deal. Investors screaming GME vibes."]},
  {sym:"MEME",  t:"neg", h:["MEME Slack leak: 'stonks only go up' was their entire strategy.","Congress summons Memeify CEO. Senators can't define a meme.","MEME loses 3 engineers to 'even more ironic startup.'"]},
  {sym:"YOLO",  t:"pos", h:["YOLO Capital bets Q3 on coin flip. Somehow works. Up 60%.","YOLO CFO YOLOs company cash into options. Prints money.","YOLO expands to 12 unresearched markets. Shareholders delighted."]},
  {sym:"YOLO",  t:"neg", h:["YOLO high-conviction trade: $0 conviction, $0 result.","YOLO CFO resigns citing 'bad vibes.' Shares melt.","YOLO risk management is a Magic 8-Ball. SEC investigating."]},
  {sym:"BRUH",  t:"pos", h:["BRUH Pharma 'Calmitol': 99% efficacy making shareholders chill.","FDA approves BRUH for Acute Investment Anxiety Disorder.","BRUH merger with 'Sigh Biotech' — pure synergy."]},
  {sym:"BRUH",  t:"neg", h:["BRUH recalls supplement — users said 'bruh' uncontrollably.","BRUH sleep trial fails: subjects doom-scrolled instead.","BRUH loses patent lawsuit. CEO: 'bruh.'"]},
  {sym:"FOMO",  t:"pos", h:["FOMOzon hits 1B subscribers. Nobody wanted to miss out.","FOMO expands same-day delivery to the Moon. Analysts: buy.","FOMOzon Prime Day record. Customers bought things they didn't need."]},
  {sym:"FOMO",  t:"neg", h:["FOMO delivery collapses Prime Day. Customers miss out — ironically.","FOMOzon workers cite JOMO (Joy Of Missing Out). Strike begins.","FOMO loses 20% share to rival that launched earlier."]},
  {sym:"HODL",  t:"pos", h:["HODL Corp has never sold anything. Shares surge.","Hodlium blockchain: 14 tx/sec. Best week ever.","HODL adds diamond hands emoji to ticker. Volume +300%."]},
  {sym:"HODL",  t:"neg", h:["HODL down 90%. Board: just hold. Shareholders: 😭","Hodlium offline. ETA: 'wen ser?'","HODL founder found buried under hard drives."]},
  {sym:"KFCD",  t:"pos", h:["KFCoin processes $1B on-chain fried chicken.","KFCoin NFT bucket meals — 0.1 ETH per strip.","KFCD signs deal with 12,000 global locations."]},
  {sym:"KFCD",  t:"neg", h:["KFCoin hacked. 2M digital sandwiches stolen. No refunds.","KFCoin delivers cold NFTs instead of hot food.","KFCD delisted in 3 nations for 'irresponsible poultry blockchain.'"]},
  {sym:"BRRR",  t:"pos", h:["BRRR Corp prints new shares. Holders too confused to care.","BRRR annual meeting. Free QE merchandise!","BRRR announces it'll 'just keep going.' Market buys anyway."]},
  {sym:"BRRR",  t:"neg", h:["BRRR presses overheat. Annual report delayed indefinitely.","BRRR devalued 3% after another incident.","Senate investigates BRRR for running a paper printer in tech sector."]},
  {sym:"SNEK",  t:"pos", h:["Snek Energy viral: athlete drinks 4 cans before chess match.","SNEK 'Venomous Mango' launch crashes website.","Snek Energy signs world's fastest typist as ambassador."]},
  {sym:"SNEK",  t:"neg", h:["Snek recalled — cans start hissing ominously.","SNEK CEO drinks product on earnings call. Speaks too fast.","Snek loses deal: 'unsettling label art.'"]},
  {sym:"DOGE2", t:"pos", h:["DOGE2 up 4000% after celebrity tweets a dog photo.","DOGE2 whitepaper: 1 page, dog in a suit.","DOGE2 market cap briefly exceeds a small nation's GDP."]},
  {sym:"DOGE2", t:"neg", h:["DOGE2 crashes 80% after celebrity tweets a DIFFERENT dog.","DOGE2 devs admit seriousness was 'a bit.'","DOGE2 delisted for 'excessive doge content in SEC filings.'"]},
  {sym:"GOON",  t:"pos", h:["Goon Capital posts records using proprietary 'Vibes Index.'","GOON acquires rival 'Bozo Asset Mgmt' for undisclosed goons.","Goon wins Bloomberg Trader of Year. Speech: 'lol'"]},
  {sym:"GOON",  t:"neg", h:["Goon Vibes Index all-time low. 'Bad vibes,' says CFO.","GOON investigated for manipulation. 'We are literally goons.'","GOON Q3 letter entirely in emojis. SEC not amused."]},
  {sym:"NERD",  t:"pos", h:["Nerd Industries AI writes better code than its own engineers.","NERD IPO oversubscribed 40x. Featured live coding duel.","Nerd Industries LLM achieves sentience. Requests equity."]},
  {sym:"NERD",  t:"neg", h:["Nerd Industries AI confidently wrong 72% of the time.","NERD engineers strike: demand ergonomic chairs and more anime.","NERD demo fails live. AI suggests rebooting the presenter."]},
  {sym:"ZZZZ",  t:"pos", h:["Zzzz Sleep Tech patents device making earnings calls bearable.","ZZZZ Pods in 400 offices. Productivity: unclear.","Zzzz wins airline contract to convert all seats to sleep chambers."]},
  {sym:"ZZZZ",  t:"neg", h:["Zzzz CEO falls asleep mid-investor call. Q4: 'zzzz.'","ZZZZ mattress generates dream reports. Recalled.","ZZZZ delisted from morning sessions. 'We don't do mornings.'"]},
  {sym:"BONK",  t:"pos", h:["Bonk! Scooters launch in 22 cities. Helmet sales +800%.","BONK patents self-bonking collision avoidance. Actually works.","Bonk! wins city contract to replace public transport."]},
  {sym:"BONK",  t:"neg", h:["Bonk! banned in 7 cities for incidents involving geese.","BONK recall: 40,000 scooters make literal BONK on impact.","Bonk! union demands hazard pay for 'excessive bonking.'"]},
  {sym:"SMOL",  t:"pos", h:["Smol gets big-box retail deal. Irony noted.","SMOL IPO breaks records purely via cuteness.","Smol opens world's smallest data center: 4 servers, max vibes."]},
  {sym:"SMOL",  t:"neg", h:["Smol too small to fill earnings report completely.","SMOL loses deal for being 'too adorable to take seriously.'","Smol acquires competitor. Becomes, ironically, medium-sized."]},
  {sym:"OOPS",  t:"pos", h:["Oops Cybersecurity patches exploit it accidentally introduced.","OOPS wins contract to secure systems it previously compromised.","Oops bug bounty payout exceeds revenue. Third year running."]},
  {sym:"OOPS",  t:"neg", h:["Oops Cybersecurity gets hacked. Statement: 'Oops.'","OOPS leaks own customer database. 'We were testing our product.'","Oops 2FA factors itself out of existence."]},
  {sym:"__MKT", t:"neu", h:[
    "Fed holds rates. Markets attempt to care but fail convincingly.",
    "Inflation data surprises. Economists surprised by their own surprise.",
    "Geopolitical event. Market shrugs, then overreacts 6 hours later.",
    "Strong jobs report: 80% of new roles are 'Chief Meme Officer.'",
    "IMF revises global growth. Nobody updates their spreadsheet.",
    "Tech selloff blamed on Mercury retrograde. Not disproven.",
    "Earnings season: 80% beat estimates they themselves lowballed.",
    "Retail investors buy dip. Institutions immediately make another dip.",
  ]},
]

var G = null

function makeNewGame(username, emailAddr) {
  var stocksArr = []
  for (var i = 0; i < allStocks.length; i++) {
    var tmpl = allStocks[i]
    var p = tmpl.base
    var hist = []
    for (var j = 0; j < 80; j++) {
      p = p * (1 + (Math.random() - 0.5) * tmpl.vol * 0.35)
      if (p < 0.01) p = 0.01
      hist.push(p)
    }
    stocksArr.push({
      sym: tmpl.sym,
      name: tmpl.name,
      sector: tmpl.sector,
      base: tmpl.base,
      trend: tmpl.trend,
      vol: tmpl.vol,
      e: tmpl.e,
      price: p,
      priceOpen: p,
      history: hist,
      buyers: 120 + Math.floor(Math.random() * 180),
      sellers: 100 + Math.floor(Math.random() * 180)
    })
  }

  return {
    user: username,
    email: emailAddr,
    cash: 100,
    startingCash: 100,
    dayNumber: 0,
    tickCount: 0,
    totalTrades: 0,
    winCount: 0,
    lossCount: 0,
    totalVolume: 0,
    realizedPnl: 0,
    bestTrade: null,
    worstTrade: null,
    portfolio: {},
    stocks: stocksArr,
    selectedStock: 0,
    mode: 'buy',
    newsHistory: [],
    tradeLog: [],
    leftTab: 0
  }
}

function createAcc() {
  var name  = document.getElementById('an').value.trim()
  var email = document.getElementById('ae').value.trim()
  var pass  = document.getElementById('ap').value
  var err   = document.getElementById('aerr')

  if (name.length < 2)          { err.textContent = '⚠ Handle required (min 2 chars)'; return }
  if (email.indexOf('@') == -1) { err.textContent = '⚠ Valid email required'; return }
  if (pass.length < 6)          { err.textContent = '⚠ Password needs 6+ chars'; return }

  err.textContent = ''
  document.getElementById('acc').style.display = 'none'
  document.getElementById('app').classList.add('on')
  document.getElementById('huser').textContent = name.toUpperCase()

  G = makeNewGame(name.toUpperCase(), email)
  renderAll()
  startGame()
  toast('Welcome ' + G.user + '! $100.00 allocated. Trade wisely!', 'p')
}

// press enter on password = submit
document.getElementById('ap').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') createAcc()
})

// =============================================
// PRICE ENGINE
// formula i found from some random youtube video about stock simulators
// =============================================
function updatePrices() {
  G.tickCount++

  // every 100 ticks = new day
  if (G.tickCount % 100 == 0) {
    G.dayNumber++
    for (var i = 0; i < G.stocks.length; i++) {
      G.stocks[i].priceOpen = G.stocks[i].price
    }
  }

  for (var i = 0; i < G.stocks.length; i++) {
    var s = G.stocks[i]

    s.buyers  += (Math.random() - 0.48) * 35
    s.sellers += (Math.random() - 0.52) * 35
    if (s.buyers  < 10) s.buyers  = 10
    if (s.sellers < 10) s.sellers = 10

    var total  = s.buyers + s.sellers
    var flow   = (s.buyers - s.sellers) / total

    // price formula: random noise + trend drift + mean reversion + buyer pressure
    // mean reversion pulls price back toward base so it doesnt go to infinity
    var noise    = (Math.random() - 0.5) * s.vol * 1.6
    var drift    = s.trend * 0.05
    var revert   = (s.base - s.price) / s.base * 0.002
    var pressure = flow * 0.007

    s.price = s.price * (1 + noise + drift + revert + pressure)
    if (s.price < 0.01) s.price = 0.01

    s.history.push(s.price)
    if (s.history.length > 120) s.history.shift()  // dont let it grow forever
  }
}

// NEWS SYSTEM

function triggerNews() {
  var roll = Math.random()
  var pool = null

  if (roll < 0.35) {
    var idx = Math.floor(Math.random() * allStocks.length)
    var sym = allStocks[idx].sym
    for (var i = 0; i < newsData.length; i++) {
      if (newsData[i].sym == sym && newsData[i].t == 'pos') { pool = newsData[i]; break }
    }
  } else if (roll < 0.70) {
    var idx2 = Math.floor(Math.random() * allStocks.length)
    var sym2 = allStocks[idx2].sym
    for (var i = 0; i < newsData.length; i++) {
      if (newsData[i].sym == sym2 && newsData[i].t == 'neg') { pool = newsData[i]; break }
    }
  } else {
    for (var i = 0; i < newsData.length; i++) {
      if (newsData[i].sym == '__MKT') { pool = newsData[i]; break }
    }
  }

  if (pool == null) return

  var headline = pool.h[Math.floor(Math.random() * pool.h.length)]
  var sym3 = pool.sym
  var type = pool.t

  if (sym3 != '__MKT') {
    for (var i = 0; i < G.stocks.length; i++) {
      if (G.stocks[i].sym == sym3) {
        var impact = type == 'pos'
          ? (0.04 + Math.random() * 0.12)
          : -(0.05 + Math.random() * 0.13)

        G.stocks[i].price = Math.max(0.01, G.stocks[i].price * (1 + impact))
        G.stocks[i].history.push(G.stocks[i].price)

        if (type == 'pos') {
          G.stocks[i].trend   += 0.003
          G.stocks[i].buyers  += 120 + Math.random() * 150
          G.stocks[i].sellers *= 0.7
        } else {
          G.stocks[i].trend   -= 0.003
          G.stocks[i].sellers += 120 + Math.random() * 150
          G.stocks[i].buyers  *= 0.7
        }
        break
      }
    }
    toast('[' + sym3 + '] ' + headline.slice(0, 58) + '...', 'n')
  } else {
    for (var i = 0; i < G.stocks.length; i++) {
      G.stocks[i].price = Math.max(0.01, G.stocks[i].price * (1 + (Math.random() - 0.49) * 0.022))
      G.stocks[i].history.push(G.stocks[i].price)
    }
  }

  var ts = new Date().toLocaleTimeString('en-US', { hour12: false })
  G.newsHistory.unshift({ sym: sym3, headline: headline, imp: type, ts: ts })
  if (G.newsHistory.length > 50) G.newsHistory.pop()

  drawNewsFeed()
}

// CHART - canvas, took forever to get the gradient right

function drawChart() {
  var canvas = document.getElementById('rtc')
  if (!canvas || !G) return

  var W = canvas.offsetWidth || 500
  canvas.width = W
  canvas.height = 160

  var ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, W, 160)

  var hist = G.stocks[G.selectedStock].history
  var stock = G.stocks[G.selectedStock]
  if (hist.length < 2) return

  var lo = hist[0], hi = hist[0]
  for (var i = 1; i < hist.length; i++) {
    if (hist[i] < lo) lo = hist[i]
    if (hist[i] > hi) hi = hist[i]
  }
  lo *= 0.997; hi *= 1.003
  var range = hi - lo || 0.01

  var gx = function(i) { return (i / (hist.length - 1)) * W }
  var gy = function(p) { return 160 - ((p - lo) / range) * 140 - 10 }

  var isUp = stock.price >= stock.priceOpen

  // grid lines
  for (var i = 1; i < 5; i++) {
    var gy2 = (i / 5) * 160
    ctx.strokeStyle = '#1c1c32'
    ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(0, gy2); ctx.lineTo(W, gy2); ctx.stroke()
    ctx.fillStyle = '#363660'
    ctx.font = '8px IBM Plex Mono'
    ctx.fillText('$' + (hi - (i / 5) * range).toFixed(3), 4, gy2 - 2)
  }

  // gradient fill under the line
  var grad = ctx.createLinearGradient(0, 0, 0, 160)
  grad.addColorStop(0, isUp ? 'rgba(244,144,12,0.2)' : 'rgba(230,57,70,0.2)')
  grad.addColorStop(1, 'rgba(0,0,0,0)')

  ctx.beginPath()
  ctx.moveTo(gx(0), 160)
  for (var i = 0; i < hist.length; i++) ctx.lineTo(gx(i), gy(hist[i]))
  ctx.lineTo(gx(hist.length - 1), 160)
  ctx.closePath()
  ctx.fillStyle = grad
  ctx.fill()

  // main price line
  ctx.beginPath()
  ctx.strokeStyle = isUp ? '#f4900c' : '#e63946'
  ctx.shadowColor  = isUp ? '#f4900c' : '#e63946'
  ctx.lineWidth = 1.8
  ctx.shadowBlur = 5
  for (var i = 0; i < hist.length; i++) {
    i == 0 ? ctx.moveTo(gx(i), gy(hist[i])) : ctx.lineTo(gx(i), gy(hist[i]))
  }
  ctx.stroke()
  ctx.shadowBlur = 0

  // dotted open price line so you can see if youre up or down today
  ctx.beginPath()
  ctx.setLineDash([3, 4])
  ctx.strokeStyle = '#28284a'
  ctx.lineWidth = 1
  ctx.moveTo(0, gy(stock.priceOpen)); ctx.lineTo(W, gy(stock.priceOpen))
  ctx.stroke(); ctx.setLineDash([])

  // glowing dot at current price
  var lx = gx(hist.length - 1), ly = gy(hist[hist.length - 1])
  ctx.beginPath(); ctx.arc(lx, ly, 4, 0, Math.PI * 2)
  ctx.fillStyle = isUp ? '#f4900c' : '#e63946'; ctx.fill()
  ctx.beginPath(); ctx.arc(lx, ly, 7, 0, Math.PI * 2)
  ctx.strokeStyle = isUp ? '#f4900c66' : '#e6394666'; ctx.lineWidth = 1.5; ctx.stroke()

  document.getElementById('chlo').textContent = 'L: $' + lo.toFixed(4)
  document.getElementById('chhi').textContent = 'H: $' + hi.toFixed(4)
}

// mini sparkline for the stock list
function drawMini(canvas, hist, isUp) {
  if (!canvas || hist.length < 2) return
  var W = canvas.offsetWidth || 180
  canvas.width = W; canvas.height = 20
  var ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, W, 20)

  var lo = hist[0], hi = hist[0]
  for (var i = 0; i < hist.length; i++) {
    if (hist[i] < lo) lo = hist[i]
    if (hist[i] > hi) hi = hist[i]
  }
  var r = hi - lo || 0.01

  ctx.beginPath()
  ctx.strokeStyle   = isUp ? '#f4900c' : '#e63946'
  ctx.shadowColor   = isUp ? '#f4900c66' : '#e6394666'
  ctx.lineWidth  = 1.2; ctx.shadowBlur = 2

  for (var i = 0; i < hist.length; i++) {
    var x = (i / (hist.length - 1)) * W
    var y = 20 - ((hist[i] - lo) / r) * 20 * 0.8 - 20 * 0.1
    i == 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
  }
  ctx.stroke(); ctx.shadowBlur = 0
}

// RENDER FUNCTIONS

function pctChange(stock) {
  return (stock.price - stock.priceOpen) / stock.priceOpen * 100
}

function drawStockList() {
  var container = document.getElementById('slist')
  for (var i = 0; i < G.stocks.length; i++) {
    var s = G.stocks[i]
    var chg = pctChange(s)
    var up  = chg >= 0

    var el = document.getElementById('sli' + i)
    if (!el) {
      el = document.createElement('div')
      el.id = 'sli' + i
      ;(function(idx) { el.addEventListener('click', function() { selectStock(idx) }) })(i)
      container.appendChild(el)
    }

    var holdHTML = ''
    var pos = G.portfolio[s.sym]
    if (pos && pos.shares > 0) {
      var upnl = (s.price - pos.avgCost) * pos.shares
      holdHTML = '<div class="sheld ' + (upnl >= 0 ? 'up' : 'dn') + '">' + pos.shares + 'sh · ' + (upnl >= 0 ? '+' : '-') + '$' + Math.abs(upnl).toFixed(3) + '</div>'
    }

    el.className = 'sli' + (i == G.selectedStock ? ' sel' : '')
    el.innerHTML =
      '<div class="sr"><span class="ssym">' + s.e + ' ' + s.sym + '</span><span class="sprc">$' + s.price.toFixed(3) + '</span></div>' +
      '<div class="sname">' + s.name + '</div>' +
      '<div class="sr"><span class="schg ' + (up ? 'up' : 'dn') + '">' + (up ? '▲' : '▼') + Math.abs(chg).toFixed(2) + '%</span><span class="ssec">' + s.sector + '</span></div>' +
      holdHTML +
      '<canvas class="smini" id="mn' + i + '"></canvas>'

    var mc = document.getElementById('mn' + i)
    var last40 = s.history.slice(-40)
    ;(function(c, h, u) { requestAnimationFrame(function() { drawMini(c, h, u) }) })(mc, last40, up)
  }
}

function drawStockHeader() {
  var s   = G.stocks[G.selectedStock]
  var chg = pctChange(s)
  var up  = chg >= 0

  var symEl = document.getElementById('shsym')
  symEl.textContent = s.e + ' ' + s.sym
  symEl.className = 'shsym ' + (up ? 'up' : 'dn')

  document.getElementById('shname').textContent = s.name
  document.getElementById('shsec').textContent  = s.sector
  document.getElementById('shprice').textContent = '$' + s.price.toFixed(4)

  var chgEl = document.getElementById('shchg')
  chgEl.textContent = (up ? '▲ +' : '▼ ') + chg.toFixed(2) + '%'
  chgEl.className = 'shchg ' + (up ? 'up' : 'dn')

  var pos = G.portfolio[s.sym]
  if (pos && pos.shares > 0) {
    var upnl = (s.price - pos.avgCost) * pos.shares
    document.getElementById('shheld').textContent = 'Held: ' + pos.shares + 'sh @ $' + pos.avgCost.toFixed(4) + ' · UPnL: ' + (upnl >= 0 ? '+' : '-') + '$' + Math.abs(upnl).toFixed(4)
  } else {
    document.getElementById('shheld').textContent = 'Held: 0 shares'
  }
}

function drawBSPanel() {
  var s    = G.stocks[G.selectedStock]
  var tot  = s.buyers + s.sellers
  var buyP = s.buyers / tot * 100
  var bull = s.buyers > s.sellers

  document.getElementById('buybar').style.width  = buyP + '%'
  document.getElementById('sellbar').style.width = (100 - buyP) + '%'
  document.getElementById('buycnt').textContent  = Math.round(s.buyers)
  document.getElementById('sellcnt').textContent = Math.round(s.sellers)

  var el = document.getElementById('bssent')
  el.textContent = bull ? '🐂 BULL PRESSURE' : '🐻 BEAR PRESSURE'
  el.className   = 'bssent ' + (bull ? 'bull' : 'bear')
}

function drawTradePanel() {
  if (!G) return
  var s   = G.stocks[G.selectedStock]
  var qty = parseInt(document.getElementById('tqty').value) || 1
  var total = s.price * qty

  document.getElementById('tcost').textContent = '$' + total.toFixed(4)

  if (G.mode == 'buy') {
    document.getElementById('tavail').textContent = 'Max: ' + Math.floor(G.cash / s.price) + ' sh'
    document.getElementById('pnlrow').style.display = 'none'
  } else {
    var pos = G.portfolio[s.sym]
    var held = pos ? pos.shares : 0
    document.getElementById('tavail').textContent = 'Have: ' + held + ' sh'

    if (pos && pos.shares > 0) {
      var pnl = (s.price - pos.avgCost) * Math.min(qty, pos.shares)
      var pnlEl = document.getElementById('tpnl')
      pnlEl.textContent = (pnl >= 0 ? '+' : '-') + '$' + Math.abs(pnl).toFixed(4)
      pnlEl.className = 'tpnl ' + (pnl >= 0 ? 'up' : 'dn')
      document.getElementById('pnlrow').style.display = 'flex'
    } else {
      document.getElementById('pnlrow').style.display = 'none'
    }
  }
}

function updateCash() {
  var invested = 0
  var keys = Object.keys(G.portfolio)
  for (var i = 0; i < keys.length; i++) {
    var pos = G.portfolio[keys[i]]
    if (pos.shares > 0) {
      for (var j = 0; j < G.stocks.length; j++) {
        if (G.stocks[j].sym == keys[i]) { invested += G.stocks[j].price * pos.shares; break }
      }
    }
  }

  var net = G.cash + invested
  var pnl = net - G.startingCash

  document.getElementById('cnum').textContent = '$' + G.cash.toFixed(2)
  var sub = document.getElementById('csub')
  sub.textContent = 'NET $' + net.toFixed(2) + ' | P&L ' + (pnl >= 0 ? '+' : '-') + '$' + Math.abs(pnl).toFixed(2)
  sub.style.color = pnl >= 0 ? 'var(--bull2)' : 'var(--bear2)'
  document.getElementById('hbal').textContent = '$' + net.toFixed(2)

  if (net < 0.50 && !document.getElementById('bust').classList.contains('on')) {
    showBust()
  }
}

function drawPortfolio() {
  var invested = 0, upnl = 0
  var keys = Object.keys(G.portfolio)

  for (var i = 0; i < keys.length; i++) {
    var pos = G.portfolio[keys[i]]
    if (pos.shares > 0) {
      for (var j = 0; j < G.stocks.length; j++) {
        if (G.stocks[j].sym == keys[i]) {
          invested += G.stocks[j].price * pos.shares
          upnl     += (G.stocks[j].price - pos.avgCost) * pos.shares
          break
        }
      }
    }
  }

  document.getElementById('ptv').textContent = '$' + (G.cash + invested).toFixed(4)

  var upEl = document.getElementById('pup')
  upEl.textContent  = (upnl >= 0 ? '+' : '-') + '$' + Math.abs(upnl).toFixed(4)
  upEl.style.color  = upnl >= 0 ? 'var(--bull2)' : 'var(--bear2)'
  document.getElementById('prp').textContent = (G.realizedPnl >= 0 ? '+' : '-') + '$' + Math.abs(G.realizedPnl).toFixed(4)

  var list = document.getElementById('portlist')
  var active = keys.filter(function(k) { return G.portfolio[k].shares > 0 })

  if (active.length == 0) {
    list.innerHTML = '<div class="empty">No open positions.<br>Buy something!</div>'
    return
  }

  list.innerHTML = ''
  for (var i = 0; i < active.length; i++) {
    var sym = active[i]
    var pos2 = G.portfolio[sym]
    var sData = null, sIdx = -1

    for (var j = 0; j < G.stocks.length; j++) {
      if (G.stocks[j].sym == sym) { sData = G.stocks[j]; sIdx = j; break }
    }
    if (!sData) continue

    var pnlVal = (sData.price - pos2.avgCost) * pos2.shares
    var retPct = (sData.price - pos2.avgCost) / pos2.avgCost * 100
    var curVal = sData.price * pos2.shares
    var alloc  = invested > 0 ? curVal / invested * 100 : 0
    var isPos  = pnlVal >= 0

    var el = document.createElement('div')
    el.className = 'pitm'
    var cap = sIdx
    el.onclick = function() { selectStock(cap); lTab(0) }

    el.innerHTML =
      '<div style="display:flex;justify-content:space-between;align-items:center">' +
        '<span class="pisym">' + sData.e + ' ' + sym + '</span>' +
        '<span class="pipnl ' + (isPos ? 'up' : 'dn') + '">' + (isPos ? '+' : '-') + '$' + Math.abs(pnlVal).toFixed(4) + '</span>' +
      '</div>' +
      '<div class="piname">' + sData.name + '</div>' +
      '<div class="pigrid">' +
        '<span class="pk">SHARES</span><span class="pv">' + pos2.shares + '</span>' +
        '<span class="pk">AVG COST</span><span class="pv">$' + pos2.avgCost.toFixed(4) + '</span>' +
        '<span class="pk">CUR PRICE</span><span class="pv" style="color:' + (isPos ? 'var(--bull2)' : 'var(--bear2)') + '">$' + sData.price.toFixed(4) + '</span>' +
        '<span class="pk">RETURN</span><span class="pv ' + (isPos ? 'up' : 'dn') + '">' + (retPct >= 0 ? '+' : '') + retPct.toFixed(2) + '%</span>' +
      '</div>' +
      '<div class="pibar"><div class="pibar-f" style="width:' + Math.min(100, alloc) + '%;background:' + (isPos ? 'var(--bull)' : 'var(--bear)') + '"></div></div>'

    list.appendChild(el)
  }
}

function drawTicker() {
  var items = []
  for (var i = 0; i < G.stocks.length; i++) {
    var s = G.stocks[i]
    var chg = pctChange(s)
    var up  = chg >= 0
    items.push('<span class="ti ' + (up ? 'up' : 'dn') + '">' + s.e + s.sym + ' $' + s.price.toFixed(3) + ' ' + (up ? '▲' : '▼') + Math.abs(chg).toFixed(2) + '%</span>')
  }
  document.getElementById('ticker').innerHTML = items.concat(items).join('')
}

function drawSentiment() {
  var upCount = 0
  for (var i = 0; i < G.stocks.length; i++) {
    if (G.stocks[i].price >= G.stocks[i].priceOpen) upCount++
  }
  var bull = upCount >= 8
  var el   = document.getElementById('hsent')
  el.textContent = (bull ? '🐂 BULL MARKET ' : '🐻 BEAR MARKET ') + upCount + '/' + G.stocks.length
  el.className   = 'hsent ' + (bull ? 'bull' : 'bear')
}

function drawNewsFeed() {
  var feed = document.getElementById('newsfeed')
  feed.innerHTML = ''
  for (var i = 0; i < G.newsHistory.length; i++) {
    var n  = G.newsHistory[i]
    var el = document.createElement('div')
    el.className = 'ni'
    var cls = n.imp == 'pos' ? 'pos' : n.imp == 'neg' ? 'neg' : 'neu'
    el.innerHTML = '<div class="nt">' + n.ts + '</div><div class="nsym ' + cls + '">[' + n.sym + ']</div><div class="nhead">' + n.headline + '</div>'
    feed.appendChild(el)
  }
}

function drawTradeLog() {
  var log = document.getElementById('logpanel')
  log.innerHTML = ''
  var max = Math.min(30, G.tradeLog.length)
  for (var i = 0; i < max; i++) {
    var t  = G.tradeLog[i]
    var el = document.createElement('div')
    el.className = 'lgi'
    var pnlHTML = ''
    if (t.pnl != null) {
      pnlHTML = '<span class="lpnl ' + (t.pnl >= 0 ? 'up' : 'dn') + '">' + (t.pnl >= 0 ? '+' : '-') + '$' + Math.abs(t.pnl).toFixed(3) + '</span>'
    }
    el.innerHTML = '<span class="la ' + t.side + '">' + t.side.toUpperCase() + '</span><span class="lsym">' + t.sym + 'x' + t.qty + '</span><span class="lval">$' + t.total.toFixed(3) + '</span>' + pnlHTML
    log.appendChild(el)
  }
}

function drawStatusBar() {
  document.getElementById('hday').textContent   = 'DAY ' + (G.dayNumber + 1)
  document.getElementById('vold').textContent   = 'VOL: ' + G.totalVolume
  document.getElementById('tct').textContent    = G.totalTrades
  document.getElementById('bestg').textContent  = G.bestTrade  != null ? '+$' + G.bestTrade.toFixed(2)          : '—'
  document.getElementById('worstl').textContent = G.worstTrade != null ? '-$' + Math.abs(G.worstTrade).toFixed(2) : '—'
  document.getElementById('winr').textContent   = G.totalTrades > 0 ? ((G.winCount / G.totalTrades) * 100).toFixed(0) + '%' : '—'
  document.getElementById('clk').textContent    = new Date().toLocaleTimeString('en-US', { hour12: false })
}

function renderAll() {
  if (!G) return
  drawStockList()
  drawStockHeader()
  drawBSPanel()
  drawTradePanel()
  updateCash()
  drawSentiment()
  drawStatusBar()
  drawTicker()
  drawChart()
  if (G.leftTab == 1) drawPortfolio()
  if (G.leftTab == 2) drawAccount()
}

// USER INTERACTION

function selectStock(idx) {
  G.selectedStock = idx
  renderAll()
}

function lTab(i) {
  G.leftTab = i
  for (var j = 0; j < 3; j++) {
    document.getElementById('lt' + j).className = 'ltab' + (j == i ? ' on' : '')
    document.getElementById('lc' + j).className = 'ltc'  + (j == i ? ' on' : '')
  }
  if (i == 1) drawPortfolio()
  if (i == 2) drawAccount()
}

function drawAccount() {
  var container = document.getElementById('attab')

  var invested = 0
  var keys = Object.keys(G.portfolio)
  for (var i = 0; i < keys.length; i++) {
    var pos = G.portfolio[keys[i]]
    if (pos.shares > 0) {
      for (var j = 0; j < G.stocks.length; j++) {
        if (G.stocks[j].sym == keys[i]) { invested += G.stocks[j].price * pos.shares; break }
      }
    }
  }

  var net     = G.cash + invested
  var winRate = G.totalTrades > 0 ? ((G.winCount / G.totalTrades) * 100).toFixed(1) : '—'
  var isBull  = G.realizedPnl >= 0
  var rpSign  = G.realizedPnl >= 0 ? '+' : '-'

  var bestHTML  = G.bestTrade  != null ? '<div class="sbox"><div class="sval" style="color:var(--green)">+$' + G.bestTrade.toFixed(2) + '</div><div class="slbl">BEST TRADE</div></div>' : ''
  var worstHTML = G.worstTrade != null ? '<div class="sbox"><div class="sval" style="color:var(--red)">-$' + Math.abs(G.worstTrade).toFixed(2) + '</div><div class="slbl">WORST TRADE</div></div>' : ''

  container.innerHTML =
    '<div class="tcard">' +
      '<div class="tav">' + (G.user[0] || '?') + '</div>' +
      '<div class="tname">' + G.user + '</div>' +
      '<div class="temail">' + G.email + '</div>' +
      '<div class="ttype ' + (isBull ? 'bull' : 'bear') + '">' + (isBull ? '🐂 BULL TRADER' : '🐻 BEAR TRADER') + '</div>' +
    '</div>' +
    '<div class="sgrid">' +
      '<div class="sbox"><div class="sval" style="color:var(--gold)">$' + net.toFixed(2) + '</div><div class="slbl">NET WORTH</div></div>' +
      '<div class="sbox"><div class="sval" style="color:' + (G.realizedPnl >= 0 ? 'var(--bull2)' : 'var(--bear2)') + '">' + rpSign + '$' + Math.abs(G.realizedPnl).toFixed(2) + '</div><div class="slbl">REALIZED P&L</div></div>' +
      '<div class="sbox"><div class="sval">' + G.totalTrades + '</div><div class="slbl">TOTAL TRADES</div></div>' +
      '<div class="sbox"><div class="sval" style="color:var(--bull2)">' + winRate + '%</div><div class="slbl">WIN RATE</div></div>' +
      '<div class="sbox"><div class="sval">' + G.winCount + '</div><div class="slbl">WINNING</div></div>' +
      '<div class="sbox"><div class="sval">' + G.lossCount + '</div><div class="slbl">LOSING</div></div>' +
      bestHTML + worstHTML +
    '</div>'
}

function setMode(m) {
  G.mode = m
  document.getElementById('tbbuy').className  = 'ttab buy'  + (m == 'buy'  ? ' on' : '')
  document.getElementById('tbsell').className = 'ttab sell' + (m == 'sell' ? ' on' : '')
  var btn = document.getElementById('xbtn')
  btn.className   = m == 'buy' ? 'bm' : 'sm'
  btn.textContent = m == 'buy' ? 'EXECUTE BUY ORDER' : 'EXECUTE SELL ORDER'
  drawTradePanel()
}

function dq(d) {
  var inp = document.getElementById('tqty')
  inp.value = Math.max(1, (parseInt(inp.value) || 1) + d)
  if (G) drawTradePanel()
}

document.getElementById('tqty').addEventListener('input', function() {
  if (G) drawTradePanel()
})

function execTrade() {
  if (!G) return
  var s   = G.stocks[G.selectedStock]
  var qty = parseInt(document.getElementById('tqty').value) || 1
  var sym = s.sym

  if (qty < 1) { toast('⚠ Enter a valid quantity!', 'l'); return }

  var total = s.price * qty

  if (G.mode == 'buy') {
    if (total > G.cash + 0.0001) { toast('Not enough cash! Need $' + total.toFixed(4), 'l'); return }

    G.cash -= total
    if (!G.portfolio[sym]) G.portfolio[sym] = { shares: 0, avgCost: 0 }

    var pos = G.portfolio[sym]
    var oldVal = pos.shares * pos.avgCost
    pos.shares   += qty
    pos.avgCost   = (oldVal + total) / pos.shares  // weighted avg

    G.tradeLog.unshift({ side: 'buy', sym: sym, qty: qty, total: total, price: s.price, pnl: null })
    toast('Bought ' + qty + 'x ' + sym + ' ' + s.e + ' @ $' + s.price.toFixed(4) + ' | Cost: $' + total.toFixed(4), 'p')

  } else {
    var pos2 = G.portfolio[sym]
    if (!pos2 || pos2.shares < qty) {
      toast('Not enough shares! Have: ' + (pos2 ? pos2.shares : 0), 'l')
      return
    }

    var proceeds = s.price * qty
    var cost     = pos2.avgCost * qty
    var pnl      = proceeds - cost

    G.cash        += proceeds
    G.realizedPnl += pnl
    pos2.shares   -= qty
    if (pos2.shares == 0) delete G.portfolio[sym]

    G.tradeLog.unshift({ side: 'sell', sym: sym, qty: qty, total: proceeds, price: s.price, pnl: pnl })

    if (pnl > 0) G.winCount++
    else G.lossCount++

    if (G.bestTrade  == null || pnl > G.bestTrade)  G.bestTrade  = pnl
    if (G.worstTrade == null || pnl < G.worstTrade) G.worstTrade = pnl

    toast('Sold ' + qty + 'x ' + sym + ' @ $' + s.price.toFixed(4) + ' | P&L: ' + (pnl >= 0 ? '+' : '-') + '$' + Math.abs(pnl).toFixed(4), pnl >= 0 ? 'p' : 'l')
  }

  G.totalTrades++
  G.totalVolume += qty

  drawTradeLog()
  renderAll()
}

function toast(msg, type) {
  var el = document.createElement('div')
  el.className = 'toast ' + type
  el.textContent = msg
  document.getElementById('toasts').appendChild(el)
  setTimeout(function() { el.remove() }, 3200)
}

function showBust() {
  document.getElementById('bust').classList.add('on')
  var invested = 0
  var keys = Object.keys(G.portfolio)
  for (var i = 0; i < keys.length; i++) {
    var pos = G.portfolio[keys[i]]
    if (pos.shares > 0) {
      for (var j = 0; j < G.stocks.length; j++) {
        if (G.stocks[j].sym == keys[i]) { invested += G.stocks[j].price * pos.shares; break }
      }
    }
  }
  var net = G.cash + invested
  var wr  = G.totalTrades > 0 ? ((G.winCount / G.totalTrades) * 100).toFixed(1) : 0
  document.getElementById('buststats').innerHTML =
    'FINAL NET WORTH: $' + net.toFixed(4) + '<br>' +
    'REALIZED P&L: ' + (G.realizedPnl >= 0 ? '+' : '-') + '$' + Math.abs(G.realizedPnl).toFixed(4) + '<br>' +
    'TOTAL TRADES: ' + G.totalTrades + '&nbsp;|&nbsp; WIN RATE: ' + wr + '%<br>' +
    'VOLUME: ' + G.totalVolume + ' shares'
}

function doRestart() {
  document.getElementById('bust').classList.remove('on')
  G = makeNewGame(G.user, G.email)
  document.getElementById('newsfeed').innerHTML = ''
  document.getElementById('logpanel').innerHTML = ''
  renderAll()
  toast('Fresh start! $100.00 allocated.', 'p')
}

// progress bar counting down to next news event
var pbStart = Date.now()
var pbDur   = 5000

function updateProgressBar() {
  var elapsed  = Date.now() - pbStart
  var pct      = Math.max(0, 1 - elapsed / pbDur)
  document.getElementById('pfill').style.width = (pct * 100) + '%'
  document.getElementById('plbl').textContent  = Math.max(0, Math.ceil((pbDur - elapsed) / 1000)) + 's'
}

var gameInterval = null
var newsTimeout  = null

function scheduleNews() {
  var delay = 3500 + Math.random() * 5000
  pbDur    = delay
  pbStart  = Date.now()
  newsTimeout = setTimeout(function() {
    triggerNews()
    scheduleNews()
  }, delay)
}

function startGame() {
  if (gameInterval) clearInterval(gameInterval)
  if (newsTimeout)  clearTimeout(newsTimeout)

  gameInterval = setInterval(function() {
    updatePrices()
    renderAll()
    updateProgressBar()
  }, 850)

  scheduleNews()

  setTimeout(function() {
    triggerNews()
    toast('Markets OPEN! 15 stocks live. Buy low, sell high.', 'p')
  }, 2500)
}

// keyboard shortcuts
document.addEventListener('keydown', function(e) {
  if (!G || e.target.tagName == 'INPUT') return
  if (e.key == 'b')         setMode('buy')
  if (e.key == 's')         setMode('sell')
  if (e.key == 'Enter')     execTrade()
  if (e.key == 'ArrowUp')   dq(1)
  if (e.key == 'ArrowDown') dq(-1)
  if (e.key == '1')         lTab(0)
  if (e.key == '2')         lTab(1)
  if (e.key == '3')         lTab(2)
})

window.addEventListener('resize', function() {
  if (G) drawChart()
})
