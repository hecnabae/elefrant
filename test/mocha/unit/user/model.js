'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

//Globals
var user, user2;

//The tests
describe('<Unit Test>', function () {
    describe('Model User:', function () {
        before(function (done) {
            user = new User({
                name: 'Test User',
                email: 'test@test.com',
                username: 'testuser',
                password: 'password',
                role: ['admin']
            });
            user2 = new User(user);

            done();
        });

        describe('Method Save', function () {
            it('should begin without the test user', function (done) {
                User.find({
                    email: 'test@test.com'
                }, function (err, users) {
                    users.should.have.length(0);
                    done();
                });
            });

            it('should be able to save without problems', function (done) {
                user.save(done);
            });

            it('should fail to save an existing user again', function (done) {
                user.save();
                return user2.save(function (err) {
                    should.exist(err);
                    done();
                });
            });

            it('should show an error when try to save without name', function (done) {
                user.name = '';
                return user.save(function (err) {
                    should.exist(err);
                    done();
                });
            });

            it('should show an error when try to save an invalid email', function (done) {
                user.name = 'Test User';
                user.email = 'testtest.com';
                return user.save(function (err) {
                    should.exist(err);
                    done();
                });
            });
        });

        after(function (done) {
            user.remove();
            done();
        });
    });
});
