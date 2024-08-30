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

// Simulated friends data (replace with real data later)
const friendsData = [
    { name: "Friend1", avatar: "https://via.placeholder.com/50" },
    { name: "Friend2", avatar: "https://via.placeholder.com/50" },
    { name: "Friend3", avatar: "https://via.placeholder.com/50" }
];

// Update friends display
function updateFriends() {
    const friendsList = document.getElementById('friends-list');
    friendsList.innerHTML = '';
    friendsData.forEach(friend => {
        const div = document.createElement('div');
        div.className = 'friend-item';
        div.innerHTML = `
            <img src="${friend.avatar}" alt="${friend.name}">
            <span>${friend.name}</span>
        `;
        friendsList.appendChild(div);
    });
}

// Simulated profile data (replace with real data later)
const profileData = {
    name: "John Doe",
    bio: "Passionate trader and investor",
    pnl: 5000,
    avatar: "https://via.placeholder.com/100"
};

// Update profile display
function updateProfile() {
    document.getElementById('profile-name').textContent = profileData.name;
    document.getElementById('profile-bio').textContent = profileData.bio;
    document.getElementById('profile-pnl').textContent = `$${profileData.pnl}`;
    document.getElementById('profile-picture').src = profileData.avatar;
}

// Handle navbar item clicks
function handleNavbarClick(event) {
    event.preventDefault();
    const navItems = document.querySelectorAll('#navbar a');
    navItems.forEach(item => item.classList.remove('active'));
    event.currentTarget.classList.add('active');
    
    // Show the corresponding tab content
    const tabId = event.currentTarget.getAttribute('href').substring(1);
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

// Initialize the app
function init() {
    updateCurrentPosition();
    updateLeaderboard();
    updateFriends();
    updateProfile();
    
    // Add click event listeners to navbar items
    const navItems = document.querySelectorAll('#navbar a');
    navItems.forEach(item => item.addEventListener('click', handleNavbarClick));
    
    // Set 'Dashboard' as the default active tab
    document.querySelector('#navbar a[href="#dashboard"]').classList.add('active');
    document.getElementById('dashboard').classList.add('active');

    // Hide loading spinner and show app content
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('app').classList.add('loaded');
    }, 500); // 0.5 seconds loading time
}

// Make sure init is called when the page loads
window.addEventListener('load', init);
