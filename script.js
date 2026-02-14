const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  // 1. Select all price elements using the plural class name from the test
    const priceElements = document.querySelectorAll('.prices');
    let total = 0;

    // 2. Calculate sum by iterating through the current text in the table
    priceElements.forEach(element => {
        const val = parseFloat(element.textContent);
        if (!isNaN(val)) {
            total += val;
        }
    });

    // 3. Check if an answer row already exists to avoid duplicates
    let ansRow = document.getElementById("ans-row");
    if (ansRow) {
        ansRow.remove();
    }

    // 4. Create the new row and the specific #ans cell
    const table = document.querySelector('table');
    const newRow = document.createElement('tr');
    newRow.id = "ans-row"; // Helper ID to manage the row
    
    const totalCell = document.createElement('td');
    totalCell.id = "ans"; // REQUIRED by the test: cy.get("#ans")
    totalCell.textContent = total;
    
    // Optional: Make it look nice by spanning both columns
    totalCell.setAttribute('colspan', '2');

    newRow.appendChild(totalCell);
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

