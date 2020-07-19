const fs = require('fs');

exports.handleTodoList = function (req, res, session) {
  switch (req.method) {
    case "GET":
      var newItemList = [];
      //console.log("old session: " + ('./sessions/' + session.id));
      fs.readFile(('./sessions/' + session.id), (err, fileData) => {
        if (!err) {
          console.log("loading old session data");
          var oldSessionData = JSON.parse(fileData);

          for (let i = 0; i < oldSessionData.todoList.length; i++) {
            var item = {
              id: i,
              description: oldSessionData.todoList[i]
            }
            //console.log(item);
            newItemList.push(item);
          }
          session.todoList = newItemList;
          //console.log("old data i want: " + newItemList);
        }


        if (!session.todoList) { //if this session does not have a 'todoList' variable we want to create one
          console.log("creating new 'todoList' variable");
          session.todoList = [];
        }
        //get current todolist (from session obj)
        if (newItemList.length < 1 || newItemList == undefined) {
          for (let i = 0; i < session.todoList.length; i++) {
            var item = {
              id: i,
              description: session.todoList[i]
            }
            newItemList.push(item);
          }
        }

        res.writeHead(200, {
          'Content-Type': 'application/json'
        });
        //in addition to using JSON.stringify format JSON using .map() function on todoList
        res.end(JSON.stringify(newItemList));
      });
      break;


    case "POST":
      if (!session.todoList) { //if this session does not have a 'todoList' variable we want to create one
        console.log("creating new 'todoList' variable");
        session.todoList = [];
      }
      convertRequest(req, data => {
        console.log("converting request");
        console.log("request converted to: " + data.todo);
        session.todoList.push(data.todo);
        fs.writeFile(('./sessions/' + session.id), JSON.stringify(session), err => {
          //console.log(JSON.stringify(session));
          if (err) {
            res.writeHead(500, {
              'Content-Type': 'text/html'
            });
            return res.end("500 Internal Server Error");
          } else {
            res.writeHead(200, 'OK');
            res.end();
          }
        });
      });

      break;
    default:
      res.writeHead(405, {
        'Allow': 'GET, POST'
      });
      res.end("Not Allowed");
  }

};

/*
  converts the HTTP POST request body into a JSON object
*/
function convertRequest(req, callback) {
  let data = "";
  req.on('data', chunk => {
    data += chunk.toString();
  });
  req.on('end', () => {
    callback(JSON.parse(data));

  });
}