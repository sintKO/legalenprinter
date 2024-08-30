let tg = window.Telegram.WebApp;

// Expand the Web App to full screen
tg.expand();

// Simulated current position data (replace with real data later)
const currentPosition = {
    asset: "BTC/USD",
    entry: 50000,
    stopLoss: 49000,
    takeProfit: 52000
};

// Update current position display
function updateCurrentPosition() {
    const positionDetails = document.getElementById('position-details');
    positionDetails.innerHTML = `
        Asset: ${currentPosition.asset}<br>
        Entry: $${currentPosition.entry}<br>
        Stop Loss: $${currentPosition.stopLoss}<br>
        Take Profit: $${currentPosition.takeProfit}
    `;
}

// Handle Copy Trade button click
document.getElementById('copyTradeBtn').addEventListener('click', () => {
    tg.showAlert("Trade copied! (This is a placeholder action)");
});

// Simulated leaderboard data (replace with real data later)
const leaderboardData = [
    { name: "User1", pnl: 1000 },
    { name: "User2", pnl: 750 },
    { name: "User3", pnl: 500 }
];

// Update leaderboard display
function updateLeaderboard() {
    const leaderboardList = document.getElementById('leaderboard-list');
    leaderboardList.innerHTML = '';
    leaderboardData.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user.name}: $${user.pnl}`;
        leaderboardList.appendChild(li);
    });
}

// Add this function to your existing JavaScript
function handleNavbarClick(event) {
    event.preventDefault();
    const navItems = document.querySelectorAll('#navbar a');
    navItems.forEach(item => item.classList.remove('active'));
    event.currentTarget.classList.add('active');
    // Here you can add logic to show/hide different sections based on the clicked item
}

// Modify your init function to include navbar setup
function init() {
    updateCurrentPosition();
    updateLeaderboard();
    
    // Add click event listeners to navbar items
    const navItems = document.querySelectorAll('#navbar a');
    navItems.forEach(item => item.addEventListener('click', handleNavbarClick));
    
    // Set 'Trades' as the default active tab
    document.querySelector('#navbar a[href="#trades"]').classList.add('active');
}

// Make sure init is called when the page loads
window.addEventListener('load', init);
