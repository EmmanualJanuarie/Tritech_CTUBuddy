using Microsoft.AspNetCore.SignalR;

namespace ChatApplication.Hub;

public class ChatHub : Microsoft.AspNetCore.SignalR.Hub
{
    //creating dictionary
    private readonly IDictionary<string, UserRoomConnection> _connection;

    public ChatHub(IDictionary<string, UserRoomConnection> connection)
    {
        _connection = connection;
    }

    
        //code to join room 
        public async Task JoinRoom(UserRoomConnection userConnection)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, groupName: userConnection.Room!);
            //add user to connections once the user is added to group
            _connection[Context.ConnectionId] = userConnection;
            await Clients.Group(userConnection.Room!) //Client proxy
                .SendAsync(method: "ReceiveMessage", arg1: "Let's Program Bot",
                    arg2: $"{userConnection.User} has Joined the Group");
            await SendConnectedUser(userConnection.Room!);
        }
        
        //create a procedure to send the message
        public async Task SendMessage(string message)
        {
            if (_connection.TryGetValue(Context.ConnectionId, out UserRoomConnection userRoomConnection))
            {
                await Clients.Group(userRoomConnection.Room!)
                    .SendAsync(method: "ReceiveMessage", userRoomConnection.User, message, DateTime.Now);
            }
        }

        public override Task OnDisconnectedAsync(Exception? exp)
        {
            if (!_connection.TryGetValue(Context.ConnectionId, out UserRoomConnection roomConnection))
            {
                return base.OnDisconnectedAsync(exp);
            }//sending the message to the group

            _connection.Remove(Context.ConnectionId);

            Clients.Group(roomConnection.Room!)
                .SendAsync(method: "ReceiveMessage", "Let's Program Bot", $"{roomConnection.User} has Left the Group");
            SendConnectedUser(roomConnection.Room!);
            return base.OnDisconnectedAsync(exp);
        }    
        
        //will send the connected user
         public Task SendConnectedUser(string room)  //sends the lists of users
        {
            var users = _connection.Values
                .Where(u => u.Room == room)
                .Select(s => s.User);//selects the user then sends it
            return Clients.Group(room).SendAsync(method: "ConnectedUser", users);// will be used to invoke in Angular
        }
     
    
}

 