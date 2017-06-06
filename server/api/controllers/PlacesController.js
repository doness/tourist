/**
 * PlacesController
 *
 * @description :: Server-side logic for managing Places
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

module.exports = {
    restaurants: function (req, res) {
        req.validate({
            where: 'json'
        });
        var reqQuery = actionUtil.parseCriteria(req);
        var unirest = require('unirest');
        unirest.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?type=restaurant&key=AIzaSyBkGAsbPtAn9CNeuWEJh1T5kNgcE1jDD4A')
            .headers({ 'Content-Type': 'application/json' })
            .query(reqQuery)
            .send()
            .as.json(function (response) {
                if (response.error) {
                    if (response.body) {
                        return res.serverError(response.body.message);
                    }
                    return res.serverError(response);
                }
                if (response.body && response.body.results) {
                    return res.ok(response.body.results);
                }
                return res.forbidden(response);
            });
    },
    details: function (req, res) {
        req.validate({
            id: 'string'
        });
        var id = actionUtil.parsePk(req);
        var unirest = require('unirest');
        unirest.get('https://maps.googleapis.com/maps/api/place/details/json?placeid=' + id + '&key=AIzaSyBkGAsbPtAn9CNeuWEJh1T5kNgcE1jDD4A')
            .headers({ 'Content-Type': 'application/json' })
            .send()
            .as.json(function (response) {
                if (response.error) {
                    if (response.body) {
                        return res.serverError(response.body.message);
                    }
                    return res.serverError(response);
                }
                if (response.body && response.body.result) {
                    return res.ok(response.body.result);
                }
                return res.forbidden(response);
            });
    },
    autosuggest: function (req, res) {
        req.validate({
            where: 'json'
        });
        var reqQuery = actionUtil.parseCriteria(req);
        var unirest = require('unirest');
        unirest.get('https://maps.googleapis.com/maps/api/place/autocomplete/json?types=establishment&key=AIzaSyBkGAsbPtAn9CNeuWEJh1T5kNgcE1jDD4A')
            .headers({ 'Content-Type': 'application/json' })
            .query(reqQuery)
            .send()
            .as.json(function (response) {
                if (response.error) {
                    if (response.body) {
                        return res.serverError(response.body.message);
                    }
                    return res.serverError(response);
                }
                if (response.body && response.body.predictions) {
                    return res.ok(response.body.predictions);
                }
                return res.forbidden(response);
            });
    },
};

