document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');
    
    dropdownBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const submenu = btn.nextElementSibling;
        if (submenu) {
          submenu.classList.toggle('open');
        }
      });
    });
  
    const ctx = document.getElementById('heatingChart').getContext('2d');
    const heatingChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Heating Consumption',
          data: [65, 59, 80, 81, 56, 55],
          borderColor: '#9ECE7E',
          backgroundColor: 'rgba(158, 206, 126, 0.2)',
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
})
