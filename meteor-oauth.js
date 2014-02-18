if (Meteor.isClient) {

  Template.hello.loggedIn = function () {
    return Meteor.user();
  };

}

