const userId = '17151';

let res = {};
data = {
  "objectIds": {
    "CONTACT": 17151
  },
  "timeoutMillis": 5000,
  "types": ["CONTACT"]
};
  window.quickFetch.makeEarlyRequest(
    `sendoso-hubspot-${Math.random().toString(36).slice(-5)}`, {
      url: "/api-passthrough/crm-meta/v1/meta",
      timeout: 15e3,
      dataType: "json",
      contentType: "application/json",
      type: "POST",
      data: JSON.stringify(data),
      whenFinished: function (response) {
        console.log("Data Fetched");
        window.userDetail = response.data.CONTACT.properties;
        console.log(response.data.CONTACT.properties);
     
      },
      whenError: function (error) {
        console.log('Logging Error', error)
      }
    }
  )
