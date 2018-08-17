const dateFormatter = dateStr => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    const date = new Date(dateStr);
    const today = new Date();
    let year = "";
    if (date.getFullYear() < today.getFullYear()) {
      year = date.getFullYear();
    }
    return `${monthNames[date.getMonth()]} ${date.getDate()} ${year}`;
};

export default dateFormatter;