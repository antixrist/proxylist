[![Build Status](https://travis-ci.org/selfrefactor/proxyneedle.svg?branch=master)](https://travis-ci.org/selfrefactor/proxyneedle)
[![Version](https://img.shields.io/npm/v/proxyneedle.svg)](https://www.npmjs.com/package/proxyneedle)
[![Dependency Status](https://david-dm.org/selfrefactor/proxyneedle.svg)](https://david-dm.org/selfrefactor/proxyneedle)
[![Downloads](https://img.shields.io/npm/dt/proxyneedle.svg)](https://www.npmjs.com/package/proxyneedle)
[![npm](https://img.shields.io/npm/dm/proxyneedle.svg?maxAge=2592000?style=flat-square)]()
[![Github All Releases](https://img.shields.io/github/downloads/selfrefactor/proxyneedle/total.svg?maxAge=2592000)]()
[![Twitter Follow](https://img.shields.io/twitter/follow/self_refactor.svg?style=social&label=Follow&maxAge=2592000?style=flat-square)]()

#Proxylist - get fresh free proxies

## Motivation

I was building "proxyneedle" and I was almost ready, when the failed tests
proved that the public fresh list I was using was Java reliable(mock intended). 
So I have option to throw "proxyneedle" away or to scrape some websites and 
deliver free and fresh proxies for me and for anyone else interested in the topic.

# Usage

```javascript
// npm i -S proxylist
const proxylist = require("proxylist")
proxylist.main().then(console.log) //=> ["145.34.32.156:4440", ...]
proxylist.first().then(console.log)
proxylist.second().then(console.log)
```

## Functions

<dl>
<dt><a href="#main">main()</a> ⇒ <code>Promise</code></dt>
<dd><p>Initiate scraping of proxy list website www.us-proxy.org</p>
</dd>
<dt><a href="#first">first()</a> ⇒ <code>Promise</code></dt>
<dd><p>Initiate scraping of proxy list website www.hide-my-ip.com</p>
</dd>
<dt><a href="#second">second()</a> ⇒ <code>Promise</code></dt>
<dd><p>Initiate scraping of proxy list website www.ultraproxies.com</p>
</dd>
</dl>

<a name="main"></a>

## main() ⇒ <code>Promise</code>
Initiate scraping of proxy list website www.us-proxy.org

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise => Array of proxy ip addresses such as '23.106.76.49:29842'  
<a name="first"></a>

## first() ⇒ <code>Promise</code>
Initiate scraping of proxy list website www.hide-my-ip.com

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise => Array of proxy ip addresses with maximum length of 50  
<a name="second"></a>

## second() ⇒ <code>Promise</code>
Initiate scraping of proxy list website www.ultraproxies.com

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise => Array of proxy ip addresses  
