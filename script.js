let selectedAssignment = '';

function openSubmit(title) {
    selectedAssignment = title;
    document.getElementById('selectedWork').innerHTML =
        '<b>Selected Assignment:</b> ' + title;
    document.getElementById('submitArea').style.display = 'block';
    document.getElementById('submit').scrollIntoView({ behavior: 'smooth' });
}

function submitWork() {
    if (selectedAssignment === '') return;

    alert('Your submission for "' + selectedAssignment + '" has been submitted successfully.');
    document.getElementById('submitArea').style.display = 'none';
}

function addAssignment(event) {
    event.preventDefault();

    const course = document.getElementById('course').value;
    const title = document.getElementById('assignment').value;
    const date = document.getElementById('deadline').value;
    const formattedDate = new Date(date + 'T00:00:00').toLocaleDateString('en-GB', {
        day: '2-digit', month: 'short', year: 'numeric'
    });
    const safeTitle = title.replace(/'/g, "\\'");

    const newRow = `
    <tr>
      <td>${course}</td>
      <td>${title}</td>
      <td>${formattedDate}</td>
      <td class="pending">Pending</td>
      <td><button class="small-btn" onclick="openSubmit('${safeTitle}')">Submit</button></td>
    </tr>`;

    document.getElementById('assignmentRows').insertAdjacentHTML('beforeend', newRow);
    document.getElementById('total').textContent = Number(document.getElementById('total').textContent) + 1;
    document.getElementById('pendingCount').textContent = Number(document.getElementById('pendingCount').textContent) + 1;
    event.target.reset();

    alert('New assignment added successfully.');
    document.getElementById('assignments').scrollIntoView({ behavior: 'smooth' });
}
