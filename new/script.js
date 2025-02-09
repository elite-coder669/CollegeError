
let votersData = [];

// Load voters.json file
fetch('voters.json')
    .then(response => response.json())
    .then(data => {
        votersData = data;
    })
    .catch(error => {
        console.error('Error loading voters.json:', error);
    });

let currentVoter = null;
let hasVoted = false;

function verifyIris() {
    const irisInput = document.getElementById('irisInput').value.trim();
    const irisError = document.getElementById('irisError');

    currentVoter = votersData.find(voter => voter.iris_id === irisInput);

    if (currentVoter) {
        irisError.textContent = '';
        showStep(2);
    } else {
        irisError.textContent = 'Invalid Iris ID. Please try again.';
    }
}

function verifyNFC() {
    const nfcInput = document.getElementById('nfcInput').value.trim();
    const nfcError = document.getElementById('nfcError');

    if (currentVoter && nfcInput === currentVoter.nfc_id) {
        nfcError.textContent = '';
        document.getElementById('voterPhoto').src = currentVoter.photo;
        document.getElementById('voterName').textContent = `Name: ${currentVoter.name}`;
        document.getElementById('voterID').textContent = `Voter ID: ${currentVoter.voter_id}`;
        showStep(3);
    } else {
        nfcError.textContent = 'Invalid NFC ID. Please try again.';
    }
}

function castVote(party) {
    if (hasVoted) return;

    hasVoted = true;
    console.log(`Vote recorded for ${party}`);
    
    setTimeout(() => {
        showStep(5);
        setTimeout(() => {
            location.reload();
        }, 3000);
    }, 2000);
}

function showStep(stepNumber) {
    const steps = document.getElementsByClassName('step');
    for (let i = 0; i < steps.length; i++) {
        steps[i].style.display = 'none';
    }
    document.getElementById(`step${stepNumber}`).style.display = 'block';
}
