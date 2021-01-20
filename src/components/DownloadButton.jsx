import React from 'react'

function DownloadButton({results}) {

    const convertToCSV = (objArray) => {
      let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
      let str = '';

      for (let i = 0; i < array.length; i++) {
          let line = '';
          for (let index in array[i]) {
              if (line != '') line += ','

              line += array[i][index];
          }

          str += line + '\r\n';
      }

      return str;
  }

  function exportCSVFile(headers, items, fileTitle) {
      if (headers) {
          items.unshift(headers);
      }

    // Convert Object to JSON
    let jsonObject = JSON.stringify(items);

    let csv = convertToCSV(jsonObject);

    let exportedFilenmae = fileTitle + '.csv' || 'export.csv';

    let blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
        let link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            let url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
  }

  function download(){
    var headers = {
        gender: 'Gender',
        firstname: "FirstName",
        lastname: "LastName",
        city: "City",
        state: "State",
        country: 'Country',
        email: 'Email',
        phone: 'Phone'

    };

    let itemsNotFormatted = results;

    var itemsFormatted = [];

    // format the data
    itemsNotFormatted.forEach((item) => {
        itemsFormatted.push({
            gender: item.gender,  //.replace(/,/g, ''),  remove commas to avoid errors,
            firstname: item.name.first,
            lastname: item.name.last,
            city: item.location.city,
            state: item.location.state,
            country: item.location.country,
            email: item.email,
            phone: item.phone
        });
    });

    var fileTitle = 'userslist'; // or 'my-unique-title'

    exportCSVFile(headers, itemsFormatted, fileTitle); // call the exportCSVFile() function to process the JSON and trigger the download
  }





    return (
      <div>
         <button onClick={()=> download()} className="download-button"><i className="fas fa-cloud-download-alt"></i>Download results</button>
      </div>
    )
}

export default DownloadButton
