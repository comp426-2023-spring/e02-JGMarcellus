function showHideShots() {
    let check = document.getElementById('opponent');
    let radiorps = document.getElementsByClassName('rps');
    let radiorpsls = document.getElementsByClassName('rpsls');

    // Show or hide radio buttons
    if (check.checked == true) {
        $('.shots').show();
    } else {
        $('.shots').hide();
    }


}

function startOver() {
    // Reset form
    document.getElementById('userinput').reset();
    showHideShots();
}

async function playGame() {
    // Get the selected game
    let game = $('input[type=radio][name=game]:checked').val();

    // Get the shot selected
    let shot = $('input[type=radio][name=shot]:checked').val();

    // Configure base URL
    let baseurl = window.location.href + 'app/';
    console.log(baseurl);

    // Configure url
    let url = baseurl + game + '/play/' + shot + '/'

    // Fetch results
    let response = await fetch(url);
    let results = await response.json();



}