using System.Collections.Generic;
using UserApp.Models.Data;

namespace UserApp.Services
{
    public interface IParser
    {
        ICollection<UserDao> Parse(ICollection<string> rows);
    }
}