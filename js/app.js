$('#usernameForm').submit(function(object) {
    $('#friendsList').empty();
    $('#followersList').empty();

    var user = {
        'screen_name': $('#screen_name').val()
    }

    var friendsIDsReq = $.getJSON('http://bluebird-api.herokuapp.com/api/friends/ids', user);
    var followersIDsReq = $.getJSON('http://bluebird-api.herokuapp.com/api/followers/ids', user);

    $.when(friendsIDsReq, followersIDsReq).done(function (friendsIDsRes, followersIDsRes) {
        console.log('Friends');
        console.log(friendsIDsRes[0].ids);
        console.log('Followers');
        console.log(followersIDsRes[0].ids);

        var uniqFriendsIDs = _.difference(friendsIDsRes[0].ids, followersIDsRes[0].ids);
        var uniqFollowersIDs = _.difference(followersIDsRes[0].ids, friendsIDsRes[0].ids);

        console.log('Unique Friends IDs');
        console.log(uniqFriendsIDs);
        console.log(uniqFriendsIDs.length);
        var uniqFriendsIDsArr = Array();
        while (uniqFriendsIDs.length > 0) {
            uniqFriendsIDsArr.push(uniqFriendsIDs.splice(0, 100));
        }
        console.log('Unique Friends Array');
        console.log(uniqFriendsIDsArr);

        console.log('Unique Followers IDs');
        console.log(uniqFollowersIDs);
        console.log(uniqFollowersIDs.length);
        var uniqFollowersIDsArr = Array();
        while (uniqFollowersIDs.length > 0) {
            uniqFollowersIDsArr.push(uniqFollowersIDs.splice(0, 100));
        }
        console.log('Unique Followers Array');
        console.log(uniqFollowersIDsArr);

        var friendsObjsReq = $.getJSON('http://bluebird-api.herokuapp.com/api/users/lookup', 'user_id=' + uniqFriendsIDsArr.join());
        $.when(friendsObjsReq).done(function (friendsObjsRes) {
            console.log('Unique Friends');
            console.log(friendsObjsRes);
            for (var i = 0; i < friendsObjsRes.length; ++i) {
                $('#friendsList').append('<li><b>' + friendsObjsRes[i].name + '</b> - @' + friendsObjsRes[i].screen_name + '</li>');
            }
        });

        var followersObjsReq = $.getJSON('http://bluebird-api.herokuapp.com/api/users/lookup', 'user_id=' + uniqFollowersIDsArr.join());
        $.when(followersObjsReq).done(function (followersObjsRes) {
            console.log('Unique Followers');
            console.log(followersObjsRes);
            for (var i = 0; i < followersObjsRes.length; ++i) {
                $('#followersList').append('<li><b>' + followersObjsRes[i].name + '</b> - @' + followersObjsRes[i].screen_name + '</li>');
            }
        });
    });
    return false;
});
