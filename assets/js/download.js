/*jslint browser:true */

/* Checks whether a date is valid. */
function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}

/* Updates the download link in the document. */
function setDownloadLink(download_url, name) {
  var download_tag = document.getElementById("download_link");
  download_tag.href = download_url;
  download_tag.download = name;
  download_tag.innerHTML = name;
}

/* Sets the message, can be either a countdown timer or some error. */
function setMessage(msg, isError) {
  if (typeof(isError)==='undefined') {
    isError = false;
  }
  var cls = isError ? "error": "info";
  var error_tag = document.getElementById("message");
  error_tag.innerHTML = msg;
  error_tag.class = cls;
}

/* Calculate whether the countDownDate has been reached. */
function calculateExpiry(countDownDate, interval) {
  var now = new Date();
  var diff = countDownDate - now;
  var expired = diff < 0;
  var error = false;
  var msg = "";

  if (expired) {
    msg = "EXPIRED";
    error = true;
    clearInterval(interval);
  } else {
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    msg = "Link expires in " + days + "d " + hours + "h " + minutes + "m ";
  }
  setMessage(msg, error);
}

/* Repeatedly loop and display the remaining time until link expiration. */
function countDown(id, countDownDate) {
  calculateExpiry(id, countDownDate);

  var x = setInterval(function() {
    calculateExpiry(id, countDownDate, x);
  }, 10000);
}

/* Searches for parameters identified by 'key' in a URL query string. */
function searchForParam(query, key) {
  var vars = query.split("&");
  var param = vars.find(function(param) {
    return decodeURIComponent(param.split("=")[0]) === key;
  });
  if (!param) {
    console.warn("Unable to find parameter: " + key);
    return;
  }
  return decodeURIComponent(param.split("=")[1]);
}

/* Parses expiration date from a signed AWS S3 URL. */
function getExpirationFromSignedUrl(signed_url) {
  var query = signed_url.split("?")[1];
  var expiration_timestamp = searchForParam(query, "Expires");
  return new Date(expiration_timestamp * 1000);
}

/* Parses download info from query URL and displays appropriate link/message. */
function ParseDownloadInfo() {
  var query = window.location.search.substring(1);
  var download_url = searchForParam(query, "url");
  var name = searchForParam(query, "name");
  if (!download_url || !name) {
    setMessage("Error: invalid url.", true);
    return;
  }
  var expire_date = getExpirationFromSignedUrl(download_url);
  if (! isValidDate(expire_date)) {
    setMessage("Error: Unable to parse signed AWS S3 url.", true);
    return;
  }
  setDownloadLink(download_url, name);
  countDown(expire_date);
}

module.exports = ParseDownloadInfo();
