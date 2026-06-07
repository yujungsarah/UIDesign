// --- DARK MODE LOGIC ---
document.querySelector('#darkmode').addEventListener('click', function() {
  document.body.classList.toggle('dark');
  
  const btn = document.querySelector('#darkmode');
  if (document.body.classList.contains('dark')) {
      btn.innerHTML = '☀️';
  } else {
      btn.innerHTML = '🌙';
  }
});

// --- NAME ANIMATION LOGIC ---
// This ensures the animation finishes completely even if the mouse leaves!
const brandName = document.querySelector('.brand-name');

brandName.addEventListener('mouseenter', () => {
  // Only add the class if it's not already animating
  if (!brandName.classList.contains('is-animating')) {
    brandName.classList.add('is-animating');
    
    // Remove the class exactly when the 5-second animation finishes
    setTimeout(() => {
      brandName.classList.remove('is-animating');
    }, 5000); 
  }
});