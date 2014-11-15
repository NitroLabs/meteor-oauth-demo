// Set the redirect url for local development
// Meteor.absoluteUrl.defaultOptions.rootUrl = "http://umkk03403d51.maxkferg.koding.io/";

if (Meteor.isClient){
    var scopes = ['email','user_photos','user_videos','read_stream']
    Accounts.ui.config({'requestPermissions':{'facebook':scopes}});
}


if (Meteor.isClient) {
  Tracker.autorun(function () {
    Meteor.subscribe("userData");
  });
  
  Template.helpers({
    "loggedIn":function () {
        return Meteor.user();
    }
  });
}



if (Meteor.isServer){
    Meteor.publish("userData", function () {
        return Meteor.users.find({_id: this.userId},
            {fields: {'services': 1}});
    });
}