        // Array of checkbox names
        const cbNames = ["Sun1", "Sun2", "Sun3", "Mon1", "Mon2", "Mon3", "Tue1", "Tue2", "Tue3", "Wed1", "Wed2", "Wed3", "Thu1", "Thu2", "Thu3", "Fri1", "Fri2", "Fri3", "Sat1", "Sat2", "Sat3"];

        cbNames.forEach(name => {
            // Check if there is a stored value for the checkbox
            const isChecked = JSON.parse(localStorage.getItem(`Is${name}Enabled`)) || false;

            // Set the initial state of the checkbox
            document.getElementById(name).checked = isChecked;

            // Add event listener to the checkbox for changes
            document.getElementById(name).addEventListener('change', function () {
                // Update localStorage with the current checkbox state
                localStorage.setItem(`Is${name}Enabled`, this.checked);
            });
        });