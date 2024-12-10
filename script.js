document.querySelectorAll('.btn, .projeto-btn').forEach(btn => {
    btn.addEventListener('mouseover', function() {
      this.style.transform = 'scale(1.1)';
      this.style.transition = 'transform 0.3s ease';
    });
  
    btn.addEventListener('mouseout', function() {
      this.style.transform = 'scale(1)';
    });
  
    btn.addEventListener('click', function() {
      this.style.transform = 'scale(0.98)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
    });
  });
  