const COMPARE_KEY = 'shopify_compare_products';

function getCompareProducts() {
  return JSON.parse(localStorage.getItem(COMPARE_KEY)) || [];
}

function saveCompareProducts(products) {
  localStorage.setItem(COMPARE_KEY, JSON.stringify(products));
}

function renderCompareBar() {

  const bar = document.getElementById('compare-bar');
  const container = document.getElementById('compare-items');

  if (!bar || !container) return;

  const products = getCompareProducts();

  if (!products.length) {
    bar.classList.add('hidden');
    return;
  }

  bar.classList.remove('hidden');

  container.innerHTML = products.map(handle => `
    <span class="compare-chip">
      ${handle}
    </span>
  `).join('');
}

function toggleCompare(handle) {

  let products = getCompareProducts();

  if (products.includes(handle)) {
    products = products.filter(p => p !== handle);
  } else {

    if (products.length >= 4) {
      alert('Maximum 4 products');
      return;
    }

    products.push(handle);
  }

  saveCompareProducts(products);
  renderCompareBar();
}

document.addEventListener('click', function(e) {

  if (e.target.classList.contains('compare-btn')) {

    const handle = e.target.dataset.productHandle;

    toggleCompare(handle);
  }

});

document.addEventListener('DOMContentLoaded', renderCompareBar);
