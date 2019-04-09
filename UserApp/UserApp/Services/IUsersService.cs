using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using UserApp.Models.Data;

namespace UserApp.Services
{
    public interface IUsersService
    {
        Task<IList<UserDao>> GetAll();
        Task<UserDao> Get(int id);
        Task Add(UserDao user);
        Task Import(IFormFile file);
    }
}