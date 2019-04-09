using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using UserApp.AppDbContext;
using UserApp.Models.Data;

namespace UserApp.Services
{
    public class UsersService : IUsersService
    {
        private readonly UsersContext _usersContext;
        private readonly IParser _parser;

        public UsersService(UsersContext usersContext, IParser parser)
        {
            _usersContext = usersContext;
            _parser = parser;
        }

        public async Task<IList<UserDao>> GetAll()
        {
            var users = await _usersContext.Users.ToListAsync();

            return users;
        }

        public async Task<UserDao> Get(int id)
        {
            var user = await _usersContext.Users.FirstOrDefaultAsync(u => u.Id == id);

            return user;
        }

        public async Task Add(UserDao user)
        {
            await _usersContext.AddAsync(user);

            await _usersContext.SaveChangesAsync();
        }

        public async Task Import(IFormFile file)
        {

            ICollection<string> rows;
            using (var reader = new StreamReader(file.OpenReadStream(), Encoding.UTF8))
            {
                var header = reader.ReadLine();
                rows = reader.ReadToEnd().Split('\r');
            }

            var users = _parser.Parse(rows);

            await _usersContext.AddRangeAsync(users);

            await _usersContext.SaveChangesAsync();
        }

        
    }
}