// Simulate Telegram environment for testing in browser
if (!window.Telegram) {
    window.Telegram = {
        WebApp: {
            expand: () => console.log("Expanded"),
            showAlert: (message) => alert(message),
            MainButton: {
                setText: (text) => {
                    console.log("Main button text set to:", text);
                    return { 
                        show: () => {
                            console.log("Main button shown");
                            return {
                                onClick: (callback) => {
                                    const mainButton = document.createElement('button');
                                    mainButton.textContent = text;
                                    mainButton.addEventListener('click', callback);
                                    document.body.appendChild(mainButton);
                                }
                            };
                        }
                    };
                }
            }
        }
    };
}

// Existing code
let tg = window.Telegram.WebApp;
tg.expand();

let button = document.getElementById("mainButton");
button.addEventListener("click", () => {
    tg.showAlert("You clicked the button!");
});

tg.MainButton.setText("Main Button").show().onClick(() => {
    tg.showAlert("Main button clicked!");
});