# Assignment-2

## Eddie’s Trading Platform

Eddie’s Trading Platform (ETP) provides an introduction of bitcoin cryptocurrency and blockchain from PWC | United State. Providing information of what does Bitcoin, cryptocurrency, blockchain etc means. ETP also allows you to convert currencies to ease hassles of sourcing external converter. ETP displays a live cryptocurrency data table that shows a list of crytocurrency that consists of Bitcoin (BTC), Ethereum (ETH), EOS (EOS), Ripple (XRP) and Litecoin (LTC).  

## Design Process

ETP is designed for people that are mostly interested in cryptocurrency trading and the objective of this website is to allow users to conveniently achieve what they desire to.  

During the wireframing of the website, i was considering between a complex website or a minimalistic website. I decide to continue with a simple yet easy-to-use website because user experience is more important than a complex design.  

Complex website reference: https://iqonic.design/themes/coinex/dark/exchange.html  

Wireframe (Desktop View): Eddiechang99/Assignment-2/wireframe/Desktop-View-Wireframe.xd  
Wireframe (Mobile View): Eddiechang99/Assignment-2/wireframe/Mobile-View-Wireframe.xd

## Features

- Responsive Website  
- Currency Converter (API)  
- Live Crypto Exchange Rate Carousel (API)
- Live Cryptocurrency Data (API)  
- About Cryptocurrency (Linked to external source)  
- Social media icons in footer (Linked to social media profiles)  
- Bootstrap Scroll-to-Top button (References from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp)

## Techologies Used

The technologies used are Bootstrap, CSS, JavaScript, JSON and JQuery.  

I used Bootstrap to construct the website and I used CSS to beautify the website. The Scroll-to-Top button was built by bootstrap and it was scripted using JavaScript referenced by https://www.w3schools.com/howto/howto_js_scroll_to_top.asp.  

For the currency converter, I used JSON to create a function of the converter. After declaring the variable using querySelector to use the name of the currency selector, I looped through the currency rates using json.rates and compare if the selector is equal to json.rates.  

Live Crypto Exchange Rate Carousel was constructed using Bootstrap and API to function the carousel with the exchange rates. using JavaScript to the link the baseURL of https://widgets.cryptocompare.com/ and displaying the exchange rates back to the website.  

Live Cryptocurrency Data Table was made to display to the live data of cryptocurrency. It is constructed by API from https://api.coindesk.com/v1/bpi/currentprice.json. The data table is able to change currency to display the value of the cryptocurrency in the wanted currency.

## Testing

My user was asked to perform actions according to a case scenario. The actions required to perform in the case was to change the currency in the live cryptocurrency data table at the bottom section of the website. My user was able to perform the required actions successfully and smoothly without any guidance required.  

## Credits

### Currency Converter API
- https://github.com/NadavPeled1998/Currency-Converter/blob/master/CC.css 

### Live Cryptocurrency Data Table
- https://codepen.io/zreska/embed/wJQOGJ?height=265&theme-id=0&default-tab=html%2Cresult&user=zreska&slug-hash=wJQOGJ&pen-title=Bitcoin%20Live%20Updates&name=cp_embed_1

### Bootstrap 
- https://www.w3schools.com/bootstrap4/

### JavaScript
- https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
