window.onload = function() {

            function updateBatteryStatus(battery) {
                document.querySelector('#charging').textContent = battery.charging ? 'charging' : 'not charging';

                document.querySelector('#level').textContent = battery.level * 100 + "%";
                
                var batlevel = battery.level * 100;

                document.querySelector('#dischargingTime').textContent = battery.dischargingTime / 3600 + " hrs";
                if (battery.level >= 0.5){
                    document.getElementById("bar0").style.background="yellow";
                    console.log("gotit")
                }
            }

            navigator.getBattery().then(function(battery) {
                // Update the battery status initially when the promise resolves ...
                updateBatteryStatus(battery);

                // .. and for any subsequent updates.
                battery.onchargingchange = function() {
                    updateBatteryStatus(battery);
                };

                battery.onlevelchange = function() {
                    updateBatteryStatus(battery);
                };

                battery.ondischargingtimechange = function() {
                    updateBatteryStatus(battery);
                };
            });
        };