function viewFile(id) {
    document.getElementById('modal-title').textContent = `নথি আইডি: #${id}`;
    document.getElementById('file-modal').classList.add('active');
}

function closeModal() {
    document.getElementById('file-modal').classList.remove('active');
}

function action(type) {
    alert(`${type} সফল হয়েছে। ফাইল ট্র্যাকারে আপডেট করা হলো।`);
    closeModal();
}

// Live Clock
function updateClock() {
    const clock = document.getElementById('live-clock');
    const now = new Date();
    const options = { 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true, 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    };
    clock.textContent = now.toLocaleTimeString('bn-BD', options);
}

setInterval(updateClock, 1000);
updateClock();
