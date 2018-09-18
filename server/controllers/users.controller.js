const ad = require('../utilities/ldap.js')();
const ext = require('../utilities/extensions.js');
const router = require('express').Router();

router.get('/', (req, res) => {
    ad.user().get().then((users) => {
        var searchTerms = (req.query.search || '').toLowerCase().trim().split(' ').filter((term) => {
            return ((term || '') !== '');
        })
        var users = users.filter((user) => {
            if (searchTerms.length === 0) {
                return true;
            }
            for (var term of searchTerms) {
                if ((user.sAMAccountName).toLowerCase().indexOf(term) > -1) {
                    return true;
                }
            }
            return false
        });
        return res.send(users.map((user) => {
            return user;
        }));
    }).catch((err) => {
        return res.send([]);
    })
});

module.exports = router;