using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using UserApp.Models.Data;
using UserApp.Models.Dto;
using UserApp.Services;

namespace UserApp.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUsersService _usersService;
        private readonly IMapper _mapper;

        public UsersController(IUsersService usersService, IMapper mapper)
        {
            _usersService = usersService;
            _mapper = mapper;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<IActionResult>  Get()
        {
            var users = await _usersService.GetAll();
            var usersMapped = _mapper.Map<IList<UserTableDto>>(users);

            return Ok(usersMapped);
        }

        // GET: api/Users/5
        [HttpGet("{id}", Name = "Get")]
        public async Task<IActionResult> Get(int id)
        {
            var user = await _usersService.Get(id);
            var userMapped = _mapper.Map<UserDto>(user);

            return Ok(userMapped);
        }

        // POST: api/Users
        [HttpPost("[action]")]
        public async Task<IActionResult> Add([FromBody] UserDto user)
        {
            var userMapped = _mapper.Map<UserDao>(user);
            await _usersService.Add(userMapped);

            return Ok();
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Upload()
        {
            var file = Request.Form.Files[0];
            await _usersService.Import(file);
            return Ok();
        }
    }
}
