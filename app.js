// Registering a custom A-Frame component
AFRAME.registerComponent('interactive-machine', {
    init: function () {
        const el = this.el;
        const kpiPanel = document.querySelector('#kpi-panel');
        const closeBtn = document.querySelector('#close-btn');

        // Listen for a click/tap on this specific 3D entity
        el.addEventListener('click', function () {
            console.log("3D Model Tapped!");
            
            // You could dynamically update data here based on what part was clicked
            document.querySelector('#val-temp').innerText = (Math.floor(Math.random() * 20) + 30) + '°C';
            
            // Reveal the HTML dashboard
            kpiPanel.classList.remove('hidden');
        });

        // Close button logic for the HTML dashboard
        closeBtn.addEventListener('click', function() {
            kpiPanel.classList.add('hidden');
        });
    }
});