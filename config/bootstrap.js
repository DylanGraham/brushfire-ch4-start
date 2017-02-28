/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = cb => {

  Video.count().exec((err, numVideos) => {
    if (err) {
      return cb(err);
    }

    if (numVideos > 0) {
      console.log("Videos = " + numVideos);
    } else {
      console.log("There are no videos");
    }
  });
  // TODO: Seed the database with videos from YouTube.

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
