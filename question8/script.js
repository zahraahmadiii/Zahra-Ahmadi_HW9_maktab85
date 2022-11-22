function formatDate(date) {

    console.log(date);
    console.log(new Date());
    console.log(new Date() - date);
  
    if (new Date(new Date() - 1001) <= date && date <= new Date()) {
      alert("right now");
    } else if (
      new Date(new Date() - 60 * 1000) < date &&
      date < new Date(new Date() - 1001)
    ) {
      alert(`${Math.round((new Date() - date) / 1000)} sec ago`);
    } else if (
      new Date(new Date() - 59 * 60 * 1000) < date &&
      date < new Date(new Date() - 60 * 1000)
    ) {
      alert(`${Math.round((new Date() - date) / (1000 * 60))} min ago`);
    } else {
      var d = new Date();
      d = new Date(d.getTime() - 3000000);
      var date_format_str =
        d.getFullYear().toString() +
        "-" +
        ((d.getMonth() + 1).toString().length == 2
          ? (d.getMonth() + 1).toString()
          : "0" + (d.getMonth() + 1).toString()) +
        "-" +
        (d.getDate().toString().length == 2
          ? d.getDate().toString()
          : "0" + d.getDate().toString()) +
        " " +
        (d.getHours().toString().length == 2
          ? d.getHours().toString()
          : "0" + d.getHours().toString()) +
        ":" +
        ((parseInt(d.getMinutes() / 5) * 5).toString().length == 2
          ? (parseInt(d.getMinutes() / 5) * 5).toString()
          : "0" + (parseInt(d.getMinutes() / 5) * 5).toString()) +
        ":00";
      alert(date_format_str);
    }
  }
  
  formatDate(new Date(new Date - 1000))
  formatDate(new Date(new Date - (30 * 1000)))
  formatDate(new Date(new Date() - 5 * 60 * 1000)); 
  formatDate(new Date(new Date() - 86400 * 1000));