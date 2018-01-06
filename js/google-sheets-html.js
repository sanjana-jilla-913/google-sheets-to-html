/*!
 * 
 * Google Sheets To HTML v0.9a
 * 
 * To use, simply replace the "tq?key=" value in the
 * URL below with your own unique Google document ID
 * 
 * The Google document's sharing must be set to public
 * 
 */

google.load('visualization', '1', {
    packages: ['table']
});
var visualization;

function drawVisualization() {
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1EPQnj8DJNOsz_L0arsrgaGhF9fVw9tBQqYFXsdmlKUo&output=html&usp=sharing');
    query.setQuery('SELECT B, D, E, F, G, H, I, J label B "Team Name", D "Flight", E "Round", F "First Main Point", G "Second Main Point", H "Third Main Point", I "Feedback", J"Do you think you won or lost?" where Debate Detective (Responses) A:J ='"&A1&"'');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('table'));
    visualization.draw(data, {
        legend: 'bottom'
    });
}
google.setOnLoadCallback(drawVisualization);
