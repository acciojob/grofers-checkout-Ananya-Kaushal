const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  // 1. Select all elements with the class 'price'
    const priceElements = document.querySelectorAll('.price');
    let total = 0;

    // 2. Loop through the elements and sum their values
    priceElements.forEach(element => {
        // Convert the text content to a number
        total += Number(element.textContent);
    });

    // 3. Create a new row and a cell for the total
    const table = document.querySelector('table');
    const newRow = document.createElement('tr');
    const totalCell = document.createElement('td');

    // 4. Set the text and attributes
    totalCell.textContent = total;
    totalCell.setAttribute('id', 'ans'); // Good practice for identification
    
    // Make the cell span both columns for a clean look
    totalCell.setAttribute('colspan', '2'); 
    totalCell.style.textAlign = 'center';
    totalCell.style.fontWeight = 'bold';

    // 5. Append the cell to the row, and the row to the table
    newRow.appendChild(totalCell);
    table.appendChild(newRow);

    // Optional: Disable button after clicking to prevent duplicate rows
    getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);

