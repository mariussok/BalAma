using System;
using System.Collections.Generic;
using UserApp.Models.Data;

namespace UserApp.Services
{
    public class Parser : IParser
    {
        public ICollection<UserDao> Parse(ICollection<string> rows)
        {
            var users = new List<UserDao>();
            foreach (var row in rows)
            {
                var data = row.Trim('\n').Split(',');
                if (data.Length < 5) break;

                var user = new UserDao
                {
                    Name = data[0],
                    DateOfBirth = DateTime.Parse(data[1]),
                    Password = data[2],
                    Email = data[3],
                    AdditionalInfo = data[4]
                };

                users.Add(user);
            }

            return users;
        }
    }
}