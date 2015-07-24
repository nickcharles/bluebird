// $('#usernameForm').submit( function() {
//     var user = {'screen_name': $('#username').val()}
//     // console.log(user);

//     var frndsIDsReq = $.getJSON('http://nickcharles-bluebird.herokuapp.com/friends/ids', user);
//     var fllwrsIDsReq = $.getJSON('http://nickcharles-bluebird.herokuapp.com/followers/ids', user);

//     $.when(frndsIDsReq, fllwrsIDsReq).done(function (frndsIDsRes, fllwrsIDsRes) {
//         // console.log('Friends');
//         // console.log(frndsIDsRes[0].ids);
//         // console.log('Followers');
//         // console.log(fllwrsIDsRes[0].ids);

//         var uniqFrndsIDs = difference(frndsIDsRes[0].ids, fllwrsIDsRes[0].ids);
//         var uniqFllwrsIDs = difference(fllwrsIDsRes[0].ids, frndsIDsRes[0].ids);

//         // console.log('Unique Friends IDs');
//         // console.log(uniqFrndsIDs);
//         // console.log(uniqFrndsIDs.length);
//         var uniqFrndsIDsArr = Array();
//         while (uniqFrndsIDs.length > 0)
//         {
//             uniqFrndsIDsArr.push(uniqFrndsIDs.splice(0, 100));
//         }
//         // console.log('Unique Friends Array');
//         // console.log(uniqFrndsIDsArr);

//         // console.log('Unique Followers IDs');
//         // console.log(uniqFllwrsIDs);
//         // console.log(uniqFllwrsIDs.length);
//         var uniqFllwrsIDsArr = Array();
//         while (uniqFllwrsIDs.length > 0)
//         {
//             uniqFllwrsIDsArr.push(uniqFllwrsIDs.splice(0, 100));
//         }
//         // console.log('Unique Followers Array');
//         // console.log(uniqFllwrsIDsArr);

//         $( '.friends' ).empty();
//         $( '.followers' ).empty();

//         var frndsObjsQuery, frndsObjsReq;
//         frndsObjsReq = $.getJSON('http://nickcharles-bluebird.herokuapp.com/users/lookup', 'user_id=' + uniqFrndsIDsArr.join());
//         $.when(frndsObjsReq).done(function (frndsObjsRes) {
//             // console.log('Unique Friends');
//             // console.log(frndsObjsRes);
//             for (var j = 0; j < frndsObjsRes.length; ++j)
//             {
//                 $( '.friends' ).append('<li><b>' + frndsObjsRes[j].name + '</b> - @' + frndsObjsRes[j].screen_name + '</li>');
//             }
//         });

//         var fllwrsObjsQuery, fllwrsObjsReq;
//         fllwrsObjsReq = $.getJSON('http://nickcharles-bluebird.herokuapp.com/users/lookup', 'user_id=' + uniqFllwrsIDsArr.join());
//         $.when(fllwrsObjsReq).done(function (fllwrsObjsRes) {
//             // console.log('Unique Followers');
//             // console.log(fllwrsObjsRes);
//             for (var j = 0; j < fllwrsObjsRes.length; ++j)
//             {
//                 $( '.followers' ).append('<li><b>' + fllwrsObjsRes[j].name + '</b> - @' + fllwrsObjsRes[j].screen_name + '</li>');
//             }
//         });
//     });
//     return false;
// });