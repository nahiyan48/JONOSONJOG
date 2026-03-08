document.addEventListener('DOMContentLoaded', function() {
    // Initial Stats Animation
    animatePopulation();
    initMiniChart();
    
    // Auto-update scanning location simulation
    const locations = ['ঢাকা সদর', 'চট্টগ্রাম পোর্ট', 'সিলেট জিন্দাবাজার', 'রাজশাহী বিসিক', 'বরিশাল সদর', 'খুলনা শিববাড়ী'];
    let locIndex = 0;
    setInterval(() => {
        document.getElementById('scanning-loc').textContent = `স্ক্যানিং: ${locations[locIndex]}...`;
        locIndex = (locIndex + 1) % locations.length;
    }, 3000);
});

// Population Counter Animation
function animatePopulation() {
    const popEl = document.getElementById('pop-count');
    let count = 174000000;
    setInterval(() => {
        count += Math.floor(Math.random() * 5);
        popEl.textContent = count.toLocaleString('bn-BD') + ' জন';
    }, 2000);
}

// Chart.js Mockup
function initMiniChart() {
    const ctx = document.getElementById('mini-chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['10am', '11am', '12pm', '1pm', '2pm', '3pm'],
            datasets: [{
                data: [12, 19, 15, 25, 22, 30],
                borderColor: '#00f2ff',
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 0
            }]
        },
        options: {
            plugins: { legend: { display: false } },
            scales: {
                x: { display: false },
                y: { display: false }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Modal Logic
function openReportModal() {
    document.getElementById('report-modal').classList.add('active');
}

function closeReportModal() {
    document.getElementById('report-modal').classList.remove('active');
    // Reset steps
    nextStep(1);
}

function nextStep(step) {
    // Hide all steps
    document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    
    // Show target step
    document.getElementById(`form-step${step}`).classList.add('active');
    
    // Update indicators
    for(let i=1; i<=step; i++) {
        document.getElementById(`step${i}-indicator`).classList.add('active');
    }
}

function selectPay(el) {
    document.querySelectorAll('.pay-card').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
}

function submitReport() {
    const btn = document.querySelector('#form-step3 .btn-primary');
    btn.textContent = 'প্রসেসিং...';
    btn.disabled = true;
    
    setTimeout(() => {
        alert('আপনার রিপোর্ট সফলভাবে দাখিল করা হয়েছে। ট্র্যাকিং আইডি: NCC-' + Math.floor(Math.random() * 1000000));
        closeReportModal();
        btn.textContent = 'রিপোর্ট সম্পন্ন করুন';
        btn.disabled = false;
    }, 2000);
}

function selectDivision(name) {
    document.getElementById('scanning-loc').textContent = `ম্যানুয়াল সিলেক্ট: ${name}...`;
    // Add glowing effect to division
    alert(name + ' বিভাগ সিলেক্ট করা হয়েছে। রিয়েল-টাইম ডাটা লোড হচ্ছে...');
}
