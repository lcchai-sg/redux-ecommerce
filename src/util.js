export default {
  formatCurrency: function (num) {
    return '$' + num.toFixed(2) + ' ';
    // return '$' + parseFloat(num.toFixed(2)) + ' ';
  }
}