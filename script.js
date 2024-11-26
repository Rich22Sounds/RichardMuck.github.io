document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabs = document.querySelectorAll('.tab');
  
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons and tabs
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabs.forEach(tab => tab.classList.remove('active'));
  
        // Add active class to clicked button and corresponding tab
        button.classList.add('active');
        const targetTab = document.getElementById(button.dataset.tab);
        targetTab.classList.add('active');
      });
    });
  });

  const button = document.querySelector('.action-button');

button.addEventListener('mouseenter', () => {
  button.classList.add('loading');
});

button.addEventListener('mouseleave', () => {
  button.classList.remove('loading');
});