Template.dashboardItem.helpers({
  devices: function() {
    return Devices.find();
  }
});

// Template.dashboardItem.events({
//   'click .device-items': function() {
//     console.log("Clicked");
//     Session.set('selectedDevice', 'session value test');
//     Session.get('selectedDevice');
//   }
// });
