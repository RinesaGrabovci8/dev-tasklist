function shuffleValues() {
    const checkboxContainer = document.getElementById('checkbox-container');
    for (let i = checkboxContainer.children.length; i >= 0; i--) {
        checkboxContainer.appendChild(checkboxContainer.children[Math.random() * i | 0]);
    }
}

function changeValues() {
    const checkboxContainer = document.getElementById('checkbox-container');

    checkboxContainer.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
        checkbox.checked = !checkbox.checked; 
    });
}

function showSelectedValues() {
    const selectedvalues = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
        selectedvalues.push(checkbox.value);
    });

    alert('Selected Values: ' + (selectedvalues.length > 0 ? selectedvalues.join(', ') : 'None'));
}
